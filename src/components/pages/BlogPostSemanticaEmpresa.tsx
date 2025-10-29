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

import type { RouteKey } from '../../utils/routes';

interface BlogPostSemanticaEmpresaProps {
  onNavigate: (page: RouteKey) => void;
}

export function BlogPostSemanticaEmpresa({ onNavigate }: BlogPostSemanticaEmpresaProps) {
  const { t } = useLanguage();
  const post = t('blog.posts.semanticaEmpresa');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="semanticaEmpresa"
      imageUrl="https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjBhbmFseXNpc3xlbnwxfHx8fDE3NjA2NDE4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      onNavigate={onNavigate}
    >
      {/* Qué es semántica */}
      <BlogSection title={sections.whatIs.title}>
        <BlogParagraph>
          {sections.whatIs.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.whatIs.items} />

        <BlogCallout>
          {sections.whatIs.callout}
        </BlogCallout>
      </BlogSection>

      {/* Por qué importa */}
      <BlogSection title={sections.whyMatters.title}>
        <BlogUnorderedList items={sections.whyMatters.items} />
      </BlogSection>

      {/* Síntomas */}
      <BlogSection title={sections.symptoms.title}>
        <BlogParagraph>
          {sections.symptoms.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.symptoms.items} />

        <BlogCallout>
          {sections.symptoms.callout}
        </BlogCallout>
      </BlogSection>

      {/* Cómo construir */}
      <BlogSection title={sections.howToBuild.title}>
        <BlogParagraph>
          {sections.howToBuild.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.howToBuild.steps} />

        <BlogCallout>
          {sections.howToBuild.callout}
        </BlogCallout>
      </BlogSection>

      {/* Por qué los agentes necesitan semántica */}
      <BlogSection title={sections.whyAINeeds.title}>
        <BlogParagraph>
          {sections.whyAINeeds.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.whyAINeeds.items} />

        <BlogCallout>
          {sections.whyAINeeds.callout}
        </BlogCallout>
      </BlogSection>

      {/* Ejemplo práctico */}
      <BlogSection title={sections.example.title}>
        <BlogParagraph>
          {sections.example.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.example.items} />

        <BlogCallout>
          {sections.example.callout}
        </BlogCallout>
      </BlogSection>

      {/* Herramientas */}
      <BlogSection title={sections.tools.title}>
        <BlogParagraph>
          {sections.tools.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.tools.items} />

        <BlogCallout>
          {sections.tools.callout}
        </BlogCallout>
      </BlogSection>

      {/* Próximos pasos */}
      <BlogSection title={sections.nextSteps.title}>
        <BlogParagraph>
          {sections.nextSteps.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.nextSteps.steps} />
      </BlogSection>
    </BlogPostTemplate>
  );
}
