import { Calendar, Clock, ArrowLeft, CheckCircle, ArrowRight, Shield, AlertTriangle, Lock, Eye, Layers, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPostGuardarrailesIAProps {
  onNavigate: (page: string) => void;
}

export function BlogPostGuardarrailesIA({ onNavigate }: BlogPostGuardarrailesIAProps) {
  const { t } = useLanguage();
  const post = {
    title: t('blog.posts.guardarrailesIA.title'),
    date: t('blog.posts.guardarrailesIA.date'),
    readTime: t('blog.posts.guardarrailesIA.readTime'),
    category: t('blog.posts.guardarrailesIA.category'),
  };

  const content = t('blog.posts.guardarrailesIA.content');

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={t('blog.posts.guardarrailesIA.image')}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#1B4965]/85 to-[#3A7D7C]/80"></div>
        </div>

        {/* Content over image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center text-white/80 hover:text-white transition-colors mb-8"
              style={{ fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('blog.backToBlog')}
            </button>
            
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-md mb-6" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              {post.category}
            </div>
            
            <h1 className="text-white mb-6" style={{ fontSize: '2.75rem', fontWeight: 700, lineHeight: 1.15 }}>
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/80" style={{ fontSize: '0.9375rem' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} {t('blog.readingTime')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Lead paragraph */}
          <div className="mb-12">
            <p className="text-[#5A6B7C]" style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
              {content.lead}
            </p>
          </div>

          {/* Section: Por qué ahora */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.whyNowTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.whyNowP1}
            </p>

            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.whyNowP2}
            </p>

            <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.common.theKey}:</strong> {content.whyNowCallout}
              </p>
            </div>
          </section>

          {/* Section: Qué son los guardarraíles */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.whatAreTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.whatAreP1}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.whatAreCard1Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {content.whatAreCard1}
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#1B4965] rounded-lg flex items-center justify-center text-white mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.whatAreCard2Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {content.whatAreCard2}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Cómo funcionan en producción */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.howWorkTitle}
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.howWorkIntro}
            </p>

            {/* Capa 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  1
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer1Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer1Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer1P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer1P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer1P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer1P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer1P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer1P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer1P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer1P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.practicalTip}:</strong> {content.layer1Tip}
                </p>
              </div>
            </div>

            {/* Capa 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  2
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer2Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer2Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer2P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer2P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer2P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer2P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer2P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer2P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer2P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer2P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.important}:</strong> {content.layer2Tip}
                </p>
              </div>
            </div>

            {/* Capa 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  3
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer3Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer3Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer3P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer3P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer3P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer3P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer3P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer3P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer3P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer3P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  <strong>{content.common.important}:</strong> {content.layer3Callout}
                </p>
              </div>
            </div>

            {/* Capa 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  4
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer4Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer4Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer4P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer4P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer4P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer4P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer4P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer4P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer4P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer4P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.goldenRule}:</strong> {content.layer4Tip}
                </p>
              </div>
            </div>

            {/* Capa 5 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  5
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer5Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer5Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer5P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer5P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer5P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer5P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer5P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer5P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer5P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer5P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  <strong>{content.common.important}:</strong> {content.layer5Callout}
                </p>
              </div>
            </div>

            {/* Capa 6 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  6
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.layer6Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.layer6Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer6P1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer6P1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer6P2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer6P2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer6P3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer6P3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.layer6P4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.layer6P4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.goldenRule}:</strong> {content.layer6Tip}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Implementación */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.implementTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.implementIntro}
            </p>

            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {content.toolsRecommendedTitle}
            </h3>

            <ul className="space-y-3 mb-10 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec1.split(':')[0]}:</strong> {content.toolsRec1.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec2.split(':')[0]}:</strong> {content.toolsRec2.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec3.split(':')[0]}:</strong> {content.toolsRec3.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec4.split(':')[0]}:</strong> {content.toolsRec4.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec5.split(':')[0]}:</strong> {content.toolsRec5.split(':')[1]}
              </li>
            </ul>

            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {content.patternTitle}
            </h3>

            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.patternP1.split(':')[0]}:</strong> {content.patternP1.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.patternP2.split(':')[0]}:</strong> {content.patternP2.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.patternP3.split(':')[0]}:</strong> {content.patternP3.split(':')[1]}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.patternP4.split(':')[0]}:</strong> {content.patternP4.split(':')[1]}
              </li>
            </ul>

            <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.common.recommendedPractice}:</strong> {content.patternCallout}
              </p>
            </div>
          </section>

          {/* Section: Errores comunes */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.pitfallsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.pitfallsIntro}
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.pitfall1Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.pitfall1Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.pitfall1Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.pitfall2Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.pitfall2Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.pitfall2Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.pitfall3Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.pitfall3Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.pitfall3Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.pitfall4Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.pitfall4Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.pitfall4Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.pitfall5Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.pitfall5Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.pitfall5Solution}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Acciones concretas */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.actionTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.actionIntro}
            </p>

            <ol className="space-y-4 mb-8 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action1}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action2}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action3}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action4}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action5}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.action6}
              </li>
            </ol>
          </section>

          {/* CTA Final */}
          <section className="bg-gradient-to-br from-[#0D1B2A] to-[#1B4965] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
              {content.ctaTitle}
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              {content.ctaText}
            </p>
            <Button
              onClick={() => onNavigate('contacto')}
              size="lg"
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white"
              style={{ fontSize: '1.0625rem', fontWeight: 600 }}
            >
              {content.ctaButton}
            </Button>
          </section>
        </div>
      </article>
    </div>
  );
}
