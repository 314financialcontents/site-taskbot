/**
 * EJEMPLO DE POST DE BLOG COMPLETAMENTE ESTANDARIZADO
 * 
 * Este archivo muestra la estructura ideal de un post del blog
 * usando todos los componentes estandarizados disponibles.
 */

import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BlogPostTemplate, 
  BlogSection, 
  BlogParagraph, 
  BlogUnorderedList, 
  BlogOrderedList,
  BlogCallout,
  BlogSubsection,
  BlogH3,
  BlogStrong
} from '../BlogPostTemplate';

interface BlogPostExampleProps {
  onNavigate: (page: string) => void;
}

export function BlogPostExample({ onNavigate }: BlogPostExampleProps) {
  const { t, language } = useLanguage();
  const post = t('blog.posts.ejemploPost');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="ejemploPost"
      imageUrl="https://images.unsplash.com/photo-..."
      onNavigate={onNavigate}
    >
      {/* 
        PATRÓN 1: Sección simple con párrafo, lista y callout 
      */}
      <BlogSection title={sections.introduccion.title}>
        <BlogParagraph>
          {sections.introduccion.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.introduccion.items} />

        <BlogCallout>
          {sections.introduccion.callout}
        </BlogCallout>
      </BlogSection>

      {/* 
        PATRÓN 2: Sección con lista ordenada 
      */}
      <BlogSection title={sections.pasos.title}>
        <BlogParagraph>
          {sections.pasos.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.pasos.steps} />
      </BlogSection>

      {/* 
        PATRÓN 3: Sección con subsecciones dinámicas 
      */}
      <BlogSection title={sections.casosDeUso.title}>
        <BlogParagraph>
          {sections.casosDeUso.intro}
        </BlogParagraph>

        {sections.casosDeUso.casos.map((caso: any, index: number) => (
          <BlogSubsection key={index} title={caso.title}>
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Problema:' : 'Problem:'}</BlogStrong> {caso.problem}
            </BlogParagraph>
            
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Solución:' : 'Solution:'}</BlogStrong> {caso.solution}
            </BlogParagraph>
            
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Resultado:' : 'Result:'}</BlogStrong> {caso.result}
            </BlogParagraph>
          </BlogSubsection>
        ))}

        <BlogCallout>
          {sections.casosDeUso.callout}
        </BlogCallout>
      </BlogSection>

      {/* 
        PATRÓN 4: Sección con lista ordenada compleja
      */}
      <BlogSection title={sections.metodologia.title}>
        <BlogParagraph>
          {sections.metodologia.intro}
        </BlogParagraph>

        {sections.metodologia.pasos.map((paso: any, index: number) => (
          <BlogSubsection key={index} title={paso.title}>
            <BlogParagraph noMargin>
              {paso.description}
            </BlogParagraph>
            
            <BlogUnorderedList items={paso.items} />
            
            <BlogCallout>
              {paso.callout}
            </BlogCallout>
          </BlogSubsection>
        ))}
      </BlogSection>

      {/* 
        PATRÓN 5: Sección con múltiples subsecciones (h3) y listas 
      */}
      <BlogSection title={sections.herramientas.title}>
        <BlogParagraph>
          {sections.herramientas.intro}
        </BlogParagraph>

        <BlogH3>
          {sections.herramientas.categoria1.title}
        </BlogH3>
        <BlogUnorderedList items={sections.herramientas.categoria1.items} />

        <BlogH3>
          {sections.herramientas.categoria2.title}
        </BlogH3>
        <BlogUnorderedList items={sections.herramientas.categoria2.items} />

        <BlogCallout>
          {sections.herramientas.callout}
        </BlogCallout>
      </BlogSection>

      {/* 
        PATRÓN 6: Sección con múltiples párrafos desde string 
      */}
      <BlogSection title={sections.reflexiones.title}>
        {sections.reflexiones.content.split('\\n\\n').map((paragraph: string, index: number) => (
          <BlogParagraph key={index}>
            {paragraph}
          </BlogParagraph>
        ))}
      </BlogSection>

      {/* 
        PATRÓN 7: Sección final con próximos pasos 
      */}
      <BlogSection title={sections.proximosPasos.title}>
        <BlogParagraph>
          {sections.proximosPasos.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.proximosPasos.steps} />
      </BlogSection>
    </BlogPostTemplate>
  );
}

/**
 * ESTRUCTURA DE DATOS CORRESPONDIENTE EN /translations/es.ts
 * 
 * ejemploPost: {
 *   title: 'Título del Post',
 *   excerpt: 'Resumen corto para la lista de posts',
 *   date: '22 Oct, 2025',
 *   readTime: '7 min',
 *   tags: ['Tag1', 'Tag2', 'Tag3'],
 *   intro: 'Párrafo introductorio que aparece después del título',
 *   tldr: 'Resumen ejecutivo del contenido (TL;DR)',
 *   sections: {
 *     introduccion: {
 *       title: 'Introducción',
 *       intro: 'Texto introductorio de la sección',
 *       items: [
 *         { title: 'Item 1', description: 'Descripción del item 1' },
 *         { title: 'Item 2', description: 'Descripción del item 2' }
 *       ],
 *       callout: 'Nota destacada importante'
 *     },
 *     pasos: {
 *       title: 'Pasos a Seguir',
 *       intro: 'Introducción a los pasos',
 *       steps: [
 *         { title: 'Paso 1', description: 'Descripción del paso 1' },
 *         { title: 'Paso 2', description: 'Descripción del paso 2' }
 *       ]
 *     },
 *     casosDeUso: {
 *       title: 'Casos de Uso',
 *       intro: 'Introducción a los casos de uso',
 *       casos: [
 *         {
 *           title: 'Caso 1',
 *           problem: 'Descripción del problema',
 *           solution: 'Descripción de la solución',
 *           result: 'Resultado obtenido'
 *         }
 *       ],
 *       callout: 'Nota final sobre los casos de uso'
 *     },
 *     metodologia: {
 *       title: 'Metodología',
 *       intro: 'Introducción a la metodología',
 *       pasos: [
 *         {
 *           title: 'Paso 1',
 *           description: 'Descripción del paso',
 *           items: [
 *             { title: 'Item 1', description: 'Descripción' }
 *           ],
 *           callout: 'Nota sobre este paso'
 *         }
 *       ]
 *     },
 *     herramientas: {
 *       title: 'Herramientas',
 *       intro: 'Introducción a las herramientas',
 *       categoria1: {
 *         title: 'Categoría 1',
 *         items: [
 *           { title: 'Herramienta 1', description: 'Descripción' }
 *         ]
 *       },
 *       categoria2: {
 *         title: 'Categoría 2',
 *         items: [
 *           { title: 'Herramienta 2', description: 'Descripción' }
 *         ]
 *       },
 *       callout: 'Nota sobre las herramientas'
 *     },
 *     reflexiones: {
 *       title: 'Reflexiones Finales',
 *       content: 'Primer párrafo.\\n\\nSegundo párrafo.\\n\\nTercer párrafo.'
 *     },
 *     proximosPasos: {
 *       title: 'Próximos Pasos',
 *       intro: 'Introducción a los próximos pasos',
 *       steps: [
 *         'Paso 1 en texto simple',
 *         'Paso 2 en texto simple',
 *         'Paso 3 en texto simple'
 *       ]
 *     }
 *   },
 *   cta: {
 *     title: '¿Necesitas ayuda con esto?',
 *     description: 'Contáctanos para una consultoría personalizada',
 *     button: 'Contáctanos'
 *   }
 * }
 */
