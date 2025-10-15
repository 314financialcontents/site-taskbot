import { Calendar, Clock, ArrowLeft, CheckCircle, BookOpen, GitBranch, Shield, FileText, Zap, Database, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPostSemanticaEmpresaProps {
  onNavigate: (page: string) => void;
}

export function BlogPostSemanticaEmpresa({ onNavigate }: BlogPostSemanticaEmpresaProps) {
  const { t } = useLanguage();
  const post = {
    title: t('blog.posts.semanticaEmpresa.title'),
    date: t('blog.posts.semanticaEmpresa.date'),
    readTime: t('blog.posts.semanticaEmpresa.readTime'),
    category: t('blog.posts.semanticaEmpresa.category'),
  };

  const content = t('blog.posts.semanticaEmpresa.content');

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={t('blog.posts.semanticaEmpresa.image')}
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

          {/* Warning callout */}
          <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg mb-12">
            <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              <strong>{content.common.tldr}:</strong> {content.tldr}
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.whatIsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.whatIsIntro}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card1Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {content.card1}
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card2Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {content.card2}
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card3Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {content.card3}
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {content.card4Title}
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {content.card4}
                </p>
              </div>
            </div>

            <div className="bg-[#E1E5F0]/50 rounded-lg p-6">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                💡 <strong>{content.common.important}:</strong> {content.whatIsCallout}
              </p>
            </div>
          </section>

          {/* Section 2: Benefits */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.whyMattersTitle}
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.benefit1Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.benefit1}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.benefit2Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.benefit2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.benefit3Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.benefit3}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.benefit4Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.benefit4}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.benefit5Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.benefit5}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Symptoms */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.symptomsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.symptomsIntro}
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom1}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom2}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom3}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom4}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom5}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom6}
              </li>
              <li className="flex gap-3 items-start text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                {content.symptom7}
              </li>
            </ul>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>{content.common.important}:</strong> {content.symptomsCallout}
              </p>
            </div>
          </section>

          {/* Section 4: How to Build */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.howToBuildTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.howToBuildIntro}
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  1
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step1Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step1}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  2
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step2Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  3
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step3Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step3}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  4
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step4Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step4}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  5
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step5Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step5}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  6
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.step6Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.step6}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.common.practicalTip}:</strong> {content.howToBuildTip}
              </p>
            </div>
          </section>

          {/* Section 5: AI Needs */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.aiNeedsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.aiNeedsIntro}
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.aiNeed1Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.aiNeed1}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.aiNeed2Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.aiNeed2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.aiNeed3Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.aiNeed3}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.aiNeed4Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.aiNeed4}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>{content.common.important}:</strong> {content.aiNeedsCallout}
              </p>
            </div>
          </section>

          {/* Section 6: Example */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.exampleTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.exampleIntro}
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    {content.examplePoint1Title}
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {content.examplePoint1}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    {content.examplePoint2Title}
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {content.examplePoint2}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    {content.examplePoint3Title}
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {content.examplePoint3}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    {content.examplePoint4Title}
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {content.examplePoint4}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    {content.examplePoint5Title}
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {content.examplePoint5}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>{content.common.important}:</strong> {content.exampleResult}
              </p>
            </div>
          </section>

          {/* Section 7: Tools */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.toolsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.toolsIntro}
            </p>

            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec1.split(':')[0]}:</strong> {content.toolsRec1.split(':').slice(1).join(':')}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec2.split(':')[0]}:</strong> {content.toolsRec2.split(':').slice(1).join(':')}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec3.split(':')[0]}:</strong> {content.toolsRec3.split(':').slice(1).join(':')}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec4.split(':')[0]}:</strong> {content.toolsRec4.split(':').slice(1).join(':')}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.toolsRec5.split(':')[0]}:</strong> {content.toolsRec5.split(':').slice(1).join(':')}
              </li>
            </ul>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>{content.common.important}:</strong> {content.toolsPrinciple}
              </p>
            </div>
          </section>

          {/* Section 8: Next Steps */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.nextStepsTitle}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.nextStepsIntro}
            </p>

            <ol className="space-y-4 mb-8 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep1}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep2}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep3}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep4}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep5}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep6}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.nextStep7}
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
