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
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { updateMetaTags } from './utils/seo';
import { getRouteKeyFromUrl, getUrlForRoute, type RouteKey } from './utils/routes';

function AppContent() {
  const { language, setLanguage } = useLanguage();
  const [currentRouteKey, setCurrentRouteKey] = useState<RouteKey>(() => {
    const routeKey = getRouteKeyFromUrl(window.location.pathname);
    return routeKey || 'home';
  });

  // Sync language from URL on initial load
  useEffect(() => {
    const path = window.location.pathname;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // Check if URL is in English
    const enRoutes = [
      'what-we-do', 'how-we-do-it', 'about-taskbot', 'contact',
      'blog/robotics-hyperautomation', 'blog/semantic-logic', 
      'blog/enterprise-semantics', 'blog/ai-guardrails-practical-guide',
      'legal-notice', 'privacy-policy', 'cookie-policy'
    ];
    
    if (enRoutes.some(route => cleanPath.startsWith(route))) {
      setLanguage('en');
    }
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const routeKey = getRouteKeyFromUrl(window.location.pathname);
      if (routeKey) {
        setCurrentRouteKey(routeKey);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO meta tags and scroll to top when page or language changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateMetaTags(currentRouteKey, language);
  }, [currentRouteKey, language]);

  // Update URL when language changes
  useEffect(() => {
    const newUrl = getUrlForRoute(currentRouteKey, language);
    if (window.location.pathname !== newUrl) {
      window.history.replaceState({}, '', newUrl);
    }
  }, [language, currentRouteKey]);

  const handleNavigate = (routeKey: RouteKey) => {
    // Update URL without page reload
    const url = getUrlForRoute(routeKey, language);
    window.history.pushState({}, '', url);
    setCurrentRouteKey(routeKey);
  };

  const renderPage = () => {
    switch (currentRouteKey) {
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
      case 'blog/robotica-hiperautomatizacion':
        return <BlogPostPage onNavigate={handleNavigate} postId="robotica-hiperautomatizacion" />;
      case 'blog/logica-semantica':
        return <BlogPostPage onNavigate={handleNavigate} postId="logica-semantica" />;
      case 'blog/semantica-empresa':
        return <BlogPostPage onNavigate={handleNavigate} postId="semantica-empresa" />;
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
      <Navigation currentPage={currentRouteKey} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
