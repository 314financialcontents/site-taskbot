import { ArrowRight, Clock, ShieldAlert, Lightbulb, Target, AlertCircle, Gauge, BookOpen, Zap, Search, Settings, PlayCircle, TrendingUp, CheckCircle, FileText, Users, Database, X, Package } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import type { RouteKey } from '../../utils/routes';

interface HomePageProps {
  onNavigate: (page: RouteKey) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage();
  const heroFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('home.heroFeatures.saveTime.title'),
      description: t('home.heroFeatures.saveTime.description'),
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: t('home.heroFeatures.avoidErrors.title'),
      description: t('home.heroFeatures.avoidErrors.description'),
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('home.heroFeatures.capitalizeKnowledge.title'),
      description: t('home.heroFeatures.capitalizeKnowledge.description'),
    },
  ];

  const stats = [
    {
      value: t('home.statsValues.lessTime'),
      label: t('home.stats.lessTime'),
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: t('home.statsValues.precision'),
      label: t('home.stats.precision'),
      icon: <Target className="w-6 h-6" />,
    },
    {
      value: t('home.statsValues.weeks'),
      label: t('home.stats.weeks'),
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: t('home.statsValues.saving'),
      label: t('home.stats.saving'),
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const useCases = [
    {
      title: t('home.useCases.invoice.title'),
      before: t('home.useCases.invoice.before'),
      after: t('home.useCases.invoice.after'),
      saving: t('home.useCases.invoice.saving'),
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: t('home.useCases.inventory.title'),
      before: t('home.useCases.inventory.before'),
      after: t('home.useCases.inventory.after'),
      saving: t('home.useCases.inventory.saving'),
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: t('home.useCases.reports.title'),
      before: t('home.useCases.reports.before'),
      after: t('home.useCases.reports.after'),
      saving: t('home.useCases.reports.saving'),
      icon: <Database className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('home.benefits.specialized.title'),
      description: t('home.benefits.specialized.description'),
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: t('home.benefits.transparency.title'),
      description: t('home.benefits.transparency.description'),
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: t('home.benefits.integration.title'),
      description: t('home.benefits.integration.description'),
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t('home.benefits.assets.title'),
      description: t('home.benefits.assets.description'),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('home.benefits.speed.title'),
      description: t('home.benefits.speed.description'),
    },
  ];

  const steps = [
    {
      number: t('home.howItWorks.discovery.number'),
      icon: <Search className="w-10 h-10" />,
      title: t('home.howItWorks.discovery.title'),
      description: t('home.howItWorks.discovery.description'),
    },
    {
      number: t('home.howItWorks.configuration.number'),
      icon: <Settings className="w-10 h-10" />,
      title: t('home.howItWorks.configuration.title'),
      description: t('home.howItWorks.configuration.description'),
    },
    {
      number: t('home.howItWorks.execution.number'),
      icon: <PlayCircle className="w-10 h-10" />,
      title: t('home.howItWorks.execution.title'),
      description: t('home.howItWorks.execution.description'),
    },
  ];

  const diyChallenges = [
    t('home.diyVsTaskbot.diyChallenge1'),
    t('home.diyVsTaskbot.diyChallenge2'),
    t('home.diyVsTaskbot.diyChallenge3'),
    t('home.diyVsTaskbot.diyChallenge4'),
    t('home.diyVsTaskbot.diyChallenge5'),
  ];

  const taskbotAdvantages = [
    t('home.diyVsTaskbot.taskbotAdvantage1'),
    t('home.diyVsTaskbot.taskbotAdvantage2'),
    t('home.diyVsTaskbot.taskbotAdvantage3'),
    t('home.diyVsTaskbot.taskbotAdvantage4'),
    t('home.diyVsTaskbot.taskbotAdvantage5'),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-[#E1E5F0]" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
                  {t('home.hero.title')} <span className="text-[#3A7D7C]">{t('home.hero.titleHighlight')}</span>
                </h1>
                <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                  {t('home.hero.subtitle')}
                </p>
              </div>

              {/* Technical highlight */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-[#E1E5F0]" style={{ lineHeight: 1.6 }}>
                  <strong className="text-white">{t('home.hero.technicalHighlight')}</strong> {t('home.hero.technicalDescription')}
                </p>
              </div>

              {/* Hero Features - Compact */}
              <div className="grid gap-3">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-white" style={{ fontWeight: 600 }}>
                        {feature.title}
                      </p>
                      <p className="text-[#E1E5F0] opacity-90" style={{ fontSize: '0.9375rem' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button 
                  onClick={() => onNavigate('contacto')}
                  className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6 shadow-xl shadow-[#3A7D7C]/20"
                  style={{ fontSize: '1.25rem' }}
                >
                  {t('home.hero.cta')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:block relative h-full">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#3A7D7C] to-[#1B4965] rounded-3xl blur-3xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMGRhc2hib2FyZCUyMGNoYXJ0c3xlbnwxfHx8fDE3NjAwMTkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Panel de control de Taskbot"
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-white/10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3A7D7C] rounded-xl opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1B4965] rounded-xl opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {t('home.statsSection.title')}
            </h2>
            <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('home.statsSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white border-2 border-[#3A7D7C]/20 hover:border-[#3A7D7C] transition-all hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-[#1B4965]" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="text-[#5A6B7C] mt-2" style={{ fontSize: '0.9375rem', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <section className="py-12 bg-white border-y border-[#E1E5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
              {t('home.trust.main')}
            </h3>
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {t('home.trust.description')}
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.accounting')}
              </span>
              <span className="text-[#E1E5F0]">•</span>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.legal')}
              </span>
              <span className="text-[#E1E5F0]">•</span>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.logistics')}
              </span>
              <span className="text-[#E1E5F0]">•</span>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.warehouse')}
              </span>
              <span className="text-[#E1E5F0]">•</span>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.hospitality')}
              </span>
              <span className="text-[#E1E5F0]">•</span>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>
                {t('home.trust.badges.technical')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('home.useCases.titleQuestion')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('home.useCases.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-all border-t-4 border-[#3A7D7C] h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-6">
                  {useCase.icon}
                </div>
                
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
                  {useCase.title}
                </h3>
                
                <div className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                      <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        <strong className="text-[#C0392B]">{t('home.useCases.before')}</strong> {useCase.before}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                      <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        <strong className="text-[#2E7D6D]">{t('home.useCases.after')}</strong> {useCase.after}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-auto border-t border-[#E1E5F0]">
                    <div className="bg-[#2E7D6D]/10 rounded-lg p-3">
                      <p className="text-[#2E7D6D]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        💡 {t('home.useCases.savingLabel')} {useCase.saving}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem' }}>
              {t('home.useCases.similarProcess')}
            </p>
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              {t('home.useCases.evaluateCta')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('home.benefits.title')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('home.benefits.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-[#3A7D7C] hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('home.howItWorks.title')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('home.howItWorks.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1B4965] rounded-full flex items-center justify-center text-white" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('como-lo-hacemos')}
              className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              {t('home.howItWorks.seeMethodology')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* DIY vs Taskbot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('home.diyVsTaskbot.title')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              {t('home.diyVsTaskbot.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* DIY */}
            <Card className="p-8 bg-[#E1E5F0]/50 border-2 border-[#E1E5F0]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                {t('home.diyVsTaskbot.diyTitle')}
              </h3>
              
              <div className="space-y-3 mb-6">
                {diyChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#F4B400]">
                <p className="text-[#0D1B2A]" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  {t('home.diyVsTaskbot.diyEstimate')}
                </p>
                <p className="text-[#5A6B7C] mt-2" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {t('home.diyVsTaskbot.diyEstimateText')}
                </p>
              </div>
            </Card>

            {/* Taskbot */}
            <Card className="p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 border-2 border-[#3A7D7C]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                {t('home.diyVsTaskbot.taskbotTitle')}
              </h3>
              
              <div className="space-y-3 mb-6">
                {taskbotAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#3A7D7C] rounded-lg p-4 text-white">
                <p style={{ fontWeight: 600, fontSize: '1rem' }}>
                  {t('home.diyVsTaskbot.taskbotResults')}
                </p>
                <p className="mt-2 opacity-90" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {t('home.diyVsTaskbot.taskbotResultsText')}
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#1B4965]/10 to-[#3A7D7C]/10 border-l-4 border-[#3A7D7C] rounded-lg p-8">
            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {t('home.diyVsTaskbot.recommendationTitle')}
            </h3>
            <p className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {t('home.diyVsTaskbot.recommendationText1')}
            </p>
            <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              {t('home.diyVsTaskbot.recommendationText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            {t('home.finalCta.title')}
          </h2>
          <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            {t('home.finalCta.subtitle')}
          </p>
          
          <div className="mt-8">
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-white text-[#1B4965] hover:bg-[#E1E5F0] px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              {t('home.finalCta.button')} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-[#E1E5F0]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              {t('home.finalCta.learnFirst')}{' '}
              <button 
                onClick={() => onNavigate('blog/guardarrailes-ia-guia-practica')}
                className="underline hover:text-white transition-colors"
                style={{ fontWeight: 600 }}
              >
                {t('home.finalCta.readGuide')}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
