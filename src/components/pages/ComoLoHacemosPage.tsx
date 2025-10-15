import { Search, Lightbulb, Cog, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

interface ComoLoHacemosPageProps {
  onNavigate: (page: string) => void;
}

export function ComoLoHacemosPage({ onNavigate }: ComoLoHacemosPageProps) {
  const { t } = useLanguage();
  const methodology = [
    {
      step: '01',
      icon: <Search className="w-10 h-10" />,
      title: t('comoLoHacemos.methodology.step1.title'),
      description: t('comoLoHacemos.methodology.step1.description'),
      details: t('comoLoHacemos.methodology.step1.details'),
    },
    {
      step: '02',
      icon: <Lightbulb className="w-10 h-10" />,
      title: t('comoLoHacemos.methodology.step2.title'),
      description: t('comoLoHacemos.methodology.step2.description'),
      details: t('comoLoHacemos.methodology.step2.details'),
    },
    {
      step: '03',
      icon: <Cog className="w-10 h-10" />,
      title: t('comoLoHacemos.methodology.step3.title'),
      description: t('comoLoHacemos.methodology.step3.description'),
      details: t('comoLoHacemos.methodology.step3.details'),
    },
    {
      step: '04',
      icon: <Rocket className="w-10 h-10" />,
      title: t('comoLoHacemos.methodology.step4.title'),
      description: t('comoLoHacemos.methodology.step4.description'),
      details: t('comoLoHacemos.methodology.step4.details'),
    },
  ];

  const advantages = t('comoLoHacemos.advantages');

  const technologies = t('comoLoHacemos.technologies');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('comoLoHacemos.title')}
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t('comoLoHacemos.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('comoLoHacemos.methodologyTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('comoLoHacemos.methodologySubtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-shadow border-l-4 border-[#3A7D7C]"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <span 
                        className="text-[#E1E5F0] bg-[#1B4965] rounded-full w-16 h-16 flex items-center justify-center"
                        style={{ fontSize: '1.5rem', fontWeight: 700 }}
                      >
                        {item.step}
                      </span>
                      <div className="w-16 h-16 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.125rem' }}>
                      {item.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#2E7D6D] flex-shrink-0" />
                          <span className="text-[#5A6B7C]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Advantages */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Advantages */}
            <div>
              <h2 className="text-[#0D1B2A] mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
                {t('comoLoHacemos.advantagesTitle')}
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-1" />
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-[#0D1B2A] mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
                {t('comoLoHacemos.technologiesTitle')}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-4 bg-white text-center hover:bg-[#3A7D7C] hover:text-white transition-colors">
                    <p style={{ fontWeight: 600 }}>{tech}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {t('comoLoHacemos.technologiesNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('comoLoHacemos.timelineTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('comoLoHacemos.timelineSubtitle')}
            </p>
          </div>

          <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep1')}</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep1Time')}</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/4"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep2')}</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep2Time')}</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/4"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep3')}</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep3Time')}</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/2"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep4')}</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>{t('comoLoHacemos.timelineStep4Time')}</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B4965] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {t('comoLoHacemos.ctaTitle')}
          </h2>
          <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem' }}>
            {t('comoLoHacemos.ctaSubtitle')}
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              {t('comoLoHacemos.ctaButton')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}