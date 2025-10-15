import { Calendar, Clock, ArrowLeft, CheckCircle, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { BlogPostGuardarrailesIA } from './BlogPostGuardarrailesIA';
import { BlogPostSemanticaEmpresa } from './BlogPostSemanticaEmpresa';
import { BlogPostRoboticaHiperautomatizacion } from './BlogPostRoboticaHiperautomatizacion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPostPageProps {
  onNavigate: (page: string) => void;
  postId?: string;
}

export function BlogPostPage({ onNavigate, postId }: BlogPostPageProps) {
  const { t } = useLanguage();
  
  // If it's the robotica post, render the dedicated component
  if (postId === 'robotica-hiperautomatizacion') {
    return <BlogPostRoboticaHiperautomatizacion onNavigate={onNavigate} />;
  }

  // If it's the guardarrailes post, render the dedicated component
  if (postId === 'guardarrailes-ia-guia-practica') {
    return <BlogPostGuardarrailesIA onNavigate={onNavigate} />;
  }

  // If it's the semantica post, render the dedicated component
  if (postId === 'semantica-empresa') {
    return <BlogPostSemanticaEmpresa onNavigate={onNavigate} />;
  }

  // Default post data for the original article
  const post = {
    title: t('blog.posts.delKnowHowAlFlujo.title'),
    date: t('blog.posts.delKnowHowAlFlujo.date'),
    readTime: t('blog.posts.delKnowHowAlFlujo.readTime'),
    category: t('blog.posts.delKnowHowAlFlujo.category'),
  };

  const content = t('blog.posts.delKnowHowAlFlujo.content');

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Image */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={t('blog.posts.delKnowHowAlFlujo.image')}
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

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section1.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section1.intro}
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section1.point1Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section1.point1}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section1.point2Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section1.point2}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section1.point3Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section1.point3}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section1.point4Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section1.point4}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section1.point5Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section1.point5}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>{content.common.important}:</strong> {content.section1.callout}
              </p>
            </div>
          </section>

          {/* Section 2 - Mini-método en 5 pasos */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section2.title}
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section2.intro}
            </p>

            {/* Paso 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  1
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.section2.step1Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section2.step1Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step1Point1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step1Point1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step1Point2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step1Point2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step1Point3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step1Point3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step1Point4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step1Point4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.practicalTip}:</strong> {content.section2.step1Tip}
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  2
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.section2.step2Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section2.step2Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step2Point1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step2Point1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step2Point2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step2Point2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step2Point3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step2Point3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step2Point4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step2Point4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.recommendedOutput}:</strong> {content.section2.step2Tip}
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  3
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.section2.step3Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section2.step3Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step3Point1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step3Point1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step3Point2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step3Point2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step3Point3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step3Point3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step3Point4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step3Point4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.objective}:</strong> {content.section2.step3Tip}
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  4
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.section2.step4Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section2.step4Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-8">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step4Point1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step4Point1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step4Point2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step4Point2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step4Point3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step4Point3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step4Point4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step4Point4}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  <strong>{content.common.goldenRule}:</strong> {content.section2.step4Callout}
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  5
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {content.section2.step5Title}
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section2.step5Intro}
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point1Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point1}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point2Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point2}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point3Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point3}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point4Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point4}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point5Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point5}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point6Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point6}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point7Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point7}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      {content.section2.step5Point8Title}
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {content.section2.step5Point8}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>{content.common.realisticGoal}:</strong> {content.section2.step5Tip}
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Stand-alone vs. orquestación */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section3.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section3.intro}
            </p>

            <div className="mb-8 border-l-4 border-[#2E7D6D] pl-6 py-4 bg-[#E1E5F0]/20">
              <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                {content.section3.standAloneTitle}
              </h3>
              <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section3.standAlonePara1}
              </p>
              <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.common.whenToChoose}:</strong> {content.section3.standAlonePara2}
              </p>
            </div>

            <div className="mb-8 border-l-4 border-[#1B4965] pl-6 py-4 bg-[#E1E5F0]/20">
              <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                {content.section3.orchestrationTitle}
              </h3>
              <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section3.orchestrationPara1}
              </p>
              <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>{content.common.whenToChoose}:</strong> {content.section3.orchestrationPara2}
              </p>
            </div>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>{content.common.recommendedPractice}:</strong> {content.section3.tip}
              </p>
            </div>
          </section>

          {/* Section 4 - Cómo elegir el proceso piloto */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section4.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section4.intro}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  1
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section4.factor1Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section4.factor1}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  2
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section4.factor2Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section4.factor2}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  3
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section4.factor3Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section4.factor3}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  4
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section4.factor4Title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section4.factor4}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>{content.common.practicalTip}:</strong> {content.section4.tip}
              </p>
            </div>
          </section>

          {/* Section 5 - Herramientas y plataformas */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section5.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section5.intro}
            </p>

            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {content.section5.recommendedTitle}
            </h3>

            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.recommended1Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.recommended1}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.recommended2Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.recommended2}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.recommended3Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.recommended3}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.recommended4Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.recommended4}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              {content.section5.avoidTitle}
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.avoid1Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.avoid1}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.avoid2Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.avoid2}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    {content.section5.avoid3Title}
                  </h4>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    {content.section5.avoid3}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>{content.common.important}:</strong> {content.section5.principle}
              </p>
            </div>
          </section>

          {/* Section 6 - Pitfalls comunes */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section6.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section6.intro}
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.section6.pitfall1Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.section6.pitfall1Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.section6.pitfall1Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.section6.pitfall2Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.section6.pitfall2Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.section6.pitfall2Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.section6.pitfall3Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.section6.pitfall3Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.section6.pitfall3Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.section6.pitfall4Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.section6.pitfall4Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.section6.pitfall4Solution}
                </p>
              </div>
              
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {content.section6.pitfall5Title}
                </h3>
                <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>{content.common.problem}:</strong> {content.section6.pitfall5Problem}
                </p>
                <p className="text-[#2E7D6D]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontWeight: 500 }}>
                  <strong>{content.common.solution}:</strong> {content.section6.pitfall5Solution}
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 - Qué hacer hoy */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              {content.section7.title}
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              {content.section7.intro}
            </p>

            <ol className="space-y-4 mb-8 ml-6">
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action1}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action2}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action3}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action4}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action5}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action6}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action7}
              </li>
              <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                {content.section7.action8}
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
