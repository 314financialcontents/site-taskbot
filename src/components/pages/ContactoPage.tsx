import { Mail, Phone, MapPin, Clock, CheckCircle, Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useState } from 'react';

interface ContactoPageProps {
  onNavigate: (page: string) => void;
}

export function ContactoPage({ onNavigate }: ContactoPageProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('contacto@taskbot.pro');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0D1B2A] to-[#1B4965] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 }}>
              Contacta con nosotros
            </h1>
            <p className="mt-6 text-[#E1E5F0]" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
              ¿Tienes un proceso repetitivo que podría automatizarse? Envíanos un email y analizaremos si es candidato para automatización con agentes de IA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Primary Contact Card */}
          <div className="text-center mb-16">
            <Card className="p-12 bg-gradient-to-br from-[#1B4965] to-[#3A7D7C] text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-10 h-10" />
              </div>
              
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 }} className="mb-6">
                Cuéntanos tu caso
              </h2>
              
              <p className="text-white/90 mb-8" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                Envíanos un email con los detalles de tu proceso
              </p>

              {/* Email with copy button */}
              <div className="bg-white/10 rounded-xl p-6 inline-block">
                <div className="flex items-center gap-4 justify-center">
                  <span style={{ fontSize: '1.5rem', fontWeight: 600 }} className="text-white">
                    contacto@taskbot.pro
                  </span>
                  <Button
                    onClick={copyEmail}
                    variant="outline"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30 p-2"
                  >
                    {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </Button>
                </div>
                {copied && (
                  <p className="text-white/80 text-sm mt-2">
                    ✓ Email copiado al portapapeles
                  </p>
                )}
              </div>


            </Card>
          </div>

          {/* What to Include */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 border-[#E1E5F0]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                ¿Qué incluir en tu email?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs" style={{ fontWeight: 600 }}>1</span>
                  </div>
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Tu empresa y contacto
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Nombre, empresa, email y teléfono de contacto
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs" style={{ fontWeight: 600 }}>2</span>
                  </div>
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Descripción del proceso
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Qué proceso quieres automatizar y cómo funciona actualmente
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3A7D7C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs" style={{ fontWeight: 600 }}>3</span>
                  </div>
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Volumen y frecuencia
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Cuántas veces al día/semana/mes y tiempo que consume
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-[#E1E5F0]">
              <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                ¿Qué puedes esperar?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Respuesta en menos de 2 días hábiles
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Confirmación de recibo y primera valoración
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2E7D6D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Análisis gratuito
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Evaluación inicial de viabilidad sin coste
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[#1B4965] mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Llamada de 30 min
                    </h4>
                    <p className="text-[#5A6B7C]" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      Si es viable, agendamos una sesión de análisis
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Example Email */}
          <Card className="p-8 bg-[#E1E5F0]/30 border-2 border-[#E1E5F0]">
            <h3 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Plantilla lista para copiar
            </h3>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#3A7D7C] font-mono text-sm">
              <div className="space-y-3 text-[#5A6B7C]">
                <p><strong className="text-[#0D1B2A]">Asunto:</strong> Consulta automatización proceso facturas</p>
                <p><strong className="text-[#0D1B2A]">De:</strong> juan.perez@miempresa.com</p>
                <hr className="border-[#E1E5F0]" />
                <div className="space-y-2">
                  <p>Hola equipo Taskbot,</p>
                  <p>Soy Juan Pérez, CFO de MiEmpresa SA (200 empleados, sector logística).</p>
                  <p>Actualmente procesamos ~300 facturas/mes de forma manual:</p>
                  <p>• Recibimos por email → Revisión manual → Validación datos → Envío a contabilidad</p>
                  <p>• Nos lleva 2-3 horas diarias y genera errores ocasionales</p>
                  <p>¿Sería un buen candidato para automatización?</p>
                  <p>Teléfono: +34 600 123 456</p>
                  <p>Gracias y saludos,<br />Juan</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Alternative Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-2 border-[#E1E5F0]">
              <div className="w-12 h-12 bg-[#3A7D7C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#3A7D7C]" />
              </div>
              <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Teléfono
              </h4>
              <p className="text-[#5A6B7C]">+34 91 101 2001</p>
            </Card>

            <Card className="p-6 text-center border-2 border-[#E1E5F0]">
              <div className="w-12 h-12 bg-[#3A7D7C]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#3A7D7C]" />
              </div>
              <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Oficina
              </h4>
              <p className="text-[#5A6B7C]" style={{ lineHeight: 1.5 }}>
                Av. Esteiro, 145<br />
                15403 Ferrol - A Coruña<br />
                Spain
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-[#E1E5F0]">
              <div className="w-12 h-12 bg-[#2E7D6D]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#2E7D6D]" />
              </div>
              <h4 className="text-[#0D1B2A] mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Tiempo de respuesta
              </h4>
              <p className="text-[#5A6B7C]">Menos de 2 días hábiles</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}