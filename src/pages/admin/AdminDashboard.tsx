
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getAllBlogPosts, deleteBlogPost } from '../../services/blogService';
import { BlogPostType } from '../../types/blog';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../components/ui/alert-dialog';
import { Pencil, Trash, Plus, LogOut, Eye } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import { format } from 'date-fns';

const AdminDashboard = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setBlogPosts(getAllBlogPosts());
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleDeletePost = (id: string) => {
    if (deleteBlogPost(id)) {
      setBlogPosts(getAllBlogPosts());
      toast({
        title: 'Entrada eliminada',
        description: 'La entrada del blog ha sido eliminada con éxito.'
      });
    } else {
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la entrada del blog.',
        variant: 'destructive'
      });
    }
    setPostToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <div className="space-x-2">
            <Button asChild variant="outline">
              <Link to="/">Ver sitio</Link>
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Entradas del Blog</CardTitle>
            <CardDescription>
              Gestiona las entradas de tu blog. Crea nuevas, edita o elimina las existentes.
            </CardDescription>
            <div className="pt-4">
              <Button asChild>
                <Link to="/admin/blog/new">
                  <Plus className="mr-2 h-4 w-4" /> Nueva entrada
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Destacado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogPosts.length > 0 ? (
                  blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{format(new Date(post.publishedAt), 'dd/MM/yyyy')}</TableCell>
                      <TableCell>{post.featured ? 'Sí' : 'No'}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/blog/${post.slug}`} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/admin/blog/edit/${post.id}`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setPostToDelete(post.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta acción no se puede deshacer. Se eliminará permanentemente la entrada "{post.title}".
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeletePost(post.id)} className="bg-red-600 hover:bg-red-700">
                                Eliminar
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-4">
                      No hay entradas de blog. ¡Crea una nueva!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
