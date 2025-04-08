
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../../services/blogService';
import { BlogPostType } from '../../types/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ChevronLeft, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    setBlogPosts(getAllBlogPosts());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog de Praxia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artículos sobre optimización de procesos, mejora continua y herramientas para potenciar tu negocio.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      <time dateTime={post.publishedAt}>
                        {format(new Date(post.publishedAt), 'dd MMM yyyy')}
                      </time>
                    </div>
                    {post.featured && (
                      <Badge>Destacado</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <div key={tag} className="flex items-center text-xs text-gray-500">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Leer más
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No hay artículos publicados aún.
            </p>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
