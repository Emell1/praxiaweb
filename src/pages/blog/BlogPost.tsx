
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../../services/blogService';
import { BlogPostType } from '../../types/blog';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { ChevronLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        // Redirigir a la página de blog si no se encuentra la entrada
        navigate('/blog');
      }
    }
    setIsLoading(false);
  }, [slug, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || 'Artículo Praxia',
        text: post?.excerpt || 'Mira este artículo interesante',
        url: window.location.href
      })
      .catch((error) => console.log('Error al compartir', error));
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl">Cargando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl">Artículo no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            {post.featured && (
              <Badge className="mb-4">Artículo destacado</Badge>
            )}
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), 'dd MMMM, yyyy')}
              </time>
            </div>
          </div>

          <div className="aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-12">
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <div key={tag} className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <Tag className="mr-1 h-4 w-4" />
                    {tag}
                  </div>
                ))}
              </div>
              <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
