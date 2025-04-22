import { createClient } from '@supabase/supabase-js'
import { BlogPostType, BlogPostFormData } from '../types/blog'
import { nanoid } from 'nanoid'
import { toast } from 'sonner'
import { getToken } from './auth'
import { convertToSlug } from './utils'

// Inicializa el cliente de Supabase usando las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Verifica si las variables de entorno están disponibles
let supabase
let isSupabaseConfigured = false

try {
  if (!supabaseUrl || !supabaseKey) {
    console.warn(
      'Las variables de entorno de Supabase no están configuradas. Usando solo almacenamiento local.'
    )
  } else {
    // Crea el cliente de Supabase solo si ambas variables están definidas
    supabase = createClient(supabaseUrl, supabaseKey)
    isSupabaseConfigured = true
    console.log('Supabase configurado correctamente')
  }
} catch (error) {
  console.error('Error al inicializar Supabase:', error)
}

// Función para generar un slug a partir de un título
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Demo data inicial para inicializar la base de datos si está vacía
const initialBlogPosts: BlogPostType[] = [
  {
    id: 'opta-1',
    title: 'OPTA – Optimizador de Procesos, Tareas y Aprendizaje',
    slug: 'opta-optimizador-de-procesos',
    excerpt:
      'OPTA es nuestra herramienta propia que permite mapear, organizar y evolucionar tus procesos desde una interfaz conversacional simple e intuitiva.',
    content: `# OPTA – Optimizador de Procesos, Tareas y Aprendizaje

OPTA es nuestra herramienta propia que permite mapear, organizar y evolucionar tus procesos desde una interfaz conversacional simple e intuitiva. 

## Características principales

- Crea flujos personalizados
- Integra documentos clave
- Accede a filtros inteligentes que facilitan la toma de decisiones
- Interfaz conversacional simple e intuitiva

OPTA está diseñado para evolucionar continuamente con tu negocio, adaptándose a las necesidades cambiantes y proporcionando insights valiosos para la mejora continua.`,
    coverImage: '/placeholder.svg',
    publishedAt: '2025-04-01T12:00:00Z',
    featured: true,
    tags: ['herramientas', 'optimización', 'procesos'],
  },
]

// Función para guardar en localStorage
const saveToLocalStorage = (posts: BlogPostType[]): void => {
  localStorage.setItem('blogPosts', JSON.stringify(posts))
}

// Función para obtener de localStorage
const getFromLocalStorage = (): BlogPostType[] => {
  const storedPosts = localStorage.getItem('blogPosts')
  return storedPosts ? JSON.parse(storedPosts) : initialBlogPosts
}

// Inicializa la base de datos con datos de prueba si está vacía
const initBlogPostsInSupabase = async (): Promise<void> => {
  // Siempre inicializamos localStorage por si acaso
  const storedPosts = localStorage.getItem('blogPosts')
  if (!storedPosts) {
    console.log('Inicializando datos en localStorage')
    saveToLocalStorage(initialBlogPosts)
  }

  if (!isSupabaseConfigured) {
    console.log(
      'Supabase no está configurado. Solo se inicializó localStorage.'
    )
    return
  }

  try {
    const { data: existingPosts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .limit(1)

    if (fetchError) {
      console.error('Error al verificar posts existentes:', fetchError)
      return
    }

    // Si no hay posts, inserta los iniciales
    if (!existingPosts || existingPosts.length === 0) {
      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert(initialBlogPosts)

      if (insertError) {
        console.error('Error al insertar posts iniciales:', insertError)
      }
    }
  } catch (error) {
    console.error('Error en initBlogPostsInSupabase:', error)
  }
}

// Intentar inicializar la base de datos al cargar el servicio
if (typeof window !== 'undefined') {
  // Solo ejecutar en el cliente
  initBlogPostsInSupabase().catch((error) => {
    console.error('Error al inicializar la base de datos:', error)
  })
}

// Obtener todas las entradas de blog
export const getAllBlogPosts = async (): Promise<BlogPostType[]> => {
  const token = await getToken()

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_HOST}/blog/posts/?summary=true`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
        redirect: 'follow' as RequestRedirect,
      }
    )

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`)
      return null
    }

    const data = await response.json()

    // Format data
    const cleanData = data.map(post => {
      return {
        id: post.id,
        title: post.title,
        slug: convertToSlug(post.title),
        excerpt: post.description,
        content: "", // Or fetch content if needed
        coverImage: post.banner_image_url,
        publishedAt: post.updated_at,
        featured: true, // Example static value
        tags: [] // Empty tags array, add logic if needed
      };
    });

    return cleanData

  } catch (error) {
    console.error('Fetch error:', error)
    return null
  }

  // Siempre tenemos localStorage como fuente confiable
  let localPosts = getFromLocalStorage()

  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    toast.info('Usando datos locales (Supabase no está configurado)')
    return localPosts
  }

  // Intentar obtener desde Supabase
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('publishedAt', { ascending: false })

    if (error) throw error

    // Actualizar localStorage con datos de Supabase para mantenerlos sincronizados
    if (data && data.length > 0) {
      saveToLocalStorage(data as BlogPostType[])
      return data as BlogPostType[]
    } else {
      return localPosts
    }
  } catch (error) {
    console.error('Error al obtener los posts del blog:', error)
    toast.error('Error al obtener datos de Supabase, usando datos locales')

    // Fallback a localStorage si hay un error con Supabase
    return localPosts
  }
}

