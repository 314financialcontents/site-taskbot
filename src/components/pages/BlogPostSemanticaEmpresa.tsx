import { Calendar, Clock, ArrowLeft, BookOpen, Database, CheckCircle, AlertTriangle, GitBranch, Shield, Target, Zap, Search, FileText, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface BlogPostSemanticaEmpresaProps {
  onNavigate: (page: string) => void;
}

export function BlogPostSemanticaEmpresa({ onNavigate }: BlogPostSemanticaEmpresaProps) {
  const post = {
    title: 'Semántica en la empresa: cómo pasar del dato al significado operativo (y por qué la IA lo necesita)',
    date: '9 Oct 2025',
    readTime: '7 min',
    category: 'Automatización',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with gradient */}
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blog')}
            className="flex items-center text-white/80 hover:text-white transition-colors mb-8"
            style={{ fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
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
              <span>{post.readTime} de lectura</span>
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
              Las compañías acumulan datos, tableros y automatizaciones. Aun así, aparecen incoherencias: dos informes con el mismo nombre que no cuadran, integraciones frágiles, reglas escondidas en hojas de cálculo, agentes de IA que piden aclaraciones constantemente. El patrón de fondo suele ser el mismo: <strong>falta de semántica compartida</strong>.
            </p>
          </div>

          {/* Warning callout */}
          <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg mb-12">
            <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              <strong>TL;DR:</strong> La semántica es el acuerdo explícito sobre qué significa cada término, estado y regla en tu empresa. Sin ella, las automatizaciones y los agentes de IA operan a ciegas. Con ella, ganas coherencia, velocidad y trazabilidad.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Qué es "semántica" en términos operativos
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Cuando hablamos de semántica en el contexto empresarial, no nos referimos a filosofía ni lingüística académica. Hablamos de un <strong>acuerdo explícito y versionado</strong> sobre cómo tu empresa entiende e interpreta información crítica.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Vocabulario controlado
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Términos canónicos, sinónimos permitidos y anti-sinónimos (lo que NO es un término). Evita la Torre de Babel interna.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Contexto y alcance
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  "Salida" en Operaciones vs. "Salida de caja" en Finanzas. El mismo término puede tener matices por área, y deben declararse.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Reglas de interpretación
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Unidades, estados, ciclos de vida, restricciones y equivalencias. Define qué puede pasar y cuándo.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Evidencias (Provenance)
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Quién registró qué, cuándo y con qué soporte (documento, etiqueta, sensor). Sin evidencia, no hay trazabilidad.
                </p>
              </div>
            </div>

            <div className="bg-[#E1E5F0]/50 rounded-lg p-6">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                💡 <strong>La semántica no es un documento decorativo:</strong> es un activo que consumen personas, aplicaciones, integraciones y agentes de IA para decidir de forma consistente.
              </p>
            </div>
          </section>

          {/* Section 2: Benefits */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Por qué importa (beneficios que se notan)
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Ahorro de tiempo
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Integraciones y análisis pasan de "parches artesanales" a mapeos semánticos. Las discusiones interminables por terminología desaparecen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Menos errores
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Las validaciones se declaran por significado (qué requiere un "Bulto", cuándo una "Salida" puede finalizar), no dispersas en formularios o scripts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Conocimiento capitalizado
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Reglas, taxonomías y estados viven en un repositorio versionado. Dejan de depender de "la persona que sabe".
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Automatización con guardarraíles
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Los agentes operan dentro de límites semánticos: umbrales, restricciones, evidencias y trazabilidad completa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Warning signs */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Señales de alerta (si te ves aquí, falta semántica)
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] border-l-4 border-[#C0392B] rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  Informes con el mismo nombre que muestran cifras distintas según el área que los genera
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] border-l-4 border-[#C0392B] rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  Estados redundantes o ambiguos ("cerrado", "finalizado", "completado" usados indistintamente)
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] border-l-4 border-[#C0392B] rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  Conceptos clave capturados como texto libre en lugar de vocabulario controlado
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] border-l-4 border-[#C0392B] rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  "Recetas locales" para transformar datos al integrar con un partner o sistema externo
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#FFF5F5] border-l-4 border-[#C0392B] rounded-r-lg">
                <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  Automatizaciones que se rompen al intentar extender un proceso a un nuevo caso de uso
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Real example */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Ejemplo aterrizado: operaciones logísticas
            </h2>

            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Veamos cómo se traduce la semántica a términos concretos en un proceso real:
            </p>

            <Card className="border-2 border-[#3A7D7C] mb-6">
              <div className="bg-gradient-to-r from-[#3A7D7C] to-[#1B4965] text-white p-4 rounded-t-lg">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Término canónico: "Salida"
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Definición:</p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Movimiento de mercancía que abandona el almacén con destino a un tercero
                  </p>
                </div>
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>No es:</p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Devolución a proveedor, traslado interno
                  </p>
                </div>
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Estados:</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      planificada
                    </span>
                    <span>→</span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      en_picking
                    </span>
                    <span>→</span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      embalada
                    </span>
                    <span>→</span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      expedida
                    </span>
                    <span>→</span>
                    <span className="px-3 py-1 bg-[#2E7D6D] text-white rounded-full" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      finalizada
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Requisitos para "finalizada":</p>
                  <ul className="space-y-2 ml-5">
                    <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      ✓ Al menos un Bulto con peso_total, volumen y transportista
                    </li>
                    <li className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      ✓ Incidencias = 0 o resueltas = true
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Evidencias necesarias:</p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Etiqueta de bulto, albarán, evento de expedición con timestamp y usuario
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-[#3A7D7C]">
              <div className="bg-gradient-to-r from-[#3A7D7C] to-[#1B4965] text-white p-4 rounded-t-lg">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Término canónico: "Incidencia"
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Taxonomía (tipos cerrados):</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      faltante
                    </span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      sobrante
                    </span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      dañado
                    </span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      rotura
                    </span>
                    <span className="px-3 py-1 bg-[#E1E5F0] rounded-full text-[#0D1B2A]" style={{ fontSize: '0.875rem' }}>
                      administrativa
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[#0D1B2A] mb-2" style={{ fontWeight: 600 }}>Regla de proceso:</p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Bloquea la transición de Salida a "finalizada" hasta que resueltas = true y accion_tomada esté documentada
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-6 bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#2E7D6D] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>Qué habilita:</strong> Un agente de IA puede crear/modificar salidas con seguridad. Sabe qué campos son obligatorios por significado y cuándo una transición está permitida. Si falta algo, lo solicita. Si hay incidencia, detiene el flujo hasta resolución.
              </p>
            </div>
          </section>

          {/* Section 5: Implementation */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Implantación pragmática en 6 pasos
            </h2>

            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              No necesitas un proyecto de 6 meses. Aquí va un enfoque incremental que entrega valor en semanas:
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    1
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Descubrimiento semántico (1–2 semanas)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Workshops por área para levantar el top-20 términos críticos, fuentes de verdad y fricciones actuales. Produce un glosario v0.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    2
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Ciclos de vida y reglas (1–2 semanas)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Para 2–3 procesos clave, define estados, transiciones, precondiciones y evidencias mínimas. Señala reglas bloqueantes.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    3
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Unidades y taxonomías (1 semana)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Normaliza magnitudes y listas cerradas. Documenta equivalencias y conversiones obligatorias.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    4
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Evidencias y trazabilidad (3–5 días)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Establece el "mínimo viable" de evidencias por evento y las responsabilidades de captura.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    5
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Gobernanza ligera (3–5 días)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Cambios por pull request, notas de versión, ejemplos y tests. Define un pequeño comité (negocio + producto + datos).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-[#3A7D7C] p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#3A7D7C] text-white rounded-full flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    6
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Publicación y consumo (continuo)
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Expón el glosario vía catálogo/datasets. Integra validaciones semánticas en pipelines, formularios e integraciones. Conecta agentes con guardarraíles.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 6: Quick wins */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Quick wins en 10 días
            </h2>

            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Si quieres empezar hoy y ver resultados rápidos, sigue este sprint:
            </p>

            <div className="bg-[#E1E5F0] rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D1–D2:</strong> Lista priorizada de términos por área + responsables
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D3–D4:</strong> Estados/condiciones de tres procesos críticos
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D5–D6:</strong> Taxonomías cerradas de incidencias, motivos y causas
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D7:</strong> Normalización de unidades y conversiones obligatorias
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D8–D9:</strong> Evidencia mínima por evento; actualización de formularios
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0D1B2A]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    <strong>D10:</strong> Checklist semántico en PRs y onboarding de datos/partners
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Risks */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Riesgos habituales (y cómo evitarlos)
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-[#C0392B] bg-[#FFF5F5] p-5 rounded-r-lg">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Modelos enciclopédicos
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>Evítalo:</strong> Empieza por el 20% de términos que soportan el 80% del valor. Itera desde ahí.
                </p>
              </div>

              <div className="border-l-4 border-[#C0392B] bg-[#FFF5F5] p-5 rounded-r-lg">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Cambios sin versionado
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>Evítalo:</strong> Introduce control de cambios. Sin PR, no se modifica el significado.
                </p>
              </div>

              <div className="border-l-4 border-[#C0392B] bg-[#FFF5F5] p-5 rounded-r-lg">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Texto libre para conceptos clave
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>Evítalo:</strong> Resérvalo para comentarios. Todo lo demás debe ser vocabulario controlado.
                </p>
              </div>

              <div className="border-l-4 border-[#C0392B] bg-[#FFF5F5] p-5 rounded-r-lg">
                <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Agentes sin límites
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                  <strong>Evítalo:</strong> Define umbrales, políticas y evidencias antes de "dar permisos" a la IA.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Conclusión
            </h2>

            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              La semántica es el pegamento invisible entre personas, sistemas y automatizaciones. Convierte datos en significado operativo, reduce fricción, disminuye errores, documenta conocimiento y permite a la IA trabajar con guardarraíles y trazabilidad.
            </p>

            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              No exige rehacer tus sistemas: exige acordar el significado y hacerlo ejecutable. Si estás empezando, elige un proceso crítico, define 20 términos y su ciclo de vida, cierra una taxonomía y añade evidencias mínimas. <strong>En pocas semanas verás menos ambigüedad, más velocidad y automatizaciones que no se rompen en los bordes.</strong>
            </p>

            <div className="bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] rounded-lg p-8 text-white">
              <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                ¿Listo para construir tu capa semántica?
              </h3>
              <p className="mb-6 text-white/90" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                En Taskbot.pro ayudamos a empresas a pasar de procesos dispersos a automatización inteligente con semántica sólida y guardarraíles operativos.
              </p>
              <Button
                onClick={() => onNavigate('contacto')}
                className="bg-white text-[#1B4965] hover:bg-[#E1E5F0]"
              >
                Analiza tu caso con nosotros
              </Button>
            </div>
          </section>

          {/* Navigation */}
          <div className="border-t border-[#E1E5F0] pt-8">
            <Button
              onClick={() => onNavigate('blog')}
              variant="outline"
              className="text-[#1B4965] border-[#1B4965] hover:bg-[#1B4965] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todos los artículos
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
