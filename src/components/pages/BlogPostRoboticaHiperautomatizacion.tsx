import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BlogPostTemplate, 
  BlogSection, 
  BlogParagraph, 
  BlogUnorderedList, 
  BlogOrderedList,
  BlogCallout,
  BlogSubsection,
  BlogStrong
} from '../BlogPostTemplate';

import type { RouteKey } from '../../utils/routes';

interface BlogPostRoboticaHiperautomatizacionProps {
  onNavigate: (page: RouteKey) => void;
}

export function BlogPostRoboticaHiperautomatizacion({ onNavigate }: BlogPostRoboticaHiperautomatizacionProps) {
  const { t, language } = useLanguage();
  const post = t('blog.posts.roboticaHiperautomatizacion');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="roboticaHiperautomatizacion"
      imageUrl="https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MDY5NjQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      onNavigate={onNavigate}
    >
      {/* Qué es hiperautomatización */}
      <BlogSection title={sections.whatIs.title}>
        <BlogParagraph>
          {sections.whatIs.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.whatIs.items} />

        <BlogCallout>
          {sections.whatIs.callout}
        </BlogCallout>
      </BlogSection>

      {/* Por qué ahora */}
      <BlogSection title={sections.whyNow.title}>
        <BlogParagraph>
          {sections.whyNow.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.whyNow.items} />

        <BlogCallout>
          {sections.whyNow.callout}
        </BlogCallout>
      </BlogSection>

      {/* Casos de uso */}
      <BlogSection title={sections.useCases.title}>
        <BlogParagraph>
          {sections.useCases.intro}
        </BlogParagraph>

        {sections.useCases.cases.map((useCase: any, index: number) => (
          <BlogSubsection key={index} title={useCase.title}>
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Problema:' : 'Problem:'}</BlogStrong> {useCase.problem}
            </BlogParagraph>
            
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Solución híbrida:' : 'Hybrid solution:'}</BlogStrong> {useCase.solution}
            </BlogParagraph>
            
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Resultado:' : 'Result:'}</BlogStrong> {useCase.result}
            </BlogParagraph>
          </BlogSubsection>
        ))}

        <BlogCallout>
          {sections.useCases.callout}
        </BlogCallout>
      </BlogSection>

      {/* Metodología */}
      <BlogSection title={sections.methodology.title}>
        <BlogParagraph>
          {sections.methodology.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.methodology.steps} />

        <BlogCallout>
          {sections.methodology.callout}
        </BlogCallout>
      </BlogSection>

      {/* Retos comunes */}
      <BlogSection title={sections.challenges.title}>
        <BlogParagraph>
          {sections.challenges.intro}
        </BlogParagraph>

        {sections.challenges.items.map((item: any, index: number) => (
          <BlogSubsection key={index} title={item.title}>
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Problema:' : 'Problem:'}</BlogStrong> {item.problem}
            </BlogParagraph>
            
            <BlogParagraph noMargin>
              <BlogStrong>{language === 'es' ? 'Solución:' : 'Solution:'}</BlogStrong> {item.solution}
            </BlogParagraph>
          </BlogSubsection>
        ))}

        <BlogCallout>
          {sections.challenges.callout}
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