// Obtener entradas destacadas
export const getFeaturedBlogPosts = async (): Promise<BlogPostType[]> => {
  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    return getFromLocalStorage().filter((post) => post.featured)
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('featured', true)

    if (error) throw error

    if (data && data.length > 0) {
      return data as BlogPostType[]
    } else {
      return getFromLocalStorage().filter((post) => post.featured)
    }
  } catch (error) {
    console.error('Error al obtener posts destacados:', error)

    // Fallback a localStorage
    return getFromLocalStorage().filter((post) => post.featured)
  }
}

// Obtener una entrada de blog por slug
export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPostType | undefined> => {
  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    return getFromLocalStorage().find((post) => post.slug === slug)
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data as BlogPostType
  } catch (error) {
    console.error(`Error al obtener post con slug ${slug}:`, error)

    // Fallback a localStorage
    return getFromLocalStorage().find((post) => post.slug === slug)
  }
}

// Obtener una entrada de blog por ID
export const getBlogPostById = async (
  id: string
): Promise<BlogPostType | undefined> => {
  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    return getFromLocalStorage().find((post) => post.id === id)
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return data as BlogPostType
  } catch (error) {
    console.error(`Error al obtener post con ID ${id}:`, error)

    // Fallback a localStorage
    return getFromLocalStorage().find((post) => post.id === id)
  }
}

// Crear una nueva entrada de blog
export const createBlogPost = async (
  postData: BlogPostFormData
): Promise<BlogPostType> => {
  const newPost: BlogPostType = {
    id: nanoid(),
    slug: generateSlug(postData.title),
    publishedAt: new Date().toISOString(),
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content,
    coverImage: postData.coverImage || '/placeholder.svg',
    featured: postData.featured || false,
    tags: postData.tags || [],
  }

  // Siempre guardamos en localStorage para tener un respaldo
  const posts = getFromLocalStorage()
  posts.push(newPost)
  saveToLocalStorage(posts)

  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    toast.success('Post creado localmente (Supabase no está configurado)')
    return newPost
  }

  try {
    const { error } = await supabase.from('blog_posts').insert(newPost)

    if (error) throw error

    toast.success('Post creado correctamente en Supabase y localmente')
    return newPost
  } catch (error) {
    console.error('Error al crear post:', error)
    toast.error('Error al crear post en Supabase, guardado solo localmente')
    return newPost
  }
}

// Actualizar una entrada de blog existente
export const updateBlogPost = async (
  id: string,
  postData: BlogPostFormData
): Promise<BlogPostType> => {
  // Siempre actualizamos en localStorage
  const posts = getFromLocalStorage()
  const index = posts.findIndex((post) => post.id === id)

  if (index === -1) {
    throw new Error('Blog post not found')
  }

  const updatedPost: BlogPostType = {
    ...posts[index],
    title: postData.title,
    slug: generateSlug(postData.title),
    excerpt: postData.excerpt,
    content: postData.content,
    coverImage: postData.coverImage || posts[index].coverImage,
    featured: postData.featured,
    tags: postData.tags || [],
  }

  posts[index] = updatedPost
  saveToLocalStorage(posts)

  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    toast.success('Post actualizado localmente (Supabase no está configurado)')
    return updatedPost
  }

  try {
    const { error } = await supabase
      .from('blog_posts')
      .update(updatedPost)
      .eq('id', id)

    if (error) throw error

    toast.success('Post actualizado correctamente en Supabase y localmente')
    return updatedPost
  } catch (error) {
    console.error(`Error al actualizar post con ID ${id}:`, error)
    toast.error(
      'Error al actualizar post en Supabase, actualizado solo localmente'
    )
    return updatedPost
  }
}

// Eliminar una entrada de blog
export const deleteBlogPost = async (id: string): Promise<boolean> => {
  // Siempre eliminamos de localStorage
  const posts = getFromLocalStorage()
  const filteredPosts = posts.filter((post) => post.id !== id)

  if (filteredPosts.length === posts.length) {
    return false
  }

  saveToLocalStorage(filteredPosts)

  // Si Supabase no está configurado, usar solo localStorage
  if (!isSupabaseConfigured) {
    toast.success('Post eliminado localmente (Supabase no está configurado)')
    return true
  }

  try {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id)

    if (error) throw error

    toast.success('Post eliminado correctamente de Supabase y localmente')
    return true
  } catch (error) {
    console.error(`Error al eliminar post con ID ${id}:`, error)
    toast.error('Error al eliminar post en Supabase, eliminado solo localmente')
    return true
  }
}
