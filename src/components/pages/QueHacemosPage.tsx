import { Compass, ShieldCheck, Plug, Bot, Settings, Activity } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';

interface QueHacemosPageProps {
  onNavigate?: (page: string) => void;
}

export function QueHacemosPage({ onNavigate }: QueHacemosPageProps) {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: t('queHacemos.services.service1.title'),
      description: t('queHacemos.services.service1.description'),
      tags: t('queHacemos.services.service1.tags'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('queHacemos.services.service2.title'),
      description: t('queHacemos.services.service2.description'),
      tags: t('queHacemos.services.service2.tags'),
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: t('queHacemos.services.service3.title'),
      description: t('queHacemos.services.service3.description'),
      tags: t('queHacemos.services.service3.tags'),
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: t('queHacemos.services.service4.title'),
      description: t('queHacemos.services.service4.description'),
      tags: t('queHacemos.services.service4.tags'),
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('queHacemos.services.service5.title'),
      description: t('queHacemos.services.service5.description'),
      tags: t('queHacemos.services.service5.tags'),
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t('queHacemos.services.service6.title'),
      description: t('queHacemos.services.service6.description'),
      tags: t('queHacemos.services.service6.tags'),
    },
  ];

  const industries = t('queHacemos.industries');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('queHacemos.title')}
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t('queHacemos.subtitle')}
            </p>
            <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t('queHacemos.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('queHacemos.servicesTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('queHacemos.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#3A7D7C]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-[#5A6B7C] mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-[#E1E5F0] text-[#1B4965]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTkyNDEwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Procesos empresariales"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                {t('queHacemos.executionTitle')}
              </h2>
              <p className="mt-6 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                {t('queHacemos.executionText1')}
              </p>
              <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                {t('queHacemos.executionText2')}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">{t('queHacemos.executionFeature1Title')}</strong> {t('queHacemos.executionFeature1')}</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">{t('queHacemos.executionFeature2Title')}</strong> {t('queHacemos.executionFeature2')}</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">{t('queHacemos.executionFeature3Title')}</strong> {t('queHacemos.executionFeature3')}</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">{t('queHacemos.executionFeature4Title')}</strong> {t('queHacemos.executionFeature4')}</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">{t('queHacemos.executionFeature5Title')}</strong> {t('queHacemos.executionFeature5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('queHacemos.industriesTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('queHacemos.industriesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 text-center hover:border-[#3A7D7C] hover:shadow-lg transition-all"
              >
                <p className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}