import { Compass, ShieldCheck, Plug, Bot, CheckCircle, Activity } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface QueHacemosPageProps {
  onNavigate?: (page: string) => void;
}

export function QueHacemosPage({ onNavigate }: QueHacemosPageProps) {
  const services = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: 'Diagnóstico & Roadmap de Automatización',
      description: 'Auditamos procesos y priorizamos oportunidades de mayor impacto. Estimamos ROI y definimos un piloto viable con alcance, hitos y riesgos controlados.',
      tags: ['ROI', 'Auditoría de procesos', 'Priorización', 'Piloto', 'Roadmap', 'Business case'],
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Modelado de Dominio & Guardarraíles',
      description: 'Convertimos tu lógica de negocio en ontologías ligeras y reglas operativas. Establecemos límites y validaciones para operar con seguridad y cumplimiento.',
      tags: ['Ontologías', 'Reglas de negocio', 'Validaciones', 'Cumplimiento', 'Guardarraíles', 'Governance'],
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: 'API de Acciones & Gateway MCP',
      description: 'Abstraemos operaciones en un catálogo de acciones seguro y auditable. Exposición vía API/Gateway MCP para interacción estandarizada y trazabilidad total.',
      tags: ['API de acciones', 'MCP', 'Conectores', 'Auditoría', 'Estandarización', 'Trazabilidad'],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Agentes Inteligentes + Flujos Ejecutables',
      description: 'Agentes especializados en tu dominio que generan/ejecutan flujos dinámicos (p. ej., n8n), con orquestación y manejo proactivo de excepciones.',
      tags: ['Agentes de IA', 'Orquestación', 'n8n', 'Flujos dinámicos', 'Excepciones', 'Automatización'],
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'QA, Trazabilidad & Verificación',
      description: 'Plan de pruebas estructurado, validaciones pre/post-ejecución y evidencias con logs para auditoría end-to-end y control de regresiones.',
      tags: ['QA', 'Pruebas automatizadas', 'Validaciones', 'Evidencias', 'Logs', 'Auditoría'],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Operación Gestionada & Mejora Continua',
      description: 'Monitorizamos KPIs, afinamos reglas y ampliamos casos de uso. Gobierno de cambios y soporte con SLA para evolución controlada y robusta.',
      tags: ['KPIs', 'Mejora continua', 'SLA', 'Cambio controlado', 'Observabilidad', 'Reliability'],
    },
  ];

  const industries = [
    'Finanzas y contabilidad',
    'Logística e intralogística',
    'Retail',
    'Comercio electrónico',
    'Editorial',
    'Educación',
    'Restauración',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              Qué hacemos
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              En Taskbot.pro ofrecemos hiperautomatización especializada para empresas medianas y grandes con procesos definidos. Creamos agentes de IA a medida que comprenden la lógica, el contexto y las particularidades de tu dominio.
            </p>
            <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Convertimos tu conocimiento experto en un sistema operativo: analizamos, capturamos y formalizamos reglas, límites y excepciones para ejecutar con guardarraíles, validaciones y trazabilidad. Resultado: ejecución autónoma, consistente y auditable, menos errores y más foco del equipo en estrategia, creatividad y cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Soluciones completas para la transformación digital de tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-[#3A7D7C]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-[#5A6B7C] mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-[#E1E5F0] text-[#1B4965]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Nlc3MlMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTkyNDEwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Procesos empresariales"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                Ejecución con Control
              </h2>
              <p className="mt-6 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                La automatización solo aporta valor si es segura, predecible y auditable. Diseñamos la operación con guardarraíles explícitos, validaciones y evidencias para cada ejecución.
              </p>
              <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                Tu equipo mantiene el control: reglas versionadas, trazabilidad end-to-end y métricas claras para decidir y mejorar sin perder estabilidad.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">Guardarraíles operativos:</strong> límites y validaciones por regla.</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">Verificación pre/post:</strong> comprobaciones automáticas en cada paso.</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">Trazabilidad & evidencias:</strong> qué, cuándo, por quién/agente y resultado.</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">Gobierno de cambios:</strong> versionado y aprobaciones antes de desplegar.</span>
                </li>
                <li className="flex items-start text-[#5A6B7C]">
                  <span className="text-[#3A7D7C] mr-3">•</span>
                  <span><strong className="text-[#0D1B2A]">Observabilidad:</strong> KPIs, alertas y panel de salud.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Industrias que servimos
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Experiencia en múltiples sectores
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-[#E1E5F0] rounded-lg p-6 text-center hover:border-[#3A7D7C] hover:shadow-lg transition-all"
              >
                <p className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}