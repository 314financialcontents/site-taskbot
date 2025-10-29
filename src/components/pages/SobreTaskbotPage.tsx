import { Target, Users, Award, Heart, Mail, MapPin, Phone, CheckCircle, Clock, Zap, TrendingUp, Eye, Handshake, Lightbulb } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import type { RouteKey } from '../../utils/routes';

interface SobreTaskbotPageProps {
  onNavigate?: (page: RouteKey) => void;
}

export function SobreTaskbotPage({ onNavigate }: SobreTaskbotPageProps) {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('sobreTaskbot.values.transparency.title'),
      description: t('sobreTaskbot.values.transparency.description'),
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: t('sobreTaskbot.values.collaboration.title'),
      description: t('sobreTaskbot.values.collaboration.description'),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('sobreTaskbot.values.innovation.title'),
      description: t('sobreTaskbot.values.innovation.description'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('sobreTaskbot.values.impact.title'),
      description: t('sobreTaskbot.values.impact.description'),
    },
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1B4965] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('sobreTaskbot.title')}
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t('sobreTaskbot.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('sobreTaskbot.whyWeExistTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('sobreTaskbot.whyWeExistSubtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {/* Mission Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 mb-6 w-fit">
                    <p className="text-white text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                      {t('sobreTaskbot.missionLabel')}
                    </p>
                  </div>
                  
                  <h3 className="text-white mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {t('sobreTaskbot.missionTitle')}
                  </h3>
                  
                  <p className="text-[#E1E5F0] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                    {t('sobreTaskbot.missionText')}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#E1E5F0]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        {t('sobreTaskbot.missionPoint1')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#E1E5F0]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        {t('sobreTaskbot.missionPoint2')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#E1E5F0]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        {t('sobreTaskbot.missionPoint3')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Side - Technical Pattern */}
                <div className="hidden lg:block relative bg-gradient-to-br from-[#3A7D7C] to-[#2E7D6D] p-12 overflow-hidden">
                  {/* Code-like visual pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: `repeating-linear-gradient(
                        0deg,
                        rgba(255,255,255,0.05) 0px,
                        transparent 1px,
                        transparent 20px,
                        rgba(255,255,255,0.05) 21px
                      )`
                    }}></div>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1B4965]/20 rounded-full blur-2xl"></div>
                  
                  {/* Floating elements */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="space-y-4 w-full">
                      {/* Simulated terminal/code window */}
                      <div className="bg-[#0D1B2A]/40 backdrop-blur-sm border border-white/30 rounded-lg overflow-hidden shadow-2xl">
                        <div className="bg-white/10 px-4 py-2 flex items-center gap-2 border-b border-white/20">
                          <div className="w-3 h-3 rounded-full bg-[#C0392B]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#F4B400]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#2E7D6D]"></div>
                          <span className="ml-2 text-white/60 text-xs font-mono">agent_config.py</span>
                        </div>
                        <div className="p-4 space-y-2 font-mono text-xs">
                          <div className="flex gap-2">
                            <span className="text-white/40">1</span>
                            <span className="text-white/90"><span className="text-[#F4B400]">def</span> <span className="text-white">validate_invoice</span>():</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-white/40">2</span>
                            <span className="text-white/70 pl-4">guardrails.check()</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-white/40">3</span>
                            <span className="text-white/70 pl-4"><span className="text-[#2E7D6D]">return</span> result</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:bg-white/20 transition-all">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white text-xl" style={{ fontWeight: 700 }}>40h→4h</p>
                          <p className="text-white/70 text-xs mt-1">{t('sobreTaskbot.missionStats.timeSaved')}</p>
                        </div>

                        <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:bg-white/20 transition-all">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white text-xl" style={{ fontWeight: 700 }}>95%+</p>
                          <p className="text-white/70 text-xs mt-1">{t('sobreTaskbot.missionStats.precision')}</p>
                        </div>
                      </div>

                      {/* Process Flow */}
                      <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white text-sm" style={{ fontWeight: 600 }}>{t('sobreTaskbot.missionStats.automatedFlow')}</span>
                          <span className="px-2 py-1 bg-[#2E7D6D] rounded text-white text-xs">{t('sobreTaskbot.missionStats.active')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-white to-[#2E7D6D] rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-white/80 text-xs">75%</span>
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-white/60 text-xs">
                          <CheckCircle className="w-4 h-4" />
                          <span>{t('sobreTaskbot.missionStats.validationsPassed')}</span>
                        </div>
                      </div>

                      {/* API Status */}
                      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-2 h-2 bg-[#2E7D6D] rounded-full animate-pulse"></div>
                              <div className="absolute inset-0 w-2 h-2 bg-[#2E7D6D] rounded-full animate-ping"></div>
                            </div>
                            <div>
                              <p className="text-white text-sm" style={{ fontWeight: 600 }}>{t('sobreTaskbot.missionStats.actionsAPI')}</p>
                              <p className="text-white/60 text-xs">{t('sobreTaskbot.missionStats.ontologyLoaded')}</p>
                            </div>
                          </div>
                          <Zap className="w-5 h-5 text-[#F4B400]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Visual Side - Stats Pattern (on left for variety) */}
                <div className="hidden lg:block relative bg-gradient-to-br from-[#E1E5F0] to-[#D1D5E0] p-12 order-1 lg:order-1 overflow-hidden">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full" style={{
                      backgroundImage: `linear-gradient(rgba(27,73,101,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(27,73,101,0.1) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-[#3A7D7C]/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1B4965]/10 rounded-full blur-3xl"></div>
                  
                  {/* Dashboard-like elements */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="space-y-4 w-full">
                      {/* Main stat card */}
                      <div className="bg-white border-2 border-[#1B4965]/20 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="text-[#1B4965]" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>
                              20+
                            </div>
                            <div className="text-[#5A6B7C] mt-2" style={{ fontSize: '0.9375rem' }}>{t('sobreTaskbot.visionStats.automatedProcesses')}</div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[#2E7D6D] text-sm">
                          <TrendingUp className="w-4 h-4" />
                          <span>{t('sobreTaskbot.visionStats.growthThisYear')}</span>
                        </div>
                      </div>

                      {/* Two column stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border-2 border-[#3A7D7C]/20 rounded-lg p-4 shadow-lg hover:border-[#3A7D7C] transition-all">
                          <div className="w-10 h-10 bg-[#3A7D7C]/10 rounded-lg flex items-center justify-center mb-3">
                            <Clock className="w-5 h-5 text-[#3A7D7C]" />
                          </div>
                          <div className="text-[#3A7D7C]" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                            4-8
                          </div>
                          <div className="text-[#5A6B7C] text-xs mt-1">{t('sobreTaskbot.visionStats.weeks')}</div>
                        </div>
                        
                        <div className="bg-white border-2 border-[#2E7D6D]/20 rounded-lg p-4 shadow-lg hover:border-[#2E7D6D] transition-all">
                          <div className="w-10 h-10 bg-[#2E7D6D]/10 rounded-lg flex items-center justify-center mb-3">
                            <Zap className="w-5 h-5 text-[#2E7D6D]" />
                          </div>
                          <div className="text-[#2E7D6D]" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                            70-90%
                          </div>
                          <div className="text-[#5A6B7C] text-xs mt-1">{t('sobreTaskbot.visionStats.timeSaved')}</div>
                        </div>
                      </div>

                      {/* Progress card */}
                      <div className="bg-white border border-[#E1E5F0] rounded-lg p-4 shadow-md">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[#0D1B2A] text-sm" style={{ fontWeight: 600 }}>{t('sobreTaskbot.visionStats.successRate')}</span>
                          <span className="text-[#2E7D6D]" style={{ fontWeight: 700 }}>95%+</span>
                        </div>
                        <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#3A7D7C] to-[#2E7D6D] rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>

                      {/* Impact card */}
                      <div className="bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] rounded-xl p-5 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <Heart className="w-5 h-5" />
                          </div>
                          <span style={{ fontWeight: 600 }}>{t('sobreTaskbot.visionStats.measurableImpact')}</span>
                        </div>
                        <div className="text-white/90 text-sm leading-relaxed">
                          {t('sobreTaskbot.visionStats.positiveROI')}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-2 text-white/80 text-xs">
                          <CheckCircle className="w-4 h-4" />
                          <span>{t('sobreTaskbot.visionStats.guaranteedResults')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="bg-white border-2 border-[#E1E5F0] p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
                  <div className="inline-block bg-[#1B4965]/5 border border-[#1B4965]/20 rounded-lg px-4 py-2 mb-6 w-fit">
                    <p className="text-[#1B4965] text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                      {t('sobreTaskbot.visionLabel')}
                    </p>
                  </div>
                  
                  <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {t('sobreTaskbot.visionTitle')}
                  </h3>
                  
                  <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                    {t('sobreTaskbot.visionText')}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#1B4965] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        <strong>{t('sobreTaskbot.visionPoint1Title')}</strong> {t('sobreTaskbot.visionPoint1')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#1B4965] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        <strong>{t('sobreTaskbot.visionPoint2Title')}</strong> {t('sobreTaskbot.visionPoint2')}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#1B4965] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                        <strong>{t('sobreTaskbot.visionPoint3Title')}</strong> {t('sobreTaskbot.visionPoint3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('sobreTaskbot.valuesTitle')}
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              {t('sobreTaskbot.valuesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-shadow border-t-4 border-[#3A7D7C]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                {t('sobreTaskbot.commitmentTitle')}
              </h2>
              <p className="mt-6 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                {t('sobreTaskbot.commitmentText1')}
              </p>
              <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                {t('sobreTaskbot.commitmentText2')}
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MjQ1NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oficina Taskbot"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1B4965] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {t('sobreTaskbot.contactSectionTitle')}
            </h2>
            <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem' }}>
              {t('sobreTaskbot.contactSectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {t('sobreTaskbot.contactEmail')}
              </h3>
              <p className="text-[#E1E5F0]">
                info@taskbot.pro
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {t('sobreTaskbot.contactPhone')}
              </h3>
              <p className="text-[#E1E5F0]">
                +34 91 101 2001
              </p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {t('sobreTaskbot.contactOffice')}
              </h3>
              <p className="text-[#E1E5F0]">
                Ferrol, A Coruña
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate?.('contacto')}
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              {t('sobreTaskbot.contactButton')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}