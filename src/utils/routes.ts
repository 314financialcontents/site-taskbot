// Route mapping for bilingual URLs
export type Language = 'es' | 'en';

// Define all routes with their translations
export const routes = {
  home: { es: '', en: '' },
  'que-hacemos': { es: 'que-hacemos', en: 'what-we-do' },
  'como-lo-hacemos': { es: 'como-lo-hacemos', en: 'how-we-do-it' },
  'sobre-taskbot': { es: 'sobre-taskbot', en: 'about-taskbot' },
  contacto: { es: 'contacto', en: 'contact' },
  blog: { es: 'blog', en: 'blog' },
  'blog/robotica-hiperautomatizacion': { 
    es: 'blog/robotica-hiperautomatizacion', 
    en: 'blog/robotics-hyperautomation' 
  },
  'blog/logica-semantica': { 
    es: 'blog/logica-semantica', 
    en: 'blog/semantic-logic' 
  },
  'blog/semantica-empresa': { 
    es: 'blog/semantica-empresa', 
    en: 'blog/enterprise-semantics' 
  },
  'blog/guardarrailes-ia-guia-practica': { 
    es: 'blog/guardarrailes-ia-guia-practica', 
    en: 'blog/ai-guardrails-practical-guide' 
  },
  'aviso-legal': { es: 'aviso-legal', en: 'legal-notice' },
  'politica-privacidad': { es: 'politica-privacidad', en: 'privacy-policy' },
  'politica-cookies': { es: 'politica-cookies', en: 'cookie-policy' },
} as const;

export type RouteKey = keyof typeof routes;

// Get the localized URL for a route
export const getLocalizedRoute = (routeKey: RouteKey, language: Language): string => {
  const route = routes[routeKey]?.[language];
  return route || routes[routeKey]?.es || routeKey;
};

// Get the route key from a localized URL
export const getRouteKeyFromUrl = (url: string): RouteKey | null => {
  // Remove leading slash
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  
  // Empty string is home
  if (cleanUrl === '') return 'home';
  
  // Search for matching route in any language
  for (const [key, translations] of Object.entries(routes)) {
    if (translations.es === cleanUrl || translations.en === cleanUrl) {
      return key as RouteKey;
    }
  }
  
  return null;
};

// Get the current language from URL
export const getLanguageFromUrl = (url: string): Language => {
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  
  for (const [_, translations] of Object.entries(routes)) {
    if (translations.en === cleanUrl) return 'en';
    if (translations.es === cleanUrl) return 'es';
  }
  
  // Default to Spanish
  return 'es';
};

// Get full URL path for a route in a specific language
export const getUrlForRoute = (routeKey: RouteKey, language: Language): string => {
  const localizedRoute = getLocalizedRoute(routeKey, language);
  return localizedRoute === '' ? '/' : `/${localizedRoute}`;
};
