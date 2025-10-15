import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPostRoboticaHiperautomatizacionProps {
  onNavigate: (page: string) => void;
}

export function BlogPostRoboticaHiperautomatizacion({ onNavigate }: BlogPostRoboticaHiperautomatizacionProps) {
  const { t } = useLanguage();
  const content = t('blog.posts.roboticaHiperautomatizacion.content');
  const common = content.common;

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={t('blog.posts.roboticaHiperautomatizacion.image')}
            alt={t('blog.posts.roboticaHiperautomatizacion.title')}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#1B4965]/85 to-[#3A7D7C]/80"></div>
        </div>

        {/* Content over image */}
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

            <div className="flex items-center gap-4 text-[#E1E5F0] mb-6" style={{ fontSize: '0.875rem' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{t('blog.posts.roboticaHiperautomatizacion.date')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('blog.posts.roboticaHiperautomatizacion.readTime')} {t('blog.readingTime')}</span>
              </div>
            </div>

            <h1 className="text-white" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('blog.posts.roboticaHiperautomatizacion.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Lead */}
          <p className="text-[#0D1B2A] mb-12" style={{ fontSize: '1.375rem', lineHeight: 1.7 }}>
            {content.lead}
          </p>

          {/* TL;DR */}
          <Card className="bg-[#E1E5F0] border-l-4 border-[#3A7D7C] p-6 mb-12">
            <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              {common.tldr}
            </p>
            <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              {content.tldr}
            </p>
          </Card>

          {/* What Is */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.whatIsTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.whatIsIntro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 border-2 border-[#E1E5F0] hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card1Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.card1}
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0] hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card2Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.card2}
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0] hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card3Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.card3}
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0] hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card4Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.card4}
                </p>
              </Card>
            </div>

            <Card className="bg-[#E1E5F0] border-l-4 border-[#2E7D6D] p-6">
              <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {common.theKey}
              </p>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.whatIsCallout}
              </p>
            </Card>
          </section>

          {/* Why Now */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.whyNowTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.whyNowIntro}
            </p>

            <div className="space-y-6 mb-6">
              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.factor1Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.factor1}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.factor2Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.factor2}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.factor3Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.factor3}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.factor4Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.factor4}
                </p>
              </Card>
            </div>

            <Card className="bg-[#E1E5F0] border-l-4 border-[#2E7D6D] p-6">
              <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {common.important}
              </p>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.whyNowCallout}
              </p>
            </Card>
          </section>

          {/* Use Cases */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.useCasesTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.useCasesIntro}
            </p>

            <div className="space-y-8 mb-6">
              {/* Use Case 1 */}
              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.useCase1Title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase1Problem}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase1ProblemText}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase1Solution}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase1SolutionText}
                    </p>
                  </div>
                  <div className="bg-[#E1E5F0] p-4 rounded-lg">
                    <p className="text-[#2E7D6D]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase1Result}
                    </p>
                    <p className="text-[#0D1B2A]" style={{ lineHeight: 1.6 }}>
                      {content.useCase1ResultText}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Use Case 2 */}
              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.useCase2Title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase2Problem}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase2ProblemText}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase2Solution}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase2SolutionText}
                    </p>
                  </div>
                  <div className="bg-[#E1E5F0] p-4 rounded-lg">
                    <p className="text-[#2E7D6D]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase2Result}
                    </p>
                    <p className="text-[#0D1B2A]" style={{ lineHeight: 1.6 }}>
                      {content.useCase2ResultText}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Use Case 3 */}
              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.useCase3Title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase3Problem}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase3ProblemText}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase3Solution}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase3SolutionText}
                    </p>
                  </div>
                  <div className="bg-[#E1E5F0] p-4 rounded-lg">
                    <p className="text-[#2E7D6D]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase3Result}
                    </p>
                    <p className="text-[#0D1B2A]" style={{ lineHeight: 1.6 }}>
                      {content.useCase3ResultText}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Use Case 4 */}
              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.useCase4Title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase4Problem}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase4ProblemText}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#3A7D7C]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase4Solution}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                      {content.useCase4SolutionText}
                    </p>
                  </div>
                  <div className="bg-[#E1E5F0] p-4 rounded-lg">
                    <p className="text-[#2E7D6D]" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                      {content.useCase4Result}
                    </p>
                    <p className="text-[#0D1B2A]" style={{ lineHeight: 1.6 }}>
                      {content.useCase4ResultText}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-[#E1E5F0] border-l-4 border-[#2E7D6D] p-6">
              <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {common.theKey}
              </p>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.useCasesCallout}
              </p>
            </Card>
          </section>

          {/* How To Start */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.howToStartTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.howToStartIntro}
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step1Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step1}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step2Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step2}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step3Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step3}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step4Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step4}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step5Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step5}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step6Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step6}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#3A7D7C]">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.step7Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.6 }}>
                  {content.step7}
                </p>
              </Card>
            </div>

            <Card className="bg-[#E1E5F0] border-l-4 border-[#2E7D6D] p-6">
              <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {common.important}
              </p>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.howToStartCallout}
              </p>
            </Card>
          </section>

          {/* Challenges */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.challengesTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.challengesIntro}
            </p>

            <div className="space-y-6 mb-6">
              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.challenge1Title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#5A6B7C]">
                    <span style={{ fontWeight: 600 }}>{common.problem}:</span> {content.challenge1Problem}
                  </p>
                  <p className="text-[#2E7D6D]">
                    <span style={{ fontWeight: 600 }}>{common.solution}:</span> {content.challenge1Solution}
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.challenge2Title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#5A6B7C]">
                    <span style={{ fontWeight: 600 }}>{common.problem}:</span> {content.challenge2Problem}
                  </p>
                  <p className="text-[#2E7D6D]">
                    <span style={{ fontWeight: 600 }}>{common.solution}:</span> {content.challenge2Solution}
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.challenge3Title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#5A6B7C]">
                    <span style={{ fontWeight: 600 }}>{common.problem}:</span> {content.challenge3Problem}
                  </p>
                  <p className="text-[#2E7D6D]">
                    <span style={{ fontWeight: 600 }}>{common.solution}:</span> {content.challenge3Solution}
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.challenge4Title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#5A6B7C]">
                    <span style={{ fontWeight: 600 }}>{common.problem}:</span> {content.challenge4Problem}
                  </p>
                  <p className="text-[#2E7D6D]">
                    <span style={{ fontWeight: 600 }}>{common.solution}:</span> {content.challenge4Solution}
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.challenge5Title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[#5A6B7C]">
                    <span style={{ fontWeight: 600 }}>{common.problem}:</span> {content.challenge5Problem}
                  </p>
                  <p className="text-[#2E7D6D]">
                    <span style={{ fontWeight: 600 }}>{common.solution}:</span> {content.challenge5Solution}
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-[#E1E5F0] border-l-4 border-[#2E7D6D] p-6">
              <p className="text-[#1B4965]" style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {common.theKey}
              </p>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.challengesCallout}
              </p>
            </Card>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.nextStepsTitle}
            </h2>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              {content.nextStepsIntro}
            </p>

            <Card className="p-6 border-2 border-[#E1E5F0]">
              <ol className="space-y-3 list-decimal list-inside text-[#0D1B2A]" style={{ lineHeight: 1.7 }}>
                <li>{content.nextStep1}</li>
                <li>{content.nextStep2}</li>
                <li>{content.nextStep3}</li>
                <li>{content.nextStep4}</li>
                <li>{content.nextStep5}</li>
                <li>{content.nextStep6}</li>
              </ol>
            </Card>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] text-white p-8 text-center">
              <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
                {content.ctaTitle}
              </h2>
              <p className="text-[#E1E5F0] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                {content.ctaText}
              </p>
              <Button
                onClick={() => onNavigate('contacto')}
                className="bg-white text-[#1B4965] hover:bg-[#E1E5F0] px-8 py-6"
                style={{ fontSize: '1.125rem' }}
              >
                {content.ctaButton}
              </Button>
            </Card>
          </section>
        </div>
      </article>
    </div>
  );
}
