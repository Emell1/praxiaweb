
export interface BlogPostType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  featured: boolean;
  tags: string[];
  videoUrl?: string;
  pdfUrl?: string;
}

export type BlogPostFormData = Omit<BlogPostType, 'id' | 'slug' | 'publishedAt'> & {
  id?: string;
  publishedAt?: string;
};
