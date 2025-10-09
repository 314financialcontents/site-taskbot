import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { QueHacemosPage } from './components/pages/QueHacemosPage';
import { ComoLoHacemosPage } from './components/pages/ComoLoHacemosPage';
import { SobreTaskbotPage } from './components/pages/SobreTaskbotPage';
import { ContactoPage } from './components/pages/ContactoPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { AvisoLegalPage } from './components/pages/AvisoLegalPage';
import { PoliticaPrivacidadPage } from './components/pages/PoliticaPrivacidadPage';
import { PoliticaCookiesPage } from './components/pages/PoliticaCookiesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'que-hacemos':
        return <QueHacemosPage onNavigate={handleNavigate} />;
      case 'como-lo-hacemos':
        return <ComoLoHacemosPage onNavigate={handleNavigate} />;
      case 'sobre-taskbot':
        return <SobreTaskbotPage onNavigate={handleNavigate} />;
      case 'contacto':
        return <ContactoPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog/semantica-empresa':
        return <BlogPostPage onNavigate={handleNavigate} postId="semantica-empresa" />;
      case 'blog/del-know-how-al-flujo':
        return <BlogPostPage onNavigate={handleNavigate} postId="del-know-how-al-flujo" />;
      case 'blog/guardarrailes-ia-guia-practica':
        return <BlogPostPage onNavigate={handleNavigate} postId="guardarrailes-ia-guia-practica" />;
      case 'aviso-legal':
        return <AvisoLegalPage />;
      case 'politica-privacidad':
        return <PoliticaPrivacidadPage />;
      case 'politica-cookies':
        return <PoliticaCookiesPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}