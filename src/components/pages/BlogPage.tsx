import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useState } from 'react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const blogPosts = [
    {
      id: 'semantica-empresa',
      title: 'Semántica en la empresa: cómo pasar del dato al significado operativo (y por qué la IA lo necesita)',
      excerpt: 'Datos dispersos, integraciones frágiles y agentes de IA que piden aclaraciones. El problema de fondo suele ser falta de semántica compartida. Descubre cómo construir significado operativo en semanas, no meses.',
      date: '9 Oct 2025',
      readTime: '7 min',
      category: 'Automatización',
      featured: true,
    },
    {
      id: 'guardarrailes-ia-guia-practica',
      title: 'Guardarraíles de IA: guía práctica para que tus agentes trabajen seguros (y sin sustos)',
      excerpt: 'Los guardarraíles no limitan a tus agentes, los guían. Descubre cómo implementar capas de control para que tus agentes de IA operen con seguridad, cumplan políticas y protejan tu marca sin perder autonomía ni eficiencia.',
      date: '9 Oct 2025',
      readTime: '10 min',
      category: 'IA',
      featured: false,
    },
    {
      id: 'del-know-how-al-flujo',
      title: 'Del know-how al flujo: convierte tareas repetitivas en ejecución autónoma',
      excerpt: 'La mayoría de empresas guardan su mayor activo en la cabeza del equipo: el "saber hacer". Funciona… hasta que el volumen sube, aparecen errores o el personal cambia. Te guiamos para pasar de conocimiento implícito a ejecución autónoma y trazable.',
      date: '2 Oct 2025',
      readTime: '12 min',
      category: 'Automatización',
      featured: false,
    },
  ];

  const categories = [
    'Todos',
    'Automatización',
    'IA',
    'Casos de éxito',
    'Tendencias',
  ];

  // Filtrar posts según la categoría seleccionada
  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              Blog
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Insights, guías prácticas y tendencias sobre automatización inteligente e hiperautomatización para empresas.
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
                No hay artículos en esta categoría todavía.
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
                {/* Image placeholder with gradient */}
                <div className="h-48 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                      {post.category}
                    </p>
                  </div>
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
                    <span>Leer más</span>
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