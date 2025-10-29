# Guía de Estándares para Posts del Blog

> **IMPORTANTE**: Esta guía garantiza que TODOS los posts del blog tengan estilos 100% consistentes y predecibles. 
> 
> **REGLAS ABSOLUTAS:**
> - ❌ NO se permiten estilos inline ni clases de Tailwind manuales para colores, tamaños de fuente o márgenes
> - ❌ NO se permiten círculos numerados especiales ni formatos de lista personalizados
> - ✅ TODAS las listas deben usar formato estándar: "1.", "2.", "3." (ordenadas) o bullets (sin ordenar)

## Sistema de Plantillas Estandarizadas

Todos los posts del blog utilizan el componente `BlogPostTemplate` que garantiza:
- ✅ Estructura HTML consistente
- ✅ Estilos uniformes en todos los elementos
- ✅ Parámetros por defecto estandarizados
- ✅ Facilidad para automatización futura
- ✅ Control centralizado de estilos CSS
- ✅ Marcadores de lista (::marker) consistentes

## Tabla de Referencia Rápida

| Elemento | Componente | Estilos Clave |
|----------|-----------|---------------|
| Sección (h2) | `<BlogSection>` | Color: `#0D1B2A`, Margen: `mb-6` |
| Subsección (h3) | `<BlogSubsection>` o `<BlogH3>` | Color: `#1B4965`, Margen: `mb-4` |
| Párrafo intro | Automático en template | Tamaño: `1.125rem`, Line-height: `1.8`, Margen: `mb-12` |
| Párrafo normal | `<BlogParagraph>` | Line-height: `1.8`, Margen: `mb-6` |
| Párrafo sin margen | `<BlogParagraph noMargin>` | Line-height: `1.7`, Sin margen |
| Lista ordenada | `<BlogOrderedList>` | Espaciado: `space-y-3`, Padding: `pl-6` |
| Lista sin ordenar | `<BlogUnorderedList>` | Espaciado: `space-y-4` |
| Negrita | `<BlogStrong>` | Color: `#1B4965`, Tamaño: `1rem`, Peso: `600` |
| Callout | `<BlogCallout>` | Itálica, borde izquierdo: `4px #1B4965` |
| TL;DR | Automático en template | Background: `#3A7D7C/5`, borde: `4px #3A7D7C` |

## Componentes Disponibles

### 1. BlogPostTemplate (Componente Principal)

```tsx
<BlogPostTemplate
  postKey="nombreDelPost"
  imageUrl="https://..."
  onNavigate={onNavigate}
>
  {/* Contenido aquí */}
</BlogPostTemplate>
```

**Incluye automáticamente:**
- Header con imagen de fondo
- Título del post (h1)
- Metadata (fecha, tiempo de lectura, tags)
- Intro paragraph
- TL;DR box
- CTA final

### 2. BlogSection (Sección con título h2)

```tsx
<BlogSection title={sections.sectionName.title}>
  {/* Contenido de la sección */}
</BlogSection>
```

### 3. BlogSubsection (Subsección con título h3)

```tsx
<BlogSubsection title="Título de subsección">
  {/* Contenido */}
</BlogSubsection>
```

### 4. BlogParagraph (Párrafo)

```tsx
<BlogParagraph>
  Texto del párrafo
</BlogParagraph>

{/* Sin margen inferior (para párrafos consecutivos) */}
<BlogParagraph noMargin>
  Texto sin margen
</BlogParagraph>
```

### 5. BlogUnorderedList (Lista sin numerar)

```tsx
{/* Lista simple */}
<BlogUnorderedList items={['Item 1', 'Item 2', 'Item 3']} />

{/* Lista con título y descripción */}
<BlogUnorderedList items={[
  { title: 'Título 1', description: 'Descripción 1' },
  { title: 'Título 2', description: 'Descripción 2' }
]} />
```

### 6. BlogOrderedList (Lista numerada)

```tsx
{/* Lista simple */}
<BlogOrderedList items={['Paso 1', 'Paso 2', 'Paso 3']} />

{/* Lista con título y descripción */}
<BlogOrderedList items={[
  { title: 'Título 1', description: 'Descripción 1' },
  { title: 'Título 2', description: 'Descripción 2' }
]} />
```

### 7. BlogCallout (Cita o nota destacada)

```tsx
<BlogCallout>
  Texto destacado o consejo importante
</BlogCallout>
```

### 8. BlogH3 (Título h3 estandarizado)

```tsx
<BlogH3>
  Título de nivel 3
</BlogH3>

{/* Con clases adicionales opcionales */}
<BlogH3 className="mb-2">
  Título con margen personalizado
</BlogH3>
```

