import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('blog.allCategories'));

  const blogPosts = [
    {
      id: 'robotica-hiperautomatizacion',
      title: t('blog.posts.roboticaHiperautomatizacion.title'),
      excerpt: t('blog.posts.roboticaHiperautomatizacion.excerpt'),
      date: t('blog.posts.roboticaHiperautomatizacion.date'),
      readTime: t('blog.posts.roboticaHiperautomatizacion.readTime'),
      category: t('blog.posts.roboticaHiperautomatizacion.category'),
      categories: t('blog.posts.roboticaHiperautomatizacion.categories'),
      image: t('blog.posts.roboticaHiperautomatizacion.image'),
      featured: true,
    },
    {
      id: 'semantica-empresa',
      title: t('blog.posts.semanticaEmpresa.title'),
      excerpt: t('blog.posts.semanticaEmpresa.excerpt'),
      date: t('blog.posts.semanticaEmpresa.date'),
      readTime: t('blog.posts.semanticaEmpresa.readTime'),
      category: t('blog.posts.semanticaEmpresa.category'),
      categories: t('blog.posts.semanticaEmpresa.categories'),
      image: t('blog.posts.semanticaEmpresa.image'),
      featured: false,
    },
    {
      id: 'guardarrailes-ia-guia-practica',
      title: t('blog.posts.guardarrailesIA.title'),
      excerpt: t('blog.posts.guardarrailesIA.excerpt'),
      date: t('blog.posts.guardarrailesIA.date'),
      readTime: t('blog.posts.guardarrailesIA.readTime'),
      category: t('blog.posts.guardarrailesIA.category'),
      categories: t('blog.posts.guardarrailesIA.categories'),
      image: t('blog.posts.guardarrailesIA.image'),
      featured: false,
    },
    {
      id: 'del-know-how-al-flujo',
      title: t('blog.posts.delKnowHowAlFlujo.title'),
      excerpt: t('blog.posts.delKnowHowAlFlujo.excerpt'),
      date: t('blog.posts.delKnowHowAlFlujo.date'),
      readTime: t('blog.posts.delKnowHowAlFlujo.readTime'),
      category: t('blog.posts.delKnowHowAlFlujo.category'),
      categories: t('blog.posts.delKnowHowAlFlujo.categories'),
      image: t('blog.posts.delKnowHowAlFlujo.image'),
      featured: false,
    },
  ];

  const categories = [
    t('blog.allCategories'),
    t('blog.categories.automation'),
    t('blog.categories.robotics'),
    t('blog.categories.sensorization'),
    t('blog.categories.trends'),
    t('blog.categories.ai'),
    t('blog.categories.semantics'),
    t('blog.categories.integrations'),
    t('blog.categories.security'),
    t('blog.categories.methodology'),
  ];

  // Filtrar posts según la categoría seleccionada (usando el array de categorías)
  const filteredPosts = selectedCategory === t('blog.allCategories')
    ? blogPosts 
    : blogPosts.filter(post => post.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              {t('blog.title')}
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#3A7D7C] text-white'
                    : 'bg-[#E1E5F0] text-[#5A6B7C] hover:bg-[#3A7D7C] hover:text-white'
                }`}
                style={{ fontWeight: 500 }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
                {t('blog.noArticles')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => onNavigate(`blog/${post.id}`)}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  {post.image ? (
                    <>
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Blue overlay matching the post header */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#1B4965]/85 to-[#3A7D7C]/80"></div>
                      {/* Categories */}
                      <div className="absolute inset-0 flex items-end justify-center p-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {post.categories.map((cat: string) => (
                            <span 
                              key={cat}
                              className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm text-white"
                              style={{ fontSize: '0.875rem', fontWeight: 600 }}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {post.categories.map((cat: string) => (
                            <span 
                              key={cat}
                              className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm"
                              style={{ fontSize: '0.875rem', fontWeight: 600 }}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-[#5A6B7C] mb-3" style={{ fontSize: '0.875rem' }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0D1B2A] mb-3 group-hover:text-[#3A7D7C] transition-colors" style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center text-[#3A7D7C] group-hover:text-[#2E7D6D] transition-colors" style={{ fontWeight: 600 }}>
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}