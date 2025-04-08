
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "/og-image.png", 
  ogUrl 
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://praxia.site${location.pathname}`;

  useEffect(() => {
    // Actualizar el título
    document.title = title || "Praxia - Consultoría Estratégica y Desarrollo de Productos";
    
    // Actualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || "Servicios de consultoría estratégica, optimización de procesos y desarrollo de productos para empresas que buscan transformar su operación y capacidades.");
    }

    // Actualizar keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords || "consultoría estratégica, optimización de procesos, desarrollo de productos, transformación digital, innovación empresarial");
    }

    // Actualizar Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title || "Praxia - Consultoría Estratégica y Desarrollo de Productos");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description || "Servicios especializados para potenciar tu negocio a través de consultoría estratégica, optimización de procesos y desarrollo de productos.");
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", ogImage);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", ogUrl || currentUrl);

    // Actualizar Twitter Card tags
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title || "Praxia - Consultoría Estratégica");
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description || "Servicios especializados para potenciar tu negocio a través de consultoría estratégica, optimización de procesos y desarrollo de productos.");
    document.querySelector('meta[name="twitter:image"]')?.setAttribute("content", ogImage);
  }, [title, description, keywords, ogImage, ogUrl, currentUrl]);

  return null;
};

export default SEO;
