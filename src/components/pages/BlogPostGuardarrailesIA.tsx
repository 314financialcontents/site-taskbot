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

import type { RouteKey } from '../../utils/routes';

interface BlogPostGuardarrailesIAProps {
  onNavigate: (page: RouteKey) => void;
}

export function BlogPostGuardarrailesIA({ onNavigate }: BlogPostGuardarrailesIAProps) {
  const { t, language } = useLanguage();
  const post = t('blog.posts.guardarrailesIA');
  const sections = post.sections;

  return (
    <BlogPostTemplate
      postKey="guardarrailesIA"
      imageUrl="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHNlY3VyaXR5JTIwY29udHJvbHxlbnwxfHx8fDE3NjA3MDM1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      onNavigate={onNavigate}
    >
      {/* Por qué ahora */}
      <BlogSection title={sections.whyNow.title}>
        {sections.whyNow.content.split('\\n\\n').map((paragraph: string, index: number) => (
          <BlogParagraph key={index}>
            {paragraph}
          </BlogParagraph>
        ))}
      </BlogSection>

      {/* Qué son los guardarraíles */}
      <BlogSection title={sections.whatAre.title}>
        <BlogParagraph>
          {sections.whatAre.intro}
        </BlogParagraph>

        <BlogUnorderedList items={sections.whatAre.features} />
      </BlogSection>

      {/* Cómo funcionan en producción */}
      <BlogSection title={sections.howTheyWork.title}>
        <BlogParagraph>
          {sections.howTheyWork.intro}
        </BlogParagraph>

        {sections.howTheyWork.layers.map((layer: any, index: number) => (
          <div key={index} className="mb-8">
            <BlogSubsection title={`${layer.number}. ${layer.title}`}>
              <BlogParagraph noMargin>
                {layer.description}
              </BlogParagraph>
              
              <BlogUnorderedList items={layer.items} />
              
              <BlogCallout>
                {layer.callout}
              </BlogCallout>
            </BlogSubsection>
          </div>
        ))}
      </BlogSection>

      {/* Cómo implementarlos */}
      <BlogSection title={sections.implementation.title}>
        <BlogParagraph>
          {sections.implementation.intro}
        </BlogParagraph>

        <BlogH3>
          {sections.implementation.tools.title}
        </BlogH3>
        <BlogUnorderedList items={sections.implementation.tools.items} />

        <BlogH3>
          {sections.implementation.pattern.title}
        </BlogH3>
        <BlogUnorderedList items={sections.implementation.pattern.items} />

        <BlogCallout>
          {sections.implementation.callout}
        </BlogCallout>
      </BlogSection>

      {/* Errores comunes */}
      <BlogSection title={sections.commonErrors.title}>
        <BlogParagraph>
          {sections.commonErrors.intro}
        </BlogParagraph>

        <BlogUnorderedList 
          items={sections.commonErrors.items.map((item: any) => ({
            title: item.title,
            description: `${language === 'es' ? 'Problema:' : 'Problem:'} ${item.problem} ${language === 'es' ? 'Solución:' : 'Solution:'} ${item.solution}`
          }))} 
        />
      </BlogSection>

      {/* Pasos concretos */}
      <BlogSection title={sections.nextSteps.title}>
        <BlogParagraph>
          {sections.nextSteps.intro}
        </BlogParagraph>

        <BlogOrderedList items={sections.nextSteps.steps} />
      </BlogSection>
    </BlogPostTemplate>
  );
}
