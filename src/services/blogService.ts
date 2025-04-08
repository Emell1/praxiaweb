
import { BlogPostType, BlogPostFormData } from '../types/blog';
import { nanoid } from 'nanoid';

// Función para generar un slug a partir de un título
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Demo data inicial
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

// Inicializar el localStorage con datos demo si no existen
const initBlogPosts = () => {
  const storedPosts = localStorage.getItem('blogPosts');
  if (!storedPosts) {
    localStorage.setItem('blogPosts', JSON.stringify(initialBlogPosts));
    return initialBlogPosts;
  }
  return JSON.parse(storedPosts) as BlogPostType[];
};

// Obtener todas las entradas de blog
export const getAllBlogPosts = (): BlogPostType[] => {
  return initBlogPosts();
};

// Obtener entradas destacadas
export const getFeaturedBlogPosts = (): BlogPostType[] => {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.featured);
};

// Obtener una entrada de blog por slug
export const getBlogPostBySlug = (slug: string): BlogPostType | undefined => {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
};

// Obtener una entrada de blog por ID
export const getBlogPostById = (id: string): BlogPostType | undefined => {
  const posts = getAllBlogPosts();
  return posts.find(post => post.id === id);
};

// Crear una nueva entrada de blog
export const createBlogPost = (postData: BlogPostFormData): BlogPostType => {
  const posts = getAllBlogPosts();
  
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
  
  posts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  
  return newPost;
};

// Actualizar una entrada de blog existente
export const updateBlogPost = (id: string, postData: BlogPostFormData): BlogPostType => {
  const posts = getAllBlogPosts();
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) {
    throw new Error('Blog post not found');
  }
  
  const updatedPost: BlogPostType = {
    ...posts[index],
    title: postData.title,
    slug: generateSlug(postData.title),
    excerpt: postData.excerpt,
    content: postData.content,
    coverImage: postData.coverImage,
    featured: postData.featured,
    tags: postData.tags
  };
  
  posts[index] = updatedPost;
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  
  return updatedPost;
};

// Eliminar una entrada de blog
export const deleteBlogPost = (id: string): boolean => {
  const posts = getAllBlogPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length === posts.length) {
    return false;
  }
  
  localStorage.setItem('blogPosts', JSON.stringify(filteredPosts));
  return true;
};
