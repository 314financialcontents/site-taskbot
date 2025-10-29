import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BlogPostTemplate, 
  BlogSection, 
  BlogParagraph
} from '../BlogPostTemplate';

import type { RouteKey } from '../../utils/routes';

interface BlogPostLogicaSemanticaProps {
  onNavigate: (page: RouteKey) => void;
}

export function BlogPostLogicaSemantica({ onNavigate }: BlogPostLogicaSemanticaProps) {
  const { t } = useLanguage();
  const post = t('blog.posts.logicaSemantica');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="logicaSemantica"
      imageUrl="https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1hbnRpYyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDcwMzU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      onNavigate={onNavigate}
    >
      {/* Ontologías formales */}
      <BlogSection title={sections.ontologyAsAsset.title}>
        <BlogParagraph>
          {sections.ontologyAsAsset.content}
        </BlogParagraph>
      </BlogSection>

      {/* Lenguaje ubicuo */}
      <BlogSection title={sections.ubiquitousLanguage.title}>
        <BlogParagraph>
          {sections.ubiquitousLanguage.content}
        </BlogParagraph>
      </BlogSection>

      {/* Razonamiento automático */}
      <BlogSection title={sections.automaticReasoning.title}>
        <BlogParagraph>
          {sections.automaticReasoning.content}
        </BlogParagraph>
      </BlogSection>

      {/* SHACL */}
      <BlogSection title={sections.shacl.title}>
        <BlogParagraph>
          {sections.shacl.content}
        </BlogParagraph>
      </BlogSection>

      {/* Planificación */}
      <BlogSection title={sections.planning.title}>
        <BlogParagraph>
          {sections.planning.content}
        </BlogParagraph>
      </BlogSection>

      {/* Agentes especializados */}
      <BlogSection title={sections.agents.title}>
        <BlogParagraph>
          {sections.agents.content}
        </BlogParagraph>
      </BlogSection>

      {/* Testing */}
      <BlogSection title={sections.testing.title}>
        <BlogParagraph>
          {sections.testing.content}
        </BlogParagraph>
      </BlogSection>

      {/* Impacto */}
      <BlogSection title={sections.impact.title}>
        <BlogParagraph>
          {sections.impact.content}
        </BlogParagraph>
      </BlogSection>
    </BlogPostTemplate>
  );
}
