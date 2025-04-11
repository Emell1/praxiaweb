
import { createClient } from '@supabase/supabase-js';
import { BlogPostType, BlogPostFormData } from '../types/blog';
import { nanoid } from 'nanoid';

// Inicializa el cliente de Supabase usando las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verifica si las variables de entorno están disponibles
if (!supabaseUrl || !supabaseKey) {
  console.error('Las variables de entorno de Supabase no están configuradas correctamente');
}

// Crea el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para generar un slug a partir de un título
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Demo data inicial para inicializar la base de datos si está vacía
const initialBlogPosts: BlogPostType[] = [
  {
    id: 'opta-1',
    title: 'OPTA – Optimizador de Procesos, Tareas y Aprendizaje',
    slug: 'opta-optimizador-de-procesos',
    excerpt: 'OPTA es nuestra herramienta propia que permite mapear, organizar y evolucionar tus procesos desde una interfaz conversacional simple e intuitiva.',
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
    tags: ['herramientas', 'optimización', 'procesos']
  }
];

// Inicializa la base de datos con datos de prueba si está vacía
const initBlogPostsInSupabase = async (): Promise<void> => {
  const { data: existingPosts, error: fetchError } = await supabase
    .from('blog_posts')
    .select('*')
    .limit(1);
  
  if (fetchError) {
    console.error('Error al verificar posts existentes:', fetchError);
    return;
  }
  
  // Si no hay posts, inserta los iniciales
  if (!existingPosts || existingPosts.length === 0) {
    const { error: insertError } = await supabase
      .from('blog_posts')
      .insert(initialBlogPosts);
      
    if (insertError) {
      console.error('Error al insertar posts iniciales:', insertError);
    }
  }
};

// Intentar inicializar la base de datos al cargar el servicio
initBlogPostsInSupabase().catch(console.error);

// Obtener todas las entradas de blog
export const getAllBlogPosts = async (): Promise<BlogPostType[]> => {
  // Primero intentamos obtener desde Supabase
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('publishedAt', { ascending: false });
    
    if (error) throw error;
    return data as BlogPostType[];
  } catch (error) {
    console.error('Error al obtener los posts del blog:', error);
    
    // Fallback a localStorage si hay un error con Supabase
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) as BlogPostType[] : initialBlogPosts;
  }
};

// Obtener entradas destacadas
export const getFeaturedBlogPosts = async (): Promise<BlogPostType[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('featured', true);
    
    if (error) throw error;
    return data as BlogPostType[];
  } catch (error) {
    console.error('Error al obtener posts destacados:', error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    return posts 
      ? (JSON.parse(posts) as BlogPostType[]).filter(post => post.featured)
      : initialBlogPosts.filter(post => post.featured);
  }
};

// Obtener una entrada de blog por slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPostType | undefined> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) throw error;
    return data as BlogPostType;
  } catch (error) {
    console.error(`Error al obtener post con slug ${slug}:`, error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    return posts 
      ? (JSON.parse(posts) as BlogPostType[]).find(post => post.slug === slug)
      : initialBlogPosts.find(post => post.slug === slug);
  }
};

// Obtener una entrada de blog por ID
export const getBlogPostById = async (id: string): Promise<BlogPostType | undefined> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data as BlogPostType;
  } catch (error) {
    console.error(`Error al obtener post con ID ${id}:`, error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    return posts 
      ? (JSON.parse(posts) as BlogPostType[]).find(post => post.id === id)
      : initialBlogPosts.find(post => post.id === id);
  }
};

// Crear una nueva entrada de blog
export const createBlogPost = async (postData: BlogPostFormData): Promise<BlogPostType> => {
  const newPost: BlogPostType = {
    id: nanoid(),
    slug: generateSlug(postData.title),
    publishedAt: new Date().toISOString(),
    title: postData.title,
    excerpt: postData.excerpt,
    content: postData.content,
    coverImage: postData.coverImage,
    featured: postData.featured || false,
    tags: postData.tags || []
  };
  
  try {
    const { error } = await supabase
      .from('blog_posts')
      .insert(newPost);
    
    if (error) throw error;
    
    return newPost;
  } catch (error) {
    console.error('Error al crear post:', error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    const existingPosts = posts ? JSON.parse(posts) as BlogPostType[] : initialBlogPosts;
    existingPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
    
    return newPost;
  }
};

// Actualizar una entrada de blog existente
export const updateBlogPost = async (id: string, postData: BlogPostFormData): Promise<BlogPostType> => {
  try {
    // Primero obtenemos el post actual para mantener campos que no se actualizan
    const { data: existingPost, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (fetchError) throw fetchError;
    
    const updatedPost: BlogPostType = {
      ...existingPost as BlogPostType,
      title: postData.title,
      slug: generateSlug(postData.title),
      excerpt: postData.excerpt,
      content: postData.content,
      coverImage: postData.coverImage,
      featured: postData.featured,
      tags: postData.tags || []
    };
    
    const { error: updateError } = await supabase
      .from('blog_posts')
      .update(updatedPost)
      .eq('id', id);
    
    if (updateError) throw updateError;
    
    return updatedPost;
  } catch (error) {
    console.error(`Error al actualizar post con ID ${id}:`, error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    if (!posts) {
      throw new Error('Blog post not found');
    }
    
    const existingPosts = JSON.parse(posts) as BlogPostType[];
    const index = existingPosts.findIndex(post => post.id === id);
    
    if (index === -1) {
      throw new Error('Blog post not found');
    }
    
    const updatedPost: BlogPostType = {
      ...existingPosts[index],
      title: postData.title,
      slug: generateSlug(postData.title),
      excerpt: postData.excerpt,
      content: postData.content,
      coverImage: postData.coverImage,
      featured: postData.featured,
      tags: postData.tags || []
    };
    
    existingPosts[index] = updatedPost;
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
    
    return updatedPost;
  }
};

// Eliminar una entrada de blog
export const deleteBlogPost = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error(`Error al eliminar post con ID ${id}:`, error);
    
    // Fallback a localStorage
    const posts = localStorage.getItem('blogPosts');
    if (!posts) {
      return false;
    }
    
    const existingPosts = JSON.parse(posts) as BlogPostType[];
    const filteredPosts = existingPosts.filter(post => post.id !== id);
    
    if (filteredPosts.length === existingPosts.length) {
      return false;
    }
    
    localStorage.setItem('blogPosts', JSON.stringify(filteredPosts));
    return true;
  }
};
