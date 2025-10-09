import { Calendar, Clock, ArrowLeft, CheckCircle, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { BlogPostGuardarrailesIA } from './BlogPostGuardarrailesIA';
import { BlogPostSemanticaEmpresa } from './BlogPostSemanticaEmpresa';

interface BlogPostPageProps {
  onNavigate: (page: string) => void;
  postId?: string;
}

export function BlogPostPage({ onNavigate, postId }: BlogPostPageProps) {
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
    title: 'Del know-how al flujo: convierte tareas repetitivas en ejecución autónoma',
    date: '2 Oct 2025',
    readTime: '12 min',
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
              La mayoría de empresas guardan su mayor activo en la cabeza del equipo: el "saber hacer". Funciona… hasta que el volumen sube, aparecen errores o el personal cambia. Este artículo te guía para pasar de conocimiento implícito a ejecución autónoma y trazable, sin rehacer tus sistemas ni casarte con una herramienta concreta.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Señales de que un proceso es "candidato" a automatizar
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Antes de invertir tiempo y recursos en automatizar, es fundamental validar si el proceso realmente merece la pena. Un proceso automatizable exitoso comparte ciertas características clave que aumentan significativamente las probabilidades de éxito. Busca procesos que cumplan con estos criterios:
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Entradas y salidas claras
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Los mejores candidatos tienen datos de entrada bien estructurados: formularios con campos definidos, ficheros con formatos conocidos, tablas con columnas estables, estados predecibles. Si tus entradas son ambiguas o cambian constantemente, el proceso no está listo.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Reglas conocidas y documentables
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Debe existir un conjunto claro de límites, umbrales, excepciones típicas y autorizaciones. Por ejemplo: "facturas mayores a 5.000€ requieren aprobación del director" o "pedidos incompletos se marcan como pendientes". Si las decisiones dependen de intuición o contexto no formalizado, primero hay que documentar.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Repetición y volumen significativo
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    La tarea debe ocurrir con suficiente frecuencia (diaria o semanal) y consumir horas de trabajo acumuladas. Automatizar una tarea mensual de 15 minutos no aporta valor. Busca procesos que sumen al menos 5-10 horas semanales del equipo.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Alto impacto del error
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Cuando un fallo genera retrabajo significativo, costes directos, retrasos o impacta negativamente en el cliente, la automatización aporta valor defensivo además de eficiencia. Los errores manuales en facturación, envíos o compliance son excelentes candidatos.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Necesidad de trazabilidad
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Si necesitas demostrar qué pasó, cuándo ocurrió, con qué datos y quién/qué lo ejecutó (por auditoría, compliance o análisis), la automatización te proporciona ese registro de forma nativa, sin esfuerzo adicional.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>Importante:</strong> Si tu proceso cambia cada semana, las reglas son inestables o depende fuertemente de juicio humano contextual, probablemente no es buen candidato para empezar. Primero estabiliza y documenta, luego automatiza.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Mini-método en 5 pasos
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Este método práctico te permite estructurar cualquier proceso para su automatización, sin importar la herramienta o plataforma que uses. Cada paso construye sobre el anterior, creando una base sólida y verificable.
            </p>

            {/* Paso 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  1
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Mapear (sin interpretación)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                El primer paso consiste en documentar el proceso tal y como es hoy, sin adornos ni interpretaciones. No estás diseñando el futuro; estás capturando la realidad actual. Este mapeo debe ser visible, compartible y breve para que el equipo lo use de verdad.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Entradas
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Identifica fuentes (email, CRM, Excel, API), formatos exactos (CSV, JSON, PDF) y validaciones mínimas necesarias (campos obligatorios, rangos válidos).
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Tareas
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Enumera pasos en orden lógico, incluyendo condiciones del tipo "si el importe supera X, entonces escalar a Y". Captura el flujo real, no el ideal.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Salidas
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define formatos de salida, estados resultantes (completado, pendiente, rechazado) y destinatarios (sistemas, personas, ficheros).
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Excepciones habituales
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Documenta los casos edge conocidos y qué se espera en cada uno: timeout de API, fichero malformado, dato faltante, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Consejo práctico:</strong> limita la documentación a una página por proceso. Si necesitas más, probablemente el proceso es demasiado complejo para automatizarlo de golpe. Divide y vencerás.
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
                  Reglas y límites (lo que nunca debe romperse)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Ahora toca convertir el conocimiento tácito en normas explícitas. Las reglas de negocio que "todo el mundo sabe" deben quedar por escrito, con criterios objetivos y umbrales numéricos cuando sea posible. Este paso previene errores silenciosos y alinea expectativas.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Umbrales
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define importes máximos, cantidades permitidas, plazos de validez. Ejemplo: "facturas &gt; 3.000€ requieren doble validación".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Reglas de negocio
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Establece condiciones para seguir adelante, bloquear o escalar. Ejemplo: "si el cliente tiene impagos, bloquear nuevo pedido y notificar a finanzas".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Autorizaciones
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Especifica quién puede aprobar, rechazar o modificar en cada caso. Documenta la matriz de decisión.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Definición de "hecho"
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Determina cuándo consideras la tarea completada. Ejemplo: "pedido confirmado = registro en ERP + email al cliente + stock reservado".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Salida recomendada:</strong> una tabla simple con columnas: Regla | Descripción | Tipo (umbral/condición/autorización) | Acción si falla | Evidencia requerida.
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
                  Acciones y datos (lo que el agente puede hacer)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Descompón el proceso en acciones atómicas y específicas. Cada acción debe tener entradas claras, producir salidas verificables y ser independiente en cuanto a lógica. Este catálogo facilita las pruebas y permite reutilizar componentes en otros flujos.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Acciones concretas
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Ejemplos: "crear registro en CRM", "validar formato de fichero", "enviar email de aviso", "generar PDF de factura", "actualizar estado en base de datos".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Datos requeridos
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Para cada acción, lista los campos necesarios, formatos esperados y fuentes de origen. Ejemplo: "enviar email requiere: destinatario (email válido), asunto (texto), cuerpo (HTML/texto), adjuntos (opcional, PDF)".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Dependencias y orden
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Especifica qué debe ejecutarse antes/después y por qué. Ejemplo: "generar factura" debe ir después de "validar datos de cliente" pero antes de "enviar email".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Evidencias a guardar
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define qué traces quedará de cada acción: ID creado, hash del fichero procesado, timestamp de ejecución, destinatario del email enviado, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Objetivo:</strong> este catálogo sirve para alinear expectativas entre negocio y técnico, facilitar las pruebas unitarias y crear una base reutilizable para futuros procesos.
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
                  Verificación y trazabilidad (confianza operativa)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Este es el paso que diferencia la automatización profesional de un script frágil. Define cómo comprobarás que cada ejecución es correcta, qué evidencias se guardarán y cómo se detectarán y escalarán los fallos. Sin verificación, no tienes automatización; solo tienes esperanza.
              </p>
              
              <div className="ml-14 space-y-4 mb-8">
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Pre-checks (validaciones antes de actuar)
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Verifica que los datos de entrada cumplen requisitos antes de ejecutar la acción. Ejemplos: fichero existe, formato válido, campos obligatorios presentes, API disponible.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Post-checks (confirmar que ocurrió lo esperado)
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Después de cada acción crítica, verifica el resultado. Ejemplos: registro creado en BD con ID válido, email enviado con código 200, PDF generado con tamaño &gt; 0 bytes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Logs estándar
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Registra qué pasó, cuándo, con qué datos de entrada, qué resultado se obtuvo y una referencia única (ID de traza). Formato estructurado (JSON) facilita consultas posteriores.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Alertas y escalado
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define qué situaciones disparan un aviso (error crítico, umbral superado, timeout) y a quién se notifica (email, Slack, Teams). Incluye contexto útil en la alerta.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-[#3A7D7C] pl-6 py-4 bg-[#E1E5F0]/30 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  <strong>Regla de oro:</strong> sin verificación automática, no hay automatización confiable; solo hay esperanza de que funcione. Y la esperanza no es una estrategia operativa.
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
                  Métricas de éxito (30–60 días)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Define cómo medirás el éxito desde el día uno. Las métricas deben ser objetivas, medibles y alineadas con los objetivos de negocio. Evita métricas vanidosas; céntrate en impacto real operativo y de negocio.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Tiempo de ciclo por tarea
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Mide antes/después. Ejemplo: "procesar pedido pasó de 15 min a 2 min".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Tasa de error
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Incidencias por cada 100 tareas ejecutadas. Objetivo: reducir errores manuales.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Throughput (tareas/día)
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Capacidad de procesamiento. Ejemplo: "ahora podemos procesar 200 facturas/día vs. 50 antes".
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Porcentaje de ejecución autónoma
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Cuántas tareas se completan sin intervención humana. Objetivo: &gt;80% autónomo.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Retrabajos
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Casos que requieren reabrir o corregir. Menor retrabajo = mayor calidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5 ml-14">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Meta realista:</strong> busca mejoras visibles en 4–8 semanas en 1–2 procesos piloto. No intentes transformar toda la operación de golpe.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Stand-alone vs. orquestación: ¿por dónde empezar?
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              No hay un único camino correcto. La elección entre una implementación stand-alone (agente autónomo) u orquestada (flujo coordinado en plataforma) depende de tu contexto técnico actual, complejidad del proceso y tolerancia al riesgo. Escoge lo que minimice fricción y maximice aprendizaje rápido.
            </p>

            <div className="mb-8 border-l-4 border-[#2E7D6D] pl-6 py-4 bg-[#E1E5F0]/20">
              <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Stand-alone (agente autónomo)
              </h3>
              <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Ideal cuando el proceso puede operar con entradas y salidas simples: archivos CSV/JSON, tablas de base de datos, endpoints REST básicos. Esta aproximación permite despliegue rápido, bajo riesgo técnico y es perfecta para pilotos que necesitan probar valor antes de comprometerse con integraciones complejas.
              </p>
              <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>Cuándo elegirlo:</strong> procesos con pocas dependencias externas, datos bien estructurados, necesidad de resultados rápidos (2-4 semanas), equipo técnico limitado.
              </p>
            </div>

            <div className="mb-8 border-l-4 border-[#1B4965] pl-6 py-4 bg-[#E1E5F0]/20">
              <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Orquestación (flujo coordinado)
              </h3>
              <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Encaja cuando ya usas múltiples aplicaciones SaaS o sistemas internos que necesitan coordinarse: CRM → ERP → Email → Slack. Las plataformas de orquestación (n8n, Zapier, Make, etc.) aportan visibilidad del flujo completo, facilitan cambios sin tocar código y centralizan logs y métricas.
              </p>
              <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>Cuándo elegirlo:</strong> procesos que tocan 3+ sistemas, necesidad de visibilidad centralizada, cambios frecuentes en lógica de negocio, equipo no-técnico que necesita mantener flujos.
              </p>
            </div>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>Práctica recomendada:</strong> empieza con stand-alone si puedes, valida el valor, y evoluciona a orquestación cuando el piloto esté estable y necesites escalar a procesos más complejos. No optimices prematuramente.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Cómo elegir el proceso piloto
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Elegir bien el proceso piloto es crítico para el éxito. Un mal piloto puede desacreditar la iniciativa completa. Usa una scorecard simple (escala 1–5) evaluando estos cuatro factores, y escoge el proceso con mayor puntuación en "impacto × viabilidad × riesgo controlado × tiempo a valor":
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  1
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Impacto medible
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Cuantifica horas ahorradas por semana, errores evitados por mes, mejora en tiempo de respuesta al cliente, reducción de costes operativos. Ejemplo: "automatizar conciliación bancaria ahorra 12h/semana y reduce errores en un 80%".
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  2
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Viabilidad técnica y organizativa
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Valora si los datos están disponibles y accesibles, las reglas están claras y documentables, y los stakeholders clave están alineados y comprometidos. Sin viabilidad organizativa, el mejor diseño técnico fracasará.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  3
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Riesgo controlado
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Asegura que puedes revertir a manual fácilmente (fallback), el alcance está acotado (no "automatizar todo"), y el impacto de un fallo es tolerable durante el piloto. Los pilotos de alto riesgo en procesos críticos sin fallback son una mala idea.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2E7D6D] text-white flex items-center justify-center flex-shrink-0 mt-0.5" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                  4
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Tiempo a valor
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    ¿Puedes mostrar resultados tangibles en 30–60 días? Los proyectos de 6+ meses pierden momentum y apoyo. Busca "quick wins" que generen credibilidad y aprendizaje para escalar después.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>Resultado esperado:</strong> un proceso piloto con alto retorno, baja fricción política/técnica y capacidad de demostrar valor rápidamente. Este primer éxito abrirá las puertas para escalar.
              </p>
            </div>
          </section>

          {/* Section 5 - Plantillas */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Plantillas de trabajo
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Estas plantillas te ayudan a estructurar la documentación de forma consistente y accionable. Adáptalas a tu contexto, pero mantén la disciplina de completarlas. Recuerda: si no se consultan regularmente, no sirven.
            </p>

            <div className="space-y-8">
              {/* Template 1 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                    A
                  </div>
                  <div>
                    <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Inventario de tareas
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Usa esta tabla para listar todos los procesos candidatos y priorizarlos objetivamente.
                    </p>
                  </div>
                </div>
                <div className="bg-[#E1E5F0]/30 rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E1E5F0]">
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Columna</th>
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Qué capturar</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B7C]">
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Proceso</td>
                        <td className="py-2 px-2">Nombre descriptivo del proceso</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Frecuencia</td>
                        <td className="py-2 px-2">Diaria / Semanal / Mensual</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Volumen</td>
                        <td className="py-2 px-2">Tareas por periodo</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Tiempo actual</td>
                        <td className="py-2 px-2">Horas/semana consumidas</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Error típico</td>
                        <td className="py-2 px-2">Tipo de error más común</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Entrada</td>
                        <td className="py-2 px-2">Fuente y formato de datos</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Salida</td>
                        <td className="py-2 px-2">Resultado esperado</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Reglas clave</td>
                        <td className="py-2 px-2">2-3 reglas críticas</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Excepciones</td>
                        <td className="py-2 px-2">Casos edge conocidos</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Prioridad</td>
                        <td className="py-2 px-2">Alta / Media / Baja</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Template 2 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                    B
                  </div>
                  <div>
                    <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Tabla de reglas
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Documenta las reglas de negocio que nunca deben romperse.
                    </p>
                  </div>
                </div>
                <div className="bg-[#E1E5F0]/30 rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E1E5F0]">
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Columna</th>
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Qué capturar</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B7C]">
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Regla</td>
                        <td className="py-2 px-2">Nombre o ID de la regla</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Descripción</td>
                        <td className="py-2 px-2">Qué evalúa la regla</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Tipo</td>
                        <td className="py-2 px-2">Umbral / Condición / Autorización</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Validación</td>
                        <td className="py-2 px-2">Cómo se verifica</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Acción si falla</td>
                        <td className="py-2 px-2">Bloquear / Escalar / Alertar</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Evidencia</td>
                        <td className="py-2 px-2">Log o dato que se guarda</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Template 3 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                    C
                  </div>
                  <div>
                    <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Catálogo de acciones
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Descompón el proceso en acciones atómicas reutilizables.
                    </p>
                  </div>
                </div>
                <div className="bg-[#E1E5F0]/30 rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E1E5F0]">
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Columna</th>
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Qué capturar</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B7C]">
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Acción</td>
                        <td className="py-2 px-2">Nombre descriptivo (verbo + objeto)</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Datos mínimos</td>
                        <td className="py-2 px-2">Campos requeridos para ejecutar</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Resultado esperado</td>
                        <td className="py-2 px-2">Qué produce la acción</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Dependencias</td>
                        <td className="py-2 px-2">Qué debe ocurrir antes</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Evidencia</td>
                        <td className="py-2 px-2">Trace que queda de la ejecución</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Template 4 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                    D
                  </div>
                  <div>
                    <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Matriz de verificación
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Define cómo verificar cada paso del proceso automatizado.
                    </p>
                  </div>
                </div>
                <div className="bg-[#E1E5F0]/30 rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E1E5F0]">
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Columna</th>
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Qué capturar</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B7C]">
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Paso</td>
                        <td className="py-2 px-2">Nombre del paso en el flujo</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Pre-check</td>
                        <td className="py-2 px-2">Validación antes de ejecutar</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Acción</td>
                        <td className="py-2 px-2">Qué se ejecuta</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Post-check</td>
                        <td className="py-2 px-2">Verificación después de ejecutar</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Log/Evidencia</td>
                        <td className="py-2 px-2">Qué se registra</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Alerta si...</td>
                        <td className="py-2 px-2">Condición que dispara aviso</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Template 5 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                    E
                  </div>
                  <div>
                    <h3 className="text-[#1B4965] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      KPIs del piloto
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Establece métricas claras para medir el éxito del piloto.
                    </p>
                  </div>
                </div>
                <div className="bg-[#E1E5F0]/30 rounded p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#E1E5F0]">
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Columna</th>
                        <th className="text-left py-2 px-2 text-[#0D1B2A]" style={{ fontWeight: 600 }}>Qué capturar</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#5A6B7C]">
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Métrica</td>
                        <td className="py-2 px-2">Nombre del indicador</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Definición</td>
                        <td className="py-2 px-2">Cómo se calcula exactamente</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Línea base</td>
                        <td className="py-2 px-2">Valor actual (antes)</td>
                      </tr>
                      <tr className="border-b border-[#E1E5F0]/50">
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Objetivo 30-60 días</td>
                        <td className="py-2 px-2">Meta realista a corto plazo</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2" style={{ fontWeight: 600 }}>Fuente</td>
                        <td className="py-2 px-2">De dónde salen los datos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                <strong>Recordatorio:</strong> estas plantillas son herramientas de trabajo, no burocracia. Úsalas mientras aporten valor y ajústalas a tu realidad. Si nadie las consulta después de crearlas, elimina columnas o simplifica.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Riesgos típicos (y cómo evitarlos)
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Estos son los errores más comunes que vemos en proyectos de automatización, junto con soluciones prácticas probadas en decenas de implementaciones:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Alcance nebuloso
                  </h3>
                  <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    El proyecto crece sin control, añadiendo "solo una cosa más" cada semana hasta volverse inmanejable.
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong className="text-[#0D1B2A]">Solución:</strong> Define 1 proceso específico, versión 1 con alcance acotado, hitos quincenales con entregables concretos. Aprende a decir "no, eso va en v2".
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Reglas en la cabeza
                  </h3>
                  <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    El conocimiento crítico vive solo en la memoria del equipo, sin documentación formal.
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong className="text-[#0D1B2A]">Solución:</strong> Sesiones de 2h con el equipo operativo para extraer y formalizar lo mínimo viable. Graba las sesiones si es necesario.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Datos sucios
                  </h3>
                  <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Los datos de entrada tienen formatos inconsistentes, valores faltantes o errores que rompen la automatización.
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong className="text-[#0D1B2A]">Solución:</strong> Implementa pre-checks estrictos y listas de validación. Rechaza entradas malas con mensajes claros en lugar de intentar "arreglarlas".
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Sin métricas desde el inicio
                  </h3>
                  <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    Se construye sin definir cómo se medirá el éxito, haciendo imposible demostrar valor.
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong className="text-[#0D1B2A]">Solución:</strong> Define 3-5 KPIs críticos antes de escribir una línea de código. Mide la línea base hoy mismo.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[#C0392B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                    Dependencias múltiples desde día 1
                  </h3>
                  <p className="text-[#5A6B7C] mb-2" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    El piloto requiere integrar 5+ sistemas desde el principio, multiplicando riesgo y complejidad.
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong className="text-[#0D1B2A]">Solución:</strong> Empieza stand-alone o con 1-2 conexiones de bajo riesgo. Prueba valor primero, integra después.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Qué puedes esperar en 4–8 semanas
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Si sigues este método con disciplina, estos son los resultados realistas que deberías observar en tu primer proceso piloto dentro de 4–8 semanas:
            </p>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A] mb-1" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    Reducción significativa en tiempos de ciclo
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    Tareas que tomaban horas ahora se completan en minutos. Ejemplo típico: procesar una factura pasa de 15 min a 2 min.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A] mb-1" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    Menos errores y retrabajos
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    Las validaciones automáticas capturan errores que antes pasaban desapercibidos hasta causar problemas mayores.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A] mb-1" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    Trazabilidad completa sin esfuerzo
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    Logs automáticos de quién/qué/cuándo/resultado en cada ejecución. Auditorías que antes tomaban días ahora son consultas de 5 minutos.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0D1B2A] mb-1" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                    Base reusable para escalar
                  </p>
                  <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    El método, plantillas y componentes desarrollados se pueden aplicar a otros procesos, acelerando futuras automatizaciones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 - DIY vs Contratar */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              ¿Hacerlo internamente o contratar especialistas?
            </h2>
            
            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Esta es probablemente la pregunta más importante después de leer este artículo. La respuesta honesta es: depende de tu contexto, recursos y objetivos. Aquí tienes un marco para decidir con criterio.
            </p>

            {/* Tabla comparativa */}
            <div className="mb-10">
              <h3 className="text-[#1B4965] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Análisis de escenarios
              </h3>
              
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#1B4965] text-white">
                    <tr>
                      <th className="py-4 px-6 text-left" style={{ fontWeight: 600, fontSize: '1rem' }}>Factor</th>
                      <th className="py-4 px-6 text-left" style={{ fontWeight: 600, fontSize: '1rem' }}>Hacerlo internamente</th>
                      <th className="py-4 px-6 text-left" style={{ fontWeight: 600, fontSize: '1rem' }}>Contratar Taskbot.pro</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5A6B7C]">
                    <tr className="border-b border-[#E1E5F0]">
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Tiempo hasta resultados</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        3–6 meses (curva de aprendizaje + implementación + ajustes)
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        4–8 semanas (experiencia probada + metodología establecida)
                      </td>
                    </tr>
                    <tr className="border-b border-[#E1E5F0]">
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Inversión inicial</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Menor inversión directa, pero alto coste de oportunidad
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Inversión clara y predecible con garantía de resultados
                      </td>
                    </tr>
                    <tr className="border-b border-[#E1E5F0]">
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Expertise requerido</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Análisis de procesos + desarrollo técnico + pruebas + mantenimiento
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Solo conocimiento del proceso de negocio (nosotros aportamos el resto)
                      </td>
                    </tr>
                    <tr className="border-b border-[#E1E5F0]">
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Riesgo de fracaso</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Alto si es vuestro primer proyecto de automatización
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Bajo (metodología probada + casos de éxito previos)
                      </td>
                    </tr>
                    <tr className="border-b border-[#E1E5F0]">
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Control total</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Total sobre código y arquitectura
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Total sobre lógica de negocio + documentación completa entregada
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6" style={{ fontWeight: 600 }}>Escalabilidad</td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Depende de la calidad de implementación inicial
                      </td>
                      <td className="py-4 px-6" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        Diseñada desde día 1 para crecer con tu operación
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cuándo hacerlo internamente */}
            <div className="mb-10">
              <h3 className="text-[#1B4965] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Tiene sentido hacerlo internamente si...
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Tienes equipo técnico con tiempo disponible
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Personal con experiencia en Python/JavaScript, APIs, y tiempo dedicado (no "cuando puedan") para los próximos 3-6 meses.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      El proyecto es de aprendizaje estratégico
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Quieres construir capacidad interna y estás dispuesto a invertir tiempo en curva de aprendizaje, incluso si el primer piloto tarda más.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      El proceso es muy específico o con datos ultra-sensibles
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Restricciones de confidencialidad extremas que impiden colaborar externamente, incluso con NDAs y controles estrictos.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      No hay presión de tiempo
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Puedes permitirte 6+ meses para ver resultados y aprender en el camino sin presión del negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cuándo contratar */}
            <div className="mb-10">
              <h3 className="text-[#1B4965] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Tiene sentido contratar Taskbot.pro si...
              </h3>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Necesitas resultados rápidos y predecibles
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      El negocio necesita mejoras operativas en 4-8 semanas, no en 6+ meses. Hay presión para demostrar ROI rápido.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Tu equipo está al límite de capacidad
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      No tienes personal técnico disponible o están saturados con proyectos críticos. Añadir esto a su carga es irreal.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Quieres minimizar riesgo de fracaso
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Es tu primer proyecto de automatización con IA/agentes y no puedes permitirte que fracase. Necesitas experiencia probada.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Buscas metodología transferible
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      No solo quieres el primer proceso automatizado, sino también la documentación, plantillas y conocimiento para replicarlo después internamente.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Prefieres inversión predecible vs. coste oculto
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Valoras saber exactamente qué vas a pagar, cuánto tardará y qué obtendrás, en lugar de "veremos cuánto nos cuesta hacerlo nosotros".
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inversión real */}
            <div className="bg-[#E1E5F0]/30 rounded-xl p-8 mb-8">
              <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                La inversión real del DIY (lo que no se ve)
              </h3>
              
              <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Hacer un proyecto de automatización internamente implica mucho más que "escribir código". Aquí está el desglose realista de esfuerzo:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B4965] text-white px-3 py-1 rounded" style={{ fontSize: '0.875rem', fontWeight: 600, minWidth: '80px', textAlign: 'center' }}>
                    40-60h
                  </div>
                  <p className="text-[#0D1B2A] flex-1" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong>Análisis y documentación</strong> del proceso actual, reglas, excepciones, stakeholders
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B4965] text-white px-3 py-1 rounded" style={{ fontSize: '0.875rem', fontWeight: 600, minWidth: '80px', textAlign: 'center' }}>
                    60-100h
                  </div>
                  <p className="text-[#0D1B2A] flex-1" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong>Desarrollo técnico</strong> (agente, integraciones, validaciones, logs)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B4965] text-white px-3 py-1 rounded" style={{ fontSize: '0.875rem', fontWeight: 600, minWidth: '80px', textAlign: 'center' }}>
                    30-50h
                  </div>
                  <p className="text-[#0D1B2A] flex-1" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong>Pruebas y ajustes</strong> (casos edge, manejo de errores, refinamiento)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B4965] text-white px-3 py-1 rounded" style={{ fontSize: '0.875rem', fontWeight: 600, minWidth: '80px', textAlign: 'center' }}>
                    20-40h
                  </div>
                  <p className="text-[#0D1B2A] flex-1" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong>Despliegue y monitorización</strong> (infraestructura, alertas, dashboards)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#1B4965] text-white px-3 py-1 rounded" style={{ fontSize: '0.875rem', fontWeight: 600, minWidth: '80px', textAlign: 'center' }}>
                    10-20h/mes
                  </div>
                  <p className="text-[#0D1B2A] flex-1" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    <strong>Mantenimiento continuo</strong> (bugs, cambios en APIs, nuevos requisitos)
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-[#1B4965]">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Total primer proceso: 150–250 horas (4–6 meses a tiempo parcial)
                </p>
                <p className="text-[#5A6B7C] mt-2" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Esto es para personas con experiencia previa. Si es vuestra primera automatización con agentes, añadid un 40-60% más para curva de aprendizaje.
                </p>
              </div>
            </div>

            {/* Recomendación final */}
            <div className="bg-gradient-to-br from-[#1B4965]/10 to-[#3A7D7C]/10 border-l-4 border-[#3A7D7C] rounded-lg p-6">
              <h3 className="text-[#1B4965] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Nuestra recomendación honesta
              </h3>
              <p className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Si este es vuestro <strong>primer proceso</strong>, tenéis <strong>presión por resultados</strong> y <strong>equipo limitado</strong>, contratar tiene más sentido. Conseguiréis:
              </p>
              <ul className="space-y-2 mb-4" style={{ paddingLeft: '1.5rem' }}>
                <li className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  ✓ Resultados en 4-8 semanas en lugar de 4-6 meses
                </li>
                <li className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  ✓ Riesgo controlado con metodología probada
                </li>
                <li className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  ✓ Documentación y plantillas para replicar después
                </li>
                <li className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  ✓ Base sólida para decidir si la siguiente fase la hacéis internamente
                </li>
              </ul>
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Una vez tengáis el primer piloto funcionando y el equipo formado, <strong>podéis evaluar hacer los siguientes procesos internamente</strong>. No es todo o nada: muchos clientes empiezan con nosotros y luego hibridan.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-xl p-10 text-white">
              <h2 className="mb-4" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                Conclusión
              </h2>
              <p className="mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                El salto no va de "poner IA" ni de comprar la herramienta más moderna. Va de formalizar cómo trabajas hoy, establecer controles y mediciones, y ejecutarlo de forma autónoma y verificable.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                Si eliges bien el piloto, documentes las reglas desde el inicio y mides desde el día uno, tendrás una referencia clara y defendible para decidir qué escalar y qué no—sin rehacer tu infraestructura tecnológica, sin promesas vacías y con resultados tangibles que se pueden enseñar al equipo directivo.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border-t border-b border-[#E1E5F0]">
            <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              ¿Listo para convertir tu know-how en ejecución autónoma?
            </h3>
            <p className="text-[#5A6B7C] mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
              En Taskbot.pro ayudamos a empresas medianas y grandes a identificar procesos piloto de alto impacto, diseñar agentes de IA específicos y desplegarlos en 4–8 semanas con resultados medibles.
            </p>
            <Button
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6"
              style={{ fontSize: '1.125rem', fontWeight: 600 }}
            >
              Contactar con Taskbot.pro
            </Button>
          </section>

          {/* Back to Blog */}
          <div className="text-center pt-12">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center text-[#1B4965] hover:text-[#3A7D7C] transition-colors"
              style={{ fontWeight: 600 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todos los artículos
            </button>
          </div>

        </div>
      </article>
    </div>
  );
}