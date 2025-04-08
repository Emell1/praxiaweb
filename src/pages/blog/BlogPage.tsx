
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import NavBar from '../../components/NavBar';
import { getBlogPosts } from '../../services/blogService';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const BlogPage = () => {
  const [posts, setPosts] = useState(getBlogPosts());

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog | Praxia"
        description="Artículos y recursos sobre consultoría estratégica, optimización de procesos y desarrollo de productos para empresas."
        keywords="blog consultoría, artículos optimización, recursos desarrollo producto, tendencias empresariales, innovación"
      />
      <NavBar />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">Insights, tendencias y conocimiento en consultoría estratégica y desarrollo de producto.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={post.coverImage || 'https://via.placeholder.com/600x400'} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-gray-500">
                    {format(new Date(post.date), 'dd MMM yyyy', { locale: es })}
                  </span>
                </div>
                <CardTitle className="text-xl">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.slug}`} className="w-full">
                  <Button variant="outline" className="w-full flex justify-between">
                    <span>Leer más</span>
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Praxia. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link to="/" className="text-sm text-primary hover:underline">Inicio</Link>
              <Link to="/servicios/consultoria-estrategica" className="text-sm text-primary hover:underline">Consultoría</Link>
              <Link to="/servicios/optimizacion-procesos" className="text-sm text-primary hover:underline">Procesos</Link>
              <Link to="/servicios/desarrollo-producto" className="text-sm text-primary hover:underline">Producto</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