### 9. BlogStrong (Texto en negrita estandarizado)

```tsx
<BlogParagraph>
  <BlogStrong>Importante:</BlogStrong> Esto es un texto importante
</BlogParagraph>
```

## Estilos Estandarizados

### Listas Ordenadas (`<ol>`)
- **Clase**: `list-decimal pl-6 space-y-3 mb-6`
- **Espaciado entre items**: `space-y-3` (0.75rem)
- **Padding izquierdo**: `pl-6` (1.5rem)
- **Margen inferior**: `mb-6` (1.5rem)
- **Color texto**: `#5A6B7C`
- **Line height**: `1.7`
- **Marcador (::marker)**: `font-size: 1rem`, `font-weight: 400`, `color: #5A6B7C`

### Listas Sin Ordenar (`<ul>`)
- **Clase**: `space-y-4 mb-6`
- **Espaciado entre items**: `space-y-4` (1rem)
- **Margen inferior**: `mb-6` (1.5rem)
- **Color texto**: `#5A6B7C`
- **Line height**: `1.7`
- **Marcador (::marker)**: `font-size: 1rem`, `color: #5A6B7C`

### Títulos
- **h2**: Color `#0D1B2A`, margen inferior `mb-6`
- **h3**: Color `#1B4965`, margen inferior `mb-4`

### Párrafos
- **Intro**: Color `#5A6B7C`, tamaño `1.125rem`, line-height `1.8`, margen inferior `mb-12`
- **Normal**: Color `#5A6B7C`, line-height `1.8`, margen inferior `mb-6`
- **Sin margen**: Color `#5A6B7C`, line-height `1.7`, sin margen

### Elementos Especiales
- **TL;DR**: Background `#3A7D7C/5`, borde izquierdo `4px #3A7D7C`, padding `p-6`
- **Callout**: Texto itálico, borde izquierdo `4px #1B4965`, padding izquierdo `pl-4`
- **Strong**: Color `#1B4965`, `fontSize: 1rem`, `fontWeight: 600`

### Secciones
- **Margen inferior**: `mb-12` (3rem)

## Estructura de Datos en Traducciones

### Estructura Mínima Requerida

```typescript
postName: {
  title: 'Título del post',
  excerpt: 'Resumen corto para la lista de posts',
  date: '10 Oct, 2025',
  readTime: '8 min',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  intro: 'Párrafo introductorio del post',
  tldr: 'Resumen ejecutivo del contenido',
  sections: {
    // Secciones del post
  },
  cta: {
    title: 'Título del CTA',
    description: 'Descripción del CTA',
    button: 'Texto del botón'
  }
}
```

### Tipos de Secciones

#### Sección Simple (solo texto)
```typescript
sectionName: {
  title: 'Título de la sección',
  content: 'Contenido en texto plano'
}
```

#### Sección con Intro y Lista
```typescript
sectionName: {
  title: 'Título de la sección',
  intro: 'Texto introductorio',
  items: [
    { title: 'Item 1', description: 'Descripción 1' },
    { title: 'Item 2', description: 'Descripción 2' }
  ],
  callout: 'Nota destacada opcional'
}
```

#### Sección con Lista Ordenada
```typescript
sectionName: {
  title: 'Título de la sección',
  intro: 'Texto introductorio',
  steps: [
    'Paso 1 en texto simple',
    'Paso 2 en texto simple',
    'Paso 3 en texto simple'
  ]
}
```

o con títulos:

```typescript
sectionName: {
  title: 'Título de la sección',
  intro: 'Texto introductorio',
  steps: [
    { title: 'Paso 1', description: 'Descripción del paso 1' },
    { title: 'Paso 2', description: 'Descripción del paso 2' }
  ]
}
```

## Cómo Crear un Nuevo Post

### 1. Agregar datos en traducciones

Editar `/translations/es.ts` y `/translations/en.ts`:

```typescript
blog: {
  posts: {
    miNuevoPost: {
      title: 'Título del post',
      excerpt: 'Resumen corto',
      date: '22 Oct, 2025',
      readTime: '7 min',
      tags: ['Tag1', 'Tag2'],
      intro: 'Introducción...',
      tldr: 'TL;DR...',
      sections: {
        // ... secciones
      },
      cta: {
        title: '¿Necesitas ayuda?',
        description: 'Descripción...',
        button: 'Contáctanos'
      }
    }
  }
}
```

### 2. Crear componente del post

Crear `/components/pages/BlogPostMiNuevoPost.tsx`:

