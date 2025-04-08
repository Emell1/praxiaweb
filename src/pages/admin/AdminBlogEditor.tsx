
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostById, createBlogPost, updateBlogPost } from '../../services/blogService';
import { BlogPostFormData } from '../../types/blog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Switch } from '../../components/ui/switch';
import { ArrowLeft, Save, Eye, Image, Video, Link as LinkIcon, Bold, Italic, List, ListOrdered, Quote } from 'lucide-react';
import { toast } from '../../hooks/use-toast';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from '../../components/ui/toggle-group';

const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BlogPostFormData>({
    title: '',
    excerpt: '',
    content: '',
    coverImage: '/placeholder.svg',
    featured: false,
    tags: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tagsInput, setTagsInput] = useState('');
  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeTab, setActiveTab] = useState('editor');

  const isEdit = !!id;

  useEffect(() => {
    if (isEdit && id) {
      const post = getBlogPostById(id);
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage,
          featured: post.featured,
          tags: post.tags
        });
        setTagsInput(post.tags.join(', '));
      } else {
        toast({
          title: 'Error',
          description: 'No se encontró la entrada del blog.',
          variant: 'destructive'
        });
        navigate('/admin/dashboard');
      }
    }
  }, [id, isEdit, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, featured: checked }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
    const tagsArray = e.target.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
    setFormData((prev) => ({ ...prev, tags: tagsArray }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEdit && id) {
        updateBlogPost(id, formData);
        toast({
          title: 'Entrada actualizada',
          description: 'La entrada del blog ha sido actualizada con éxito.'
        });
      } else {
        createBlogPost(formData);
        toast({
          title: 'Entrada creada',
          description: 'La entrada del blog ha sido creada con éxito.'
        });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ha ocurrido un error al guardar la entrada del blog.',
        variant: 'destructive'
      });
      console.error('Error guardando el post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const insertToTextarea = (prefix: string, suffix: string = '') => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const beforeText = textarea.value.substring(0, start);
    const afterText = textarea.value.substring(end);

    const newValue = beforeText + prefix + selectedText + suffix + afterText;
    setFormData((prev) => ({ ...prev, content: newValue }));

    // Ajustar la posición del cursor después de la inserción
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + prefix.length + selectedText.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  // Funciones para insertar formatos básicos de Markdown
  const insertBold = () => insertToTextarea('**', '**');
  const insertItalic = () => insertToTextarea('*', '*');
  const insertLink = () => {
    const url = prompt('Ingrese la URL:', 'https://');
    if (url) {
      insertToTextarea('[', '](' + url + ')');
    }
  };
  const insertImage = () => {
    const url = prompt('Ingrese la URL de la imagen:', 'https://');
    if (url) {
      insertToTextarea('![Descripción](' + url + ')');
    }
  };
  const insertVideo = () => {
    const url = prompt('Ingrese el código de embed del video (iframe):', '');
    if (url) {
      insertToTextarea('\n<div class="video-container">\n' + url + '\n</div>\n');
    }
  };
  const insertList = () => insertToTextarea('\n- Item 1\n- Item 2\n- Item 3\n');
  const insertOrderedList = () => insertToTextarea('\n1. Item 1\n2. Item 2\n3. Item 3\n');
  const insertQuote = () => insertToTextarea('\n> ');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <Button variant="outline" onClick={() => navigate('/admin/dashboard')} className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Button>
          <h1 className="text-3xl font-bold">{isEdit ? 'Editar entrada' : 'Nueva entrada'}</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isEdit ? 'Editar entrada del blog' : 'Crear nueva entrada de blog'}</CardTitle>
            <CardDescription>
              Completa el formulario para {isEdit ? 'actualizar la' : 'crear una nueva'} entrada.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="excerpt">Extracto</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="coverImage">URL de la imagen de portada</Label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Etiquetas (separadas por comas)</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={tagsInput}
                  onChange={handleTagsChange}
                  placeholder="ej: procesos, optimización, herramientas"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="featured">Destacar en la página principal</Label>
              </div>

              <Tabs 
                defaultValue="editor" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="preview">Vista previa</TabsTrigger>
                </TabsList>
                <TabsContent value="editor">
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-md border border-gray-200 mb-2">
                      <ToggleGroup type="multiple" className="flex flex-wrap justify-start">
                        <ToggleGroupItem value="bold" onClick={insertBold} title="Negrita">
                          <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" onClick={insertItalic} title="Cursiva">
                          <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="link" onClick={insertLink} title="Enlace">
                          <LinkIcon className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="image" onClick={insertImage} title="Imagen">
                          <Image className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="video" onClick={insertVideo} title="Video">
                          <Video className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="list" onClick={insertList} title="Lista">
                          <List className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="ordered-list" onClick={insertOrderedList} title="Lista numerada">
                          <ListOrdered className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="quote" onClick={insertQuote} title="Cita">
                          <Quote className="h-4 w-4" />
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                    <Label htmlFor="content">Contenido (Markdown)</Label>
                    <Textarea
                      ref={contentTextareaRef}
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      className="min-h-[300px] font-mono"
                      required
                    />
                    <div className="text-sm text-gray-500 mt-2">
                      <p>Puedes usar Markdown y HTML para dar formato a tu contenido. Haz clic en los botones para insertar elementos.</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="preview">
                  <div className="border rounded-md p-4 min-h-[300px] prose max-w-none">
                    <ReactMarkdown>{formData.content || '# Vista previa\n\nAquí se mostrará el contenido con formato.'}</ReactMarkdown>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => navigate('/admin/dashboard')}>
                Cancelar
              </Button>
              <div className="space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setActiveTab('preview')}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Vista previa
                </Button>
                <Button type="submit" disabled={isLoading}>
                  <Save className="mr-2 h-4 w-4" />
                  {isLoading ? 'Guardando...' : 'Guardar'}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
