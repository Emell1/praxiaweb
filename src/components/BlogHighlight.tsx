
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../services/blogService';
import { BlogPostType } from '../types/blog';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ChevronRight } from 'lucide-react';

const BlogHighlight = () => {
  const [latestPost, setLatestPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    // Obtenemos todos los posts y ordenamos por fecha para tener el más reciente
    const posts = getAllBlogPosts();
    const sorted = [...posts].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    if (sorted.length > 0) {
      setLatestPost(sorted[0]);
    }
  }, []);

  if (!latestPost) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros artículos sobre optimización de procesos, 
            mejora continua y herramientas para potenciar tu negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="h-full">
                  <img 
                    src={latestPost.coverImage} 
                    alt={latestPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/5">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    <Link to={`/blog/${latestPost.slug}`} className="hover:text-blue-600 transition-colors">
                      {latestPost.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{latestPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    {latestPost.content.replace(/[#*]/g, '').substring(0, 150)}...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline">
                    <Link to={`/blog/${latestPost.slug}`}>
                      Leer más
                    </Link>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="/blog" className="flex items-center">
                      Ver todo el blog
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlight;