```tsx
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BlogPostTemplate, 
  BlogSection, 
  BlogParagraph, 
  BlogUnorderedList, 
  BlogOrderedList,
  BlogCallout,
  BlogSubsection
} from '../BlogPostTemplate';

interface BlogPostMiNuevoPostProps {
  onNavigate: (page: string) => void;
}

export function BlogPostMiNuevoPost({ onNavigate }: BlogPostMiNuevoPostProps) {
  const { t } = useLanguage();
  const post = t('blog.posts.miNuevoPost');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="miNuevoPost"
      imageUrl="https://images.unsplash.com/..."
      onNavigate={onNavigate}
    >
      <BlogSection title={sections.seccion1.title}>
        <BlogParagraph>
          {sections.seccion1.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.seccion1.items} />

        <BlogCallout>
          {sections.seccion1.callout}
        </BlogCallout>
      </BlogSection>

      {/* Más secciones... */}
    </BlogPostTemplate>
  );
}
```

### 3. Registrar en BlogPostPage

Editar `/components/pages/BlogPostPage.tsx` para agregar el nuevo post al switch:

```tsx
import { BlogPostMiNuevoPost } from './BlogPostMiNuevoPost';

// ...

case 'miNuevoPost':
  return <BlogPostMiNuevoPost onNavigate={onNavigate} />;
```

## Patrones Comunes

### Post con múltiples párrafos desde una cadena

```tsx
{sections.sectionName.content.split('\\n\\n').map((paragraph: string, index: number) => (
  <BlogParagraph key={index}>
    {paragraph}
  </BlogParagraph>
))}
```

### Sección con subsecciones dinámicas

```tsx
{sections.sectionName.items.map((item: any, index: number) => (
  <BlogSubsection key={index} title={item.title}>
    <BlogParagraph noMargin>
      <strong className="text-[#1B4965]">Problema:</strong> {item.problem}
    </BlogParagraph>
    <BlogParagraph noMargin>
      <strong className="text-[#1B4965]">Solución:</strong> {item.solution}
    </BlogParagraph>
  </BlogSubsection>
))}
```

### Lista personalizada (fuera del componente estándar)

Si necesitas un formato especial que no cubren los componentes:

```tsx
<ul className="space-y-4 mb-6">
  {items.map((item, index) => (
    <li key={index} className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
      {/* Contenido personalizado */}
    </li>
  ))}
</ul>
```

## Notas Importantes

1. **NO modificar** los estilos en `BlogPostTemplate.tsx` sin coordinación
2. **Todos los posts** deben usar estos componentes estandarizados
3. **Listas numeradas** siempre usan `space-y-3` (consistente)
4. **Listas sin numerar** siempre usan `space-y-4` (consistente)
5. **Las imágenes** deben ser de Unsplash (usar unsplash_tool en desarrollo)
6. **Tags** máximo 3-4 por post
7. **ReadTime** calcular aproximadamente 200 palabras por minuto

## Colores de Marca

- **Base oscuro**: `#0D1B2A`
- **Azul petróleo**: `#1B4965`
- **Teal**: `#3A7D7C`
- **Gris claro**: `#E1E5F0`
- **Texto cuerpo**: `#5A6B7C`

## Checklist de Estandarización

Al crear o revisar un post del blog, verifica:

- [ ] El post usa `<BlogPostTemplate>` como componente principal
- [ ] Todas las secciones usan `<BlogSection>` (no h2 manual)
- [ ] Todas las subsecciones usan `<BlogSubsection>` o `<BlogH3>` (no h3 manual)
- [ ] Todos los párrafos usan `<BlogParagraph>` (no p manual)
- [ ] Todas las listas ordenadas usan `<BlogOrderedList>` (no ol manual)
- [ ] Todas las listas sin ordenar usan `<BlogUnorderedList>` (no ul manual)
- [ ] **NO hay círculos numerados ni formatos especiales** - solo listas estándar
- [ ] Todo texto en negrita usa `<BlogStrong>` (no strong manual con clases)
- [ ] Todos los callouts usan `<BlogCallout>` (no p manual con estilos)
- [ ] NO hay clases de Tailwind inline para colores, tamaños de fuente, o márgenes
- [ ] NO hay estilos inline excepto en casos especiales documentados
- [ ] Las imágenes son de Unsplash y relevantes al contenido
- [ ] El post tiene entre 3-4 tags máximo
- [ ] El readTime está calculado (aprox. 200 palabras/min)
- [ ] El contenido está traducido al inglés en `/translations/en.ts`
- [ ] Los apóstrofos están correctamente escapados en inglés (`don't` → `don\\'t`)
