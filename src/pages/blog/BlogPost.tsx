
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ArrowLeft } from 'lucide-react';
import NavBar from '../../components/NavBar';
import { getBlogPostById, getAllBlogPosts } from '../../services/blogService';
import { BlogPostType } from '../../types/blog';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import ReactMarkdown from 'react-markdown';
import SEO from '@/components/SEO';
import PDFViewer from '@/components/PDFViewer';

import './../../styles/markdown.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const postId: number = +slug.match(/\d+/)?.[0]
  console.log(postId)
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        navigate('/blog');
        return;
      }

      try {
        setLoading(true);
        const postData = await getBlogPostById(postId);

        if (!postData) {
          navigate('/blog');
          return;
        }
        
        setPost(postData);

        // Cargar posts relacionados
        const allPosts = await getAllBlogPosts();
        const related = allPosts
          .filter(p => p.id !== postData.id && p.tags.some(tag => postData.tags.includes(tag)))
          .slice(0, 3);
          
        setRelatedPosts(related);
      } catch (err) {
        console.error("Error al cargar el artículo:", err);
        setError("No se pudo cargar el artículo");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container mx-auto py-12 px-4 text-center">
          <p>Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container mx-auto py-12 px-4 text-center">
          <p className="text-red-500">{error || "No se encontró el artículo"}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => navigate('/blog')}
          >
            Volver al blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title} | Blog Praxia`}
        description={post.excerpt}
        keywords={post.tags?.join(', ')}
        ogImage={post.coverImage || '/og-image.png'}
      />
      <NavBar />
      
      <div className="container mx-auto py-12 px-4">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => navigate('/blog')}
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Button>
        
        <div className="max-w-3xl mx-auto">
          {post.coverImage && (
            <div className="mb-8 h-64 md:h-96 rounded-lg overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex flex-wrap gap-3 mb-4">
            {post.tags?.map(tag => (
              <Badge key={tag} variant={tag === post.tags[0] ? "secondary" : "outline"}>{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-2 text-gray-500 mb-8">
            <span>Por Praxia</span>
            <span>•</span>
            <span>{format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: es })}</span>
          </div>

          {/* Markdown */}
          <div className="markdown prose prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        
          {/* Video */}
          {
            post.videoUrl &&
            <video className="w-full h-auto rounded-lg overflow-hidden mt-8" controls>
              <source src={post.videoUrl} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          }

          {/* Pdf viwer */}
          {
            // post.pdfUrl &&
            <PDFViewer pdfUrl={"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"} />
          }
          {/* <embed src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" type="application/pdf" width="100%" height="600px" /> */}

          
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="border rounded-lg overflow-hidden">
                  {relatedPost.coverImage && (
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2">{relatedPost.tags[0] || 'Artículo'}</Badge>
                    <h3 className="font-semibold mb-2">
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-primary hover:underline">Inicio</Link>
              <Link to="/blog" className="text-sm text-primary hover:underline">Blog</Link>
              <Link to="/contacto" className="text-sm text-primary hover:underline">Contacto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
