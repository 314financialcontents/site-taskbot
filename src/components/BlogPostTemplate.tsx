import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ReactNode } from 'react';
import type { RouteKey } from '../utils/routes';

// ========================================
// ESTILOS ESTANDARIZADOS PARA BLOG POSTS
// ========================================

// Clases CSS estandarizadas para elementos comunes
const BLOG_STYLES = {
  // Texto
  intro: 'text-[#5A6B7C] mb-12',
  introStyle: { fontSize: '1.125rem', lineHeight: 1.8 },
  
  paragraph: 'text-[#5A6B7C] mb-6',
  paragraphStyle: { lineHeight: 1.8 },
  
  paragraphNoMargin: 'text-[#5A6B7C]',
  paragraphNoMarginStyle: { lineHeight: 1.7 },
  
  // Títulos
  h2: 'text-[#0D1B2A] mb-6',
  h3: 'text-[#1B4965] mb-4',
  
  // Listas
  ul: 'list-disc pl-6 space-y-3 mb-6',
  ulItem: 'text-[#5A6B7C]',
  ulItemStyle: { lineHeight: 1.7 },
  
  ol: 'list-decimal pl-6 space-y-3 mb-6',
  olItem: 'text-[#5A6B7C]',
  olItemStyle: { lineHeight: 1.7 },
  
  // Elementos especiales
  tldr: 'mb-12 p-6 bg-[#3A7D7C]/5 border-l-4 border-[#3A7D7C] rounded-r',
  tldrText: 'text-[#5A6B7C] m-0',
  tldrTextStyle: { lineHeight: 1.7 },
  
  callout: 'text-[#5A6B7C] italic pl-4 border-l-4 border-[#1B4965]',
  calloutStyle: { lineHeight: 1.7 },
  
  strong: 'text-[#1B4965]',
  strongStyle: { fontSize: '1rem', fontWeight: 600 },
  
  // Secciones
  section: 'mb-12',
  
  // CTA
  cta: 'mt-16 pt-8 border-t border-[#E1E5F0] text-center',
  ctaTitle: 'text-[#0D1B2A] mb-4',
  ctaDescription: 'text-[#5A6B7C] mb-8 max-w-2xl mx-auto',
  ctaDescriptionStyle: { lineHeight: 1.7 },
  ctaButton: 'bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-8 py-6',
} as const;

interface BlogPostTemplateProps {
  postKey: string;
  imageUrl: string;
  onNavigate: (page: RouteKey) => void;
  children?: ReactNode;
}

export function BlogPostTemplate({ postKey, imageUrl, onNavigate, children }: BlogPostTemplateProps) {
  const { t } = useLanguage();
  const post = t(`blog.posts.${postKey}`);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <section className="relative">
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/95 via-[#1B4965]/90 to-[#3A7D7C]/85"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Button
              onClick={() => onNavigate('blog')}
              variant="ghost"
              className="text-white hover:text-[#E1E5F0] mb-8 -ml-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('blog.backToBlog')}
            </Button>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-[#E1E5F0]" style={{ fontSize: '0.875rem' }}>
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#E1E5F0]" style={{ fontSize: '0.875rem' }}>
                <Clock className="w-4 h-4" />
                <span>{post.readTime} {t('blog.readingTime')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <h1 className="text-white" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }}>
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          
          {/* Intro */}
          <p className={BLOG_STYLES.intro} style={BLOG_STYLES.introStyle}>
            {post.intro}
          </p>

          {/* TL;DR */}
          <div className={BLOG_STYLES.tldr}>
            <p className={BLOG_STYLES.tldrText} style={BLOG_STYLES.tldrTextStyle}>
              <strong className={BLOG_STYLES.strong} style={BLOG_STYLES.strongStyle}>TL;DR:</strong> {post.tldr}
            </p>
          </div>

          {/* Dynamic Content */}
          {children}

          {/* CTA */}
          <div className={BLOG_STYLES.cta}>
            <h3 className={BLOG_STYLES.ctaTitle}>
              {post.cta.title}
            </h3>
            <p className={BLOG_STYLES.ctaDescription} style={BLOG_STYLES.ctaDescriptionStyle}>
              {post.cta.description}
            </p>
            <Button
              onClick={() => onNavigate('contacto')}
              className={BLOG_STYLES.ctaButton}
            >
              {post.cta.button}
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

// ========================================
// COMPONENTES ESTANDARIZADOS PARA SECCIONES
// ========================================

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function BlogSection({ title, children }: SectionProps) {
  return (
    <section className={BLOG_STYLES.section}>
      <h2 className={BLOG_STYLES.h2}>
        {title}
      </h2>
      {children}
    </section>
  );
}

interface ParagraphProps {
  children: ReactNode;
  noMargin?: boolean;
}

export function BlogParagraph({ children, noMargin = false }: ParagraphProps) {
  return (
    <p 
      className={noMargin ? BLOG_STYLES.paragraphNoMargin : BLOG_STYLES.paragraph} 
      style={noMargin ? BLOG_STYLES.paragraphNoMarginStyle : BLOG_STYLES.paragraphStyle}
    >
      {children}
    </p>
  );
}

interface UnorderedListProps {
  items: Array<{ title?: string; description: string } | string>;
}

export function BlogUnorderedList({ items }: UnorderedListProps) {
  return (
    <ul className={BLOG_STYLES.ul}>
      {items.map((item, index) => (
        <li key={index} className={BLOG_STYLES.ulItem} style={BLOG_STYLES.ulItemStyle}>
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <strong className={BLOG_STYLES.strong} style={BLOG_STYLES.strongStyle}>{item.title}:</strong> {item.description}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

interface OrderedListProps {
  items: Array<{ title?: string; description: string } | string>;
}

export function BlogOrderedList({ items }: OrderedListProps) {
  return (
    <ol className={BLOG_STYLES.ol}>
      {items.map((item, index) => (
        <li key={index} className={BLOG_STYLES.olItem} style={BLOG_STYLES.olItemStyle}>
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <strong className={BLOG_STYLES.strong} style={BLOG_STYLES.strongStyle}>{item.title}:</strong> {item.description}
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

interface CalloutProps {
  children: ReactNode;
}

export function BlogCallout({ children }: CalloutProps) {
  return (
    <p className={BLOG_STYLES.callout} style={BLOG_STYLES.calloutStyle}>
      {children}
    </p>
  );
}

interface SubsectionProps {
  title: string;
  children: ReactNode;
}

export function BlogSubsection({ title, children }: SubsectionProps) {
  return (
    <div className="mb-8">
      <h3 className={BLOG_STYLES.h3}>
        {title}
      </h3>
      {children}
    </div>
  );
}

interface BlogH3Props {
  children: ReactNode;
  className?: string;
}

export function BlogH3({ children, className = '' }: BlogH3Props) {
  return (
    <h3 className={`${BLOG_STYLES.h3} ${className}`.trim()}>
      {children}
    </h3>
  );
}

interface BlogStrongProps {
  children: ReactNode;
}

export function BlogStrong({ children }: BlogStrongProps) {
  return (
    <strong className={BLOG_STYLES.strong} style={BLOG_STYLES.strongStyle}>
      {children}
    </strong>
  );
}

// ========================================
// FIN DE COMPONENTES ESTANDARIZADOS
// ========================================
