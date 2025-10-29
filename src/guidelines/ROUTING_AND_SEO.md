# Sistema de Routing y SEO

## Descripción General

La aplicación implementa un sistema de routing **bilingüe** basado en el History API del navegador que permite:
- URLs únicas para cada página **en español e inglés**
- Navegación con botones atrás/adelante del navegador
- Compartir enlaces directos a páginas específicas
- SEO optimizado con meta tags dinámicos en ambos idiomas
- Sincronización automática entre idioma y URL

## Estructura de URLs

### Páginas Principales

#### Español
- `/` - Página de inicio
- `/que-hacemos` - Qué hacemos
- `/como-lo-hacemos` - Cómo lo hacemos
- `/sobre-taskbot` - Sobre Taskbot
- `/contacto` - Contacto
- `/blog` - Página principal del blog

#### Inglés
- `/` - Home page
- `/what-we-do` - What we do
- `/how-we-do-it` - How we do it
- `/about-taskbot` - About Taskbot
- `/contact` - Contact
- `/blog` - Blog main page

### Posts del Blog

#### Español
- `/blog/robotica-hiperautomatizacion`
- `/blog/logica-semantica`
- `/blog/semantica-empresa`
- `/blog/guardarrailes-ia-guia-practica`

#### Inglés
- `/blog/robotics-hyperautomation`
- `/blog/semantic-logic`
- `/blog/enterprise-semantics`
- `/blog/ai-guardrails-practical-guide`

### Páginas Legales

#### Español
- `/aviso-legal`
- `/politica-privacidad`
- `/politica-cookies`

#### Inglés
- `/legal-notice`
- `/privacy-policy`
- `/cookie-policy`

## Implementación Técnica

### App.tsx

El componente principal gestiona:

1. **Estado de la página actual**: Usa `RouteKey` en lugar de strings
2. **Navegación bilingüe**: URLs cambian según idioma activo
3. **Eventos popstate**: Detecta navegación con botones del navegador
4. **Meta tags dinámicos**: Actualiza SEO para cada página en el idioma correcto
5. **Sincronización idioma-URL**: Al cargar detecta idioma de la URL, al cambiar idioma actualiza URL

```typescript
const handleNavigate = (routeKey: RouteKey) => {
  const url = getUrlForRoute(routeKey, language);
  window.history.pushState({}, '', url);
  setCurrentRouteKey(routeKey);
};
```

### utils/routes.ts

Sistema de mapeo de rutas bilingües:

- **routes**: Objeto con todas las rutas en ES/EN
- **getLocalizedRoute**: Obtiene URL en idioma específico
- **getRouteKeyFromUrl**: Convierte URL a RouteKey
- **getLanguageFromUrl**: Detecta idioma de una URL
- **getUrlForRoute**: Genera URL completa para ruta e idioma

```typescript
export const routes = {
  'que-hacemos': { es: 'que-hacemos', en: 'what-we-do' },
  // ...
}
```

### utils/seo.ts

Gestiona todos los meta tags SEO **en ambos idiomas**:

- **Title**: Título de la página (ES/EN)
- **Description**: Descripción para búsquedas (ES/EN)
- **Keywords**: Palabras clave relevantes (ES/EN)
- **Open Graph**: Para compartir en redes sociales
- **Twitter Cards**: Para compartir en Twitter

```typescript
export const pageMeta: Record<Language, { [key in RouteKey]: PageMeta }> = {
  es: { /* meta tags en español */ },
  en: { /* meta tags en inglés */ }
}
```

## Añadir Nueva Página

Para añadir una nueva página con URL bilingüe:

### 1. Actualizar utils/routes.ts

```typescript
export const routes = {
  // ... rutas existentes
  'nueva-pagina': { es: 'nueva-pagina', en: 'new-page' },
} as const;
```

### 2. Actualizar utils/seo.ts

Añadir meta tags en **ambos idiomas**:

```typescript
export const pageMeta: Record<Language, { [key in RouteKey]: PageMeta }> = {
  es: {
    // ... páginas existentes
    'nueva-pagina': {
      title: 'Nueva Página - Taskbot.pro',
      description: 'Descripción de la nueva página',
      keywords: 'palabras, clave, relevantes',
    },
  },
  en: {
    // ... páginas existentes
    'nueva-pagina': {
      title: 'New Page - Taskbot.pro',
      description: 'Description of the new page',
      keywords: 'relevant, keywords, here',
    },
  },
};
```

### 3. Actualizar App.tsx

```typescript
case 'nueva-pagina':
  return <NuevaPaginaPage onNavigate={handleNavigate} />;
```

### 4. Actualizar Navigation.tsx (si es página principal)

Añadir el enlace en el menú de navegación usando el RouteKey.

## SEO Best Practices Implementadas

### URLs Bilingües
- ✅ URLs en español e inglés para todas las páginas
- ✅ Detección automática de idioma desde URL
- ✅ Sincronización idioma ↔ URL
- ✅ URLs semánticas y amigables para SEO

### Meta Tags Básicos
- ✅ Title único por página **en ambos idiomas** (50-60 caracteres)
- ✅ Description única por página **en ambos idiomas** (150-160 caracteres)
- ✅ Keywords relevantes **en ambos idiomas**

### Open Graph (Redes Sociales)
- ✅ og:title (traducido)
- ✅ og:description (traducido)
- ✅ og:type
- ✅ og:url (dinámico según página e idioma)

### Twitter Cards
- ✅ twitter:card
- ✅ twitter:title (traducido)
- ✅ twitter:description (traducido)

## Consideraciones para Producción

### Server-Side Rendering (SSR)

Para una implementación en producción real, considera:

1. **Next.js o similar**: Para SSR completo y mejor SEO
2. **Sitemap.xml**: Generar automáticamente con todas las URLs **en ambos idiomas**
3. **Robots.txt**: Configurar acceso para crawlers
4. **Canonical URLs**: Evitar contenido duplicado
5. **hreflang tags**: Indicar versiones en diferentes idiomas
6. **Schema.org markup**: Datos estructurados para rich snippets

### Tags hreflang (Recomendado para producción)

Para indicar a Google las versiones en diferentes idiomas:

```html
<link rel="alternate" hreflang="es" href="https://taskbot.pro/que-hacemos" />
<link rel="alternate" hreflang="en" href="https://taskbot.pro/what-we-do" />
<link rel="alternate" hreflang="x-default" href="https://taskbot.pro/que-hacemos" />
```

### Configuración del Servidor

El servidor debe estar configurado para:
- Redirigir todas las rutas a `index.html` (SPA fallback)
- Mantener las URLs limpias sin extensiones `.html`

Ejemplo para Apache (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Ejemplo para Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Analytics y Tracking

Para implementar analytics (Google Analytics, etc.):

```typescript
useEffect(() => {
  // Track page view
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: window.location.pathname,
    });
  }
}, [currentPage]);
```

## Validación

Para validar que el SEO funciona correctamente:

1. **Google Search Console**: Verificar indexación
2. **PageSpeed Insights**: Rendimiento y SEO
3. **Facebook Debugger**: Compartir en redes sociales
4. **Twitter Card Validator**: Preview de Twitter

## Mantenimiento

- Revisar periódicamente los meta tags para mantenerlos actualizados
- Monitorear que todas las URLs funcionan correctamente
- Actualizar descripciones según cambios en el contenido
- Mantener keywords relevantes y actualizadas
