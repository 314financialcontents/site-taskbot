import { Calendar, Clock, ArrowLeft, CheckCircle, ArrowRight, Shield, AlertTriangle, Lock, Eye, Layers, Zap } from 'lucide-react';
import { Button } from '../ui/button';

interface BlogPostGuardarrailesIAProps {
  onNavigate: (page: string) => void;
}

export function BlogPostGuardarrailesIA({ onNavigate }: BlogPostGuardarrailesIAProps) {
  const post = {
    title: 'Guardarraíles de IA: guía práctica para que tus agentes trabajen seguros (y sin sustos)',
    date: '9 Oct 2025',
    readTime: '10 min',
    category: 'IA',
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
              Los guardarraíles (guardrails) son mecanismos que guían —no limitan— el comportamiento de modelos y agentes de IA para operar con seguridad, cumplir políticas y proteger tu marca. Funcionan mejor con un enfoque multicapa: entrada → orquestación → herramientas → salida → supervisión → observabilidad.
            </p>
          </div>

          {/* Section: Por qué ahora */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Por qué ahora
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              La IA ya no solo "responde", también <strong>actúa</strong>: llama APIs, lee documentos, ejecuta código o integra datos externos. Eso abre la puerta a riesgos como prompt injection, exposición de PII, salidas tóxicas o decisiones fuera de política.
            </p>

            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              La buena noticia: hoy existen patrones y componentes maduros para contener estos riesgos con mínima fricción de integración.
            </p>

            <div className="bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/50 border-l-4 border-[#3A7D7C] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>La clave:</strong> Los agentes que actúan en el mundo real necesitan límites claros, igual que cualquier miembro del equipo. Sin guardarraíles, estás delegando responsabilidad sin supervisión.
              </p>
            </div>
          </section>

          {/* Section: Qué son los guardarraíles */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Qué son (de verdad) los guardarraíles
            </h2>
            
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Piensa en una capa de control alrededor del modelo o del agente. No intentan "hacerlo más tonto", sino <strong>encarrilar su conducta</strong>: limitar ámbitos de actuación, bloquear entradas/salidas peligrosas y registrar cada paso para poder auditar y mejorar.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  No son restricciones ciegas
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Los guardarraíles permiten que el agente opere con autonomía dentro de límites seguros, sin necesidad de microgestión constante.
                </p>
              </div>

              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6">
                <div className="w-12 h-12 bg-[#1B4965] rounded-lg flex items-center justify-center text-white mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Trazabilidad completa
                </h3>
                <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Cada decisión, cada acción, cada bloqueo queda registrado para auditoría, mejora continua y defensa ante incidentes.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Cómo funcionan en producción */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Cómo funcionan en producción (en capas)
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Un sistema robusto de guardarraíles opera en <strong>múltiples capas</strong>, no en un solo punto de control. Cada capa tiene un propósito específico y complementa a las demás.
            </p>

            {/* Capa 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  1
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Validación de entradas
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Detecta intenciones prohibidas, PII o intentos de jailbreak <strong>antes</strong> de llegar al modelo. La primera línea de defensa debe ser robusta y rápida.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Listas de permitidos/denegados
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define qué temas, palabras clave o patrones están explícitamente permitidos o bloqueados. Úsalas para casos donde la política es binaria y clara.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Clasificadores de seguridad
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Modelos ligeros entrenados para detectar contenido tóxico, prompts maliciosos o intentos de extracción de información sensible.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Normalización del prompt
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Sanitiza entradas para eliminar caracteres especiales, instrucciones ocultas o codificación no estándar que podría confundir o engañar al modelo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capa 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  2
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Orquestación con mínimo privilegio
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                El agente opera con permisos mínimos y herramientas en allowlist. Cada llamada va acotada (scopes, límites de tiempo/recursos) y con confirmaciones para acciones sensibles.
              </p>
              
              <div className="ml-14 bg-[#E1E5F0]/50 border border-[#E1E5F0] rounded-lg p-5">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Ejemplo práctico:</strong> Un agente de atención al cliente puede consultar pedidos pero no puede eliminarlos, modificar precios ni acceder a datos financieros sensibles. Solo tiene acceso a APIs de lectura en el dominio permitido.
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
                  Restricciones de herramienta
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                "Firewall" de herramientas: qué puede invocar, con qué parámetros y desde qué contexto. Si la fuente externa puede estar "envenenada", se sandboxea y valida.
              </p>
              
              <div className="ml-14 space-y-4 mb-6">
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Define qué herramientas están disponibles en cada contexto (solo lectura, solo escritura, mixto)
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Establece límites en parámetros (rangos de valores, formatos aceptados, límites de tiempo)
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Valida respuestas de fuentes externas antes de pasarlas al agente para evitar inyecciones indirectas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capa 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  4
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Filtrado de salidas
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Moderación, detección de PII y verificación básica <strong>después</strong> del modelo. Clasificadores dedicados a seguridad en entrada y salida activan mitigaciones automáticas.
              </p>
              
              <div className="ml-14 space-y-4">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Detección de PII y datos sensibles
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Escanea salidas en busca de números de tarjeta, emails, teléfonos, documentos de identidad. Si detecta algo, redacta o bloquea la respuesta.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                      Moderación de contenido
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      Verifica tono, lenguaje inapropiado, información incorrecta o fuera de políticas de marca antes de enviar al usuario.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capa 5 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1B4965] text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                  5
                </div>
                <h3 className="text-[#1B4965] mt-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Supervisión humana (HITL)
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Umbrales de riesgo: si una respuesta supera cierto nivel de sensibilidad o confianza baja, va a revisión. Reduce falsos positivos/negativos en escenarios críticos (legal, salud, finanzas…).
              </p>
              
              <div className="ml-14 bg-gradient-to-r from-[#E1E5F0] to-[#E1E5F0]/30 border-l-4 border-[#1B4965] pl-6 py-5 rounded-r-lg">
                <p className="text-[#0D1B2A]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  <strong>Cuándo activar HITL:</strong> Transacciones financieras, decisiones legales, casos médicos, cambios en datos maestros, solicitudes de eliminación de datos o cualquier acción irreversible de alto impacto.
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
                  Observabilidad y auditoría
                </h3>
              </div>
              
              <p className="text-[#5A6B7C] mb-6 ml-14" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Registra inputs/outputs, herramientas usadas, decisiones del "portero" y versiones de políticas. Sin trazabilidad no hay mejora continua ni defensa ante incidentes.
              </p>
              
              <div className="ml-14 bg-white border-2 border-[#3A7D7C] rounded-lg p-6">
                <p className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.0625rem', fontWeight: 600 }}>
                  Qué registrar siempre:
                </p>
                <ul className="space-y-2 text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>ID único de traza por cada ejecución</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Entrada del usuario (sanitizada si contiene PII)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Salida generada por el modelo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Herramientas invocadas y parámetros usados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Decisiones del guardarraíl (allow/block/review)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Versión de políticas aplicadas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#3A7D7C]">•</span>
                    <span>Timestamp y duración de ejecución</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Patrones que funcionan */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Patrones que funcionan
            </h2>

            <p className="text-[#5A6B7C] mb-10" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Estos patrones arquitectónicos han demostrado funcionar en producción para equipos que despliegan agentes de IA a escala.
            </p>

            <div className="space-y-6">
              {/* Patrón 1 */}
              <div className="bg-gradient-to-r from-[#E1E5F0] to-white border-l-4 border-[#2E7D6D] rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2E7D6D] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Portero ("policy agent")
                    </h3>
                    <p className="text-[#5A6B7C] mb-3" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Componente que evalúa cada petición contra políticas no negociables y decide allow/block/review.
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      <strong>Cuándo usarlo:</strong> Cuando tienes políticas claras y binarias (nunca acceder a X, siempre requerir aprobación para Y). El portero actúa como primera línea de defensa y puede evolucionar sus políticas sin reentrenar modelos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Patrón 2 */}
              <div className="bg-gradient-to-r from-[#E1E5F0] to-white border-l-4 border-[#1B4965] rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4965] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Clasificador de seguridad I/O
                    </h3>
                    <p className="text-[#5A6B7C] mb-3" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Modelo ligero que etiqueta riesgos en entrada y salida y dispara mitigaciones automáticas.
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      <strong>Cuándo usarlo:</strong> Para detectar contenido tóxico, PII, jailbreaks o salidas fuera de política en tiempo real con latencia mínima (&lt;100ms). Ideal para sistemas de atención al cliente o asistentes internos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Patrón 3 */}
              <div className="bg-gradient-to-r from-[#E1E5F0] to-white border-l-4 border-[#3A7D7C] rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Flujos declarativos de conversación/acción
                    </h3>
                    <p className="text-[#5A6B7C] mb-3" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                      Defines temas permitidos, transiciones y respuestas por defecto si algo no cumple.
                    </p>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      <strong>Cuándo usarlo:</strong> Cuando necesitas garantizar que la conversación o flujo de trabajo siga caminos predefinidos. Reduce el riesgo de que el agente derive a temas no autorizados o tome atajos peligrosos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Casos de uso típicos */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Casos de uso típicos
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Caso 1 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Atención al cliente
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Evita consejos dañinos, fuga de datos y asegura tono/estilo de marca.
                </p>
                <div className="space-y-2 text-[#5A6B7C]" style={{ fontSize: '0.9375rem' }}>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Filtrado de PII en respuestas</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Tono consistente con guías de marca</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Bloqueo de temas prohibidos</span>
                  </div>
                </div>
              </div>

              {/* Caso 2 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Asistentes internos
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Protege documentación sensible y limita operaciones (solo lectura por defecto).
                </p>
                <div className="space-y-2 text-[#5A6B7C]" style={{ fontSize: '0.9375rem' }}>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Acceso basado en roles</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Sanitización de documentos sensibles</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Registro de accesos y consultas</span>
                  </div>
                </div>
              </div>

              {/* Caso 3 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Agentes con herramientas
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Confirma operaciones de alto impacto (pagos, borrados, cambios de inventario).
                </p>
                <div className="space-y-2 text-[#5A6B7C]" style={{ fontSize: '0.9375rem' }}>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Confirmación humana para acciones críticas</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Límites en rangos de valores (importes, cantidades)</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Auditoría de todas las operaciones</span>
                  </div>
                </div>
              </div>

              {/* Caso 4 */}
              <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 hover:border-[#3A7D7C] transition-colors">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  RAG (Retrieval Augmented Generation)
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  Valida y sanea fuentes externas para frenar inyecciones indirectas.
                </p>
                <div className="space-y-2 text-[#5A6B7C]" style={{ fontSize: '0.9375rem' }}>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Validación de documentos recuperados</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Detección de prompt injection indirecta</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <span>Sandboxing de contenido externo</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Checklist express */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Checklist express para tu equipo
            </h2>

            <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Antes de desplegar tu agente de IA en producción, asegúrate de que cumple estos requisitos mínimos de seguridad y control.
            </p>

            <div className="bg-white border-2 border-[#1B4965] rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Validación de entrada:</strong> ¿Tienes clasificadores o reglas que detecten prompts maliciosos, PII o contenido prohibido antes de llegar al modelo?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Mínimo privilegio:</strong> ¿El agente solo tiene acceso a las herramientas y datos estrictamente necesarios para su función?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Filtrado de salida:</strong> ¿Validas las respuestas del modelo para detectar PII, contenido tóxico o información fuera de política antes de enviarlas al usuario?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Confirmación humana:</strong> ¿Las acciones de alto impacto (financieras, eliminaciones, cambios irreversibles) requieren aprobación humana?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Trazabilidad:</strong> ¿Registras inputs, outputs, herramientas usadas y decisiones de control con IDs únicos para auditoría?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Políticas versionadas:</strong> ¿Tus guardarraíles y políticas están documentadas, versionadas y pueden evolucionar sin reescribir código?
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 border-2 border-[#3A7D7C] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-[#3A7D7C] rounded-sm"></div>
                  </div>
                  <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                    <strong>Plan de incidentes:</strong> ¿Sabes qué hacer si detectas un comportamiento anómalo, una fuga de datos o un jailbreak exitoso?
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#1B4965]/10 to-transparent border-l-4 border-[#1B4965] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                <strong>Regla de oro:</strong> Si no puedes explicar qué haría tu agente en un caso edge, o no puedes auditar lo que hizo ayer, todavía no estás listo para producción.
              </p>
            </div>
          </section>

          {/* Section: Conclusión */}
          <section className="mb-16">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 }}>
              Conclusión: autonomía con control
            </h2>

            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Los guardarraíles no frenan la autonomía de tus agentes; la hacen sostenible. Permiten que tu equipo delegue responsabilidad en sistemas de IA con confianza, sabiendo que hay capas de control que previenen errores costosos, protegen datos sensibles y garantizan que cada acción es auditable.
            </p>

            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Empieza con un enfoque multicapa: validación de entrada, orquestación con mínimo privilegio, filtrado de salida, supervisión humana en puntos críticos y observabilidad completa. Implementa los patrones que funcionan en producción y adapta según tu caso de uso.
            </p>

            <div className="bg-gradient-to-r from-[#2E7D6D]/10 to-transparent border-l-4 border-[#2E7D6D] pl-6 py-5 rounded-r-lg">
              <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 600 }}>
                La IA que actúa sin guardarraíles es esperanza, no automatización. Y en operaciones empresariales, la esperanza no es una estrategia.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            ¿Necesitas implementar guardarraíles en tu agente de IA?
          </h2>
          <p className="text-[#5A6B7C] mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            En Taskbot.pro diseñamos agentes con capas de control desde el primer día. Trazabilidad, políticas claras y operación segura sin sacrificar autonomía.
          </p>
          <Button 
            onClick={() => onNavigate('contacto')}
            className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
            style={{ fontSize: '1.125rem' }}
          >
            Hablemos de tu proyecto <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
