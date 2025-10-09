import { ArrowRight, Clock, ShieldAlert, Lightbulb, Target, AlertCircle, Gauge, BookOpen, Zap, Search, Settings, PlayCircle, TrendingUp, CheckCircle, FileText, Users, Database, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ahorra tiempo',
      description: 'Libera a tu equipo de tareas tediosas del día a día.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Evita errores',
      description: 'Cada proceso sigue validaciones y límites predefinidos.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Capitaliza tu conocimiento',
      description: 'Tus procesos quedan documentados y mejorados continuamente.',
    },
  ];

  const stats = [
    {
      value: '85%',
      label: 'Menos tiempo en tareas repetitivas',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      value: '95%',
      label: 'Precisión en validaciones automáticas',
      icon: <Target className="w-6 h-6" />,
    },
    {
      value: '4-8',
      label: 'Semanas hasta resultados tangibles',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      value: '40h/mes',
      label: 'Ahorro promedio por persona',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const useCases = [
    {
      title: 'Revisión y validación de facturas',
      before: '2h/día revisando facturas manualmente',
      after: 'Validación automática con alertas solo de excepciones',
      saving: '8-10h/semana por persona',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: 'Onboarding de clientes',
      before: '40 minutos por cliente (datos, validaciones, setup)',
      after: '4 minutos (solo verificación final)',
      saving: '90% del tiempo del equipo comercial',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Generación de reportes regulatorios',
      before: '6h cada viernes + riesgo de errores',
      after: 'Reporte automático listo cada lunes a las 9am',
      saving: '24h/mes + 0 errores de compliance',
      icon: <Database className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Automatización especializada para tu sector',
      description: 'Agentes que entienden las reglas específicas de tu negocio, no soluciones genéricas. Cada proceso se adapta a tu experiencia y conocimiento.',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Sin caja negra: trazabilidad total',
      description: 'Cada decisión del agente es auditable. Registro completo de todas las acciones (quién, qué, cuándo y resultado) para cumplimiento normativo y mejora continua.',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Sin rehacer tu infraestructura',
      description: 'Se integra con tus sistemas actuales (ERP, CRM, Excel) o funciona de forma independiente. No necesitas migrar nada.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Activos internos transferibles',
      description: 'Entregamos flujos configurados, plantillas reutilizables y documentación completa. El conocimiento queda en tu empresa para que puedas replicarlo.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'De piloto a producción en semanas',
      description: 'Metodología probada para pasar de análisis a ejecución autónoma en 4–8 semanas con resultados medibles desde el día uno.',
    },
  ];

  const steps = [
    {
      number: '01',
      icon: <Search className="w-10 h-10" />,
      title: 'Descubrimiento del proceso',
      description: 'Analizamos tus tareas repetitivas, mapeamos el dominio y definimos entradas, salidas y reglas clave de tu negocio.',
    },
    {
      number: '02',
      icon: <Settings className="w-10 h-10" />,
      title: 'Configuración e integración',
      description: 'Creamos flujos inteligentes específicos para tu negocio y configuramos agentes con validaciones automáticas. Nos conectamos a tus sistemas o funcionamos independientemente.',
    },
    {
      number: '03',
      icon: <PlayCircle className="w-10 h-10" />,
      title: 'Ejecución verificable',
      description: 'El agente ejecuta tareas autónomamente dentro de límites acordados. Verificación automática en cada ciclo, con trazabilidad completa y mejora continua.',
    },
  ];

  const diyChallenges = [
    'Curva de aprendizaje en agentes y prompts especializados',
    'Construcción de flujos personalizados y mapeo de procesos',
    'Diseño de validaciones automáticas y controles robustos',
    'Infraestructura de logs, trazabilidad y monitorización',
    'Mantenimiento continuo ante cambios en APIs o requisitos',
  ];

  const taskbotAdvantages = [
    'Metodología probada en múltiples dominios especializados',
    'Resultados en 4-8 semanas vs. 4-6 meses internamente',
    'Equipo especializado en automatización con agentes de IA',
    'Documentación y activos transferibles para replicar después',
    'Soporte post-lanzamiento para ajustes y evolución',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-[#E1E5F0]" style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
                  Convierte tu know-how en <span className="text-[#3A7D7C]">ejecución automática</span>
                </h1>
                <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                  Agentes de IA que automatizan tus procesos repetitivos con validaciones automáticas, controles de seguridad y trazabilidad completa. Sin caja negra. Sin rehacer tus sistemas actuales.
                </p>
              </div>

              {/* Technical highlight */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-[#E1E5F0]" style={{ lineHeight: 1.6 }}>
                  <strong className="text-white">Automatización especializada para tu negocio:</strong> Mapeamos tus procesos, creamos flujos inteligentes y conectamos agentes con límites controlados para generar resultados verificables que tú supervisas.
                </p>
              </div>

              {/* Hero Features - Compact */}
              <div className="grid gap-3">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="text-white" style={{ fontWeight: 600 }}>
                        {feature.title}
                      </p>
                      <p className="text-[#E1E5F0] opacity-90" style={{ fontSize: '0.9375rem' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button 
                  onClick={() => onNavigate('contacto')}
                  className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white px-10 py-6 shadow-xl shadow-[#3A7D7C]/20"
                  style={{ fontSize: '1.25rem' }}
                >
                  Agenda tu demo gratuita <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:block relative h-full">
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#3A7D7C] to-[#1B4965] rounded-3xl blur-3xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMGRhc2hib2FyZCUyMGNoYXJ0c3xlbnwxfHx8fDE3NjAwMTkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Panel de control de Taskbot"
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-white/10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#3A7D7C] rounded-xl opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1B4965] rounded-xl opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
              Impacto medible desde el primer mes
            </h2>
            <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Resultados reales de clientes en producción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white border-2 border-[#3A7D7C]/20 hover:border-[#3A7D7C] transition-all hover:shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-[#1B4965]" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="text-[#5A6B7C] mt-2" style={{ fontSize: '0.9375rem', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof Section */}
      <section className="py-12 bg-white border-y border-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              <span className="text-[#1B4965]" style={{ fontWeight: 600 }}>Con la confianza de empresas medianas y grandes</span> que han dado el salto de procesos manuales a automatización inteligente
            </p>
            <p className="mt-2 text-[#5A6B7C]">
              Contabilidad, servicios legales, logística y operaciones técnicas ya operan con Taskbot.pro
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Badge className="bg-[#1B4965] text-white px-4 py-2">Contabilidad</Badge>
              <Badge className="bg-[#1B4965] text-white px-4 py-2">Legal</Badge>
              <Badge className="bg-[#1B4965] text-white px-4 py-2">Logística</Badge>
              <Badge className="bg-[#1B4965] text-white px-4 py-2">Consultoría</Badge>
              <Badge className="bg-[#1B4965] text-white px-4 py-2">Operaciones técnicas</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              ¿Te suena familiar alguno de estos escenarios?
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Casos reales de automatización con agentes de IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-all border-t-4 border-[#3A7D7C] h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white mb-6">
                  {useCase.icon}
                </div>
                
                <h3 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
                  {useCase.title}
                </h3>
                
                <div className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                      <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        <strong className="text-[#C0392B]">Antes:</strong> {useCase.before}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                      <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        <strong className="text-[#2E7D6D]">Ahora:</strong> {useCase.after}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-auto border-t border-[#E1E5F0]">
                    <div className="bg-[#2E7D6D]/10 rounded-lg p-3">
                      <p className="text-[#2E7D6D]" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        💡 Ahorro: {useCase.saving}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem' }}>
              ¿Tienes un proceso similar? Analicemos si es candidato para automatización
            </p>
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Evalúa tu proceso (gratuito) <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Por qué Taskbot.pro es diferente
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              Automatización especializada, no flujos genéricos
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-[#3A7D7C] hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-[#E1E5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Cómo funciona
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem' }}>
              De análisis a producción en 3 fases claras
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1B4965] rounded-full flex items-center justify-center text-white" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-[#3A7D7C] rounded-lg flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('como-lo-hacemos')}
              className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Ver metodología detallada <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* DIY vs Taskbot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0D1B2A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              ¿Hacerlo internamente o contratar?
            </h2>
            <p className="mt-4 text-[#5A6B7C]" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              Una pregunta justa que merece una respuesta honesta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* DIY */}
            <Card className="p-8 bg-[#E1E5F0]/50 border-2 border-[#E1E5F0]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Hacerlo con tu equipo
              </h3>
              
              <div className="space-y-3 mb-6">
                {diyChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#F4B400] flex-shrink-0 mt-0.5" />
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-[#F4B400]">
                <p className="text-[#0D1B2A]" style={{ fontWeight: 600, fontSize: '1rem' }}>
                  Estimación realista:
                </p>
                <p className="text-[#5A6B7C] mt-2" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  150-250 horas de trabajo especializado = 4-6 meses a tiempo parcial (si es tu primer proyecto con agentes, añade +40-60% por curva de aprendizaje)
                </p>
              </div>
            </Card>

            {/* Taskbot */}
            <Card className="p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 border-2 border-[#3A7D7C]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Contratar Taskbot.pro
              </h3>
              
              <div className="space-y-3 mb-6">
                {taskbotAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#3A7D7C] rounded-lg p-4 text-white">
                <p style={{ fontWeight: 600, fontSize: '1rem' }}>
                  Resultados garantizados:
                </p>
                <p className="mt-2 opacity-90" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Piloto en producción en 4-8 semanas + documentación completa + activos transferibles para que puedas replicar internamente después
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#1B4965]/10 to-[#3A7D7C]/10 border-l-4 border-[#3A7D7C] rounded-lg p-8">
            <h3 className="text-[#1B4965] mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Nuestra recomendación honesta
            </h3>
            <p className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
              Si este es tu <strong>primer proceso con agentes de IA</strong>, tienes <strong>presión por resultados</strong> y <strong>equipo limitado</strong>, contratar tiene más sentido. Una vez tengas el primer piloto funcionando y el equipo formado, puedes evaluar hacer los siguientes internamente.
            </p>
            <p className="text-[#5A6B7C]" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              No es todo o nada: muchos clientes empiezan con nosotros y luego hibridan. Te entregamos todo el conocimiento para que tengas esa opción.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B4965] to-[#3A7D7C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Empieza hoy, ahorrarás horas en 30 días
          </h2>
          <p className="mt-4 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            Agenda tu análisis gratuito y descubre si tu proceso es candidato para automatización con agentes de IA
          </p>
          
          <div className="mt-8">
            <Button 
              onClick={() => onNavigate('contacto')}
              className="bg-white text-[#1B4965] hover:bg-[#E1E5F0] px-10 py-6"
              style={{ fontSize: '1.125rem' }}
            >
              Reserva tu demo personalizada <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-[#E1E5F0]" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              ¿Quieres entender primero si tu proceso es candidato para automatización?{' '}
              <button 
                onClick={() => onNavigate('blog/del-know-how-al-flujo')}
                className="underline hover:text-white transition-colors"
                style={{ fontWeight: 600 }}
              >
                Lee nuestra guía práctica paso a paso
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
