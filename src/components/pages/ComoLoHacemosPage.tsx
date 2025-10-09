import { Search, Lightbulb, Cog, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface ComoLoHacemosPageProps {
  onNavigate: (page: string) => void;
}

export function ComoLoHacemosPage({ onNavigate }: ComoLoHacemosPageProps) {
  const methodology = [
    {
      step: '01',
      icon: <Search className="w-10 h-10" />,
      title: 'Análisis y diagnóstico',
      description: 'Entendemos el dominio, detectamos tareas repetitivas y fijamos objetivos medibles.',
      details: [
        'Mapa de procesos (entradas/salidas)',
        'Reglas, límites y excepciones',
        'Priorización y caso piloto',
        'KPIs base y metas',
      ],
    },
    {
      step: '02',
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Diseño del agente',
      description: 'Modelamos el conocimiento y definimos cómo debe operar el agente.',
      details: [
        'Modelo ligero del dominio',
        'Catálogo de decisiones/acciones permitidas',
        'Validaciones y umbrales de control',
        'Plan de evidencias y trazabilidad',
      ],
    },
    {
      step: '03',
      icon: <Cog className="w-10 h-10" />,
      title: 'Configuración y pruebas',
      description: 'Configuramos el agente y orquestamos flujos si procede (también puede ir stand-alone).',
      details: [
        'Habilitación de acciones seguras',
        'Orquestación de flujos (p. ej., n8n) (opcional)',
        'Pruebas pre/post-ejecución en sandbox',
        'Registros y evidencias por ejecución',
      ],
    },
    {
      step: '04',
      icon: <Rocket className="w-10 h-10" />,
      title: 'Lanzamiento y mejora continua',
      description: 'Ponemos en marcha el piloto y evolucionamos con datos reales.',
      details: [
        'Despliegue controlado del piloto',
        'Panel de KPIs y alertas',
        'Gobierno de cambios y versionado',
        'Ampliación de casos y ajuste de reglas',
      ],
    },
  ];

  const advantages = [
    'Documentación de todos los flujos y reglas',
    'Entregas semanales que puedes probar',
    'Acceso directo al equipo técnico',
    'Código y configuración que queda en tu empresa',
    'Sin vendor lock-in: usas herramientas estándar',
    'Formación incluida para que puedas evolucionar los agentes',
  ];

  const technologies = [
    'OpenAI / Anthropic (LLMs)',
    'n8n / Zapier (orquestación)',
    'Python / Node.js',
    'APIs REST estándar',
    'Tu stack actual (ERP, CRM, Excel)',
    'Control de versiones (Git)',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0D1B2A] via-[#1B4965] to-[#3A7D7C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              Cómo lo hacemos
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              Un proceso estructurado en cuatro fases que combina análisis de negocio, diseño técnico y despliegue controlado para automatizar tus procesos con garantías.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Nuestra metodología
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Cada proyecto sigue el mismo proceso, adaptado a tu caso concreto
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-shadow border-l-4 border-[#3A7D7C]"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <span 
                        className="text-[#E1E5F0] bg-[#1B4965] rounded-full w-16 h-16 flex items-center justify-center"
                        style={{ fontSize: '1.5rem', fontWeight: 700 }}
                      >
                        {item.step}
                      </span>
                      <div className="w-16 h-16 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ fontSize: '1.125rem' }}>
                      {item.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#2E7D6D] flex-shrink-0" />
                          <span className="text-[#5A6B7C]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Advantages */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Advantages */}
            <div>
              <h2 className="text-[#0D1B2A] mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
                Qué recibes al trabajar con nosotros
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-1" />
                    <p className="text-[#0D1B2A]" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-[#0D1B2A] mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
                Con qué trabajamos
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-4 bg-white text-center hover:bg-[#3A7D7C] hover:text-white transition-colors">
                    <p style={{ fontWeight: 600 }}>{tech}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-6 text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Usamos herramientas estándar del mercado. Nada propietario, nada que te ate a nosotros. Si mañana quieres continuar solo o con otro partner, puedes hacerlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Tiempos reales de implementación
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Estos son los plazos habituales basados en proyectos completados
            </p>
          </div>

          <div className="bg-white border-2 border-[#E1E5F0] rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>Análisis y diagnóstico</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>1-2 semanas</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/4"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>Diseño del agente</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>1-2 semanas</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/4"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>Configuración y pruebas</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>4-8 semanas</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-1/2"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#0D1B2A]" style={{ fontWeight: 600 }}>Lanzamiento y mejora continua</span>
                <span className="text-[#3A7D7C]" style={{ fontWeight: 600 }}>Continuo</span>
              </div>
              <div className="h-2 bg-[#E1E5F0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3A7D7C] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B4965] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            ¿Tienes un proceso que podría automatizarse?
          </h2>
          <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem' }}>
            Analicemos juntos si es candidato para agentes de IA (sin compromiso)
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Reserva tu análisis gratuito <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('sobre-taskbot')}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B4965] px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Conoce al equipo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}