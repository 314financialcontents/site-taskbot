import { Shield, Lock, UserCheck, Database, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-[#3A7D7C]" />
            <h1 className="text-[#E1E5F0]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Política de Privacidad
            </h1>
          </div>
          <p className="text-[#E1E5F0] opacity-90" style={{ fontSize: '1.125rem' }}>
            Información sobre el tratamiento de datos personales en Taskbot.pro
          </p>
          <p className="text-[#E1E5F0] opacity-75 mt-2">
            Última actualización: Octubre 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Responsible Entity */}
          <div className="mb-12 p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 rounded-lg border-l-4 border-[#3A7D7C]">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-8 h-8 text-[#1B4965] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  Responsable del tratamiento de datos
                </h2>
                <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Este sitio web es operado por <strong className="text-[#0D1B2A]">3.14</strong>, empresa responsable del tratamiento de los datos personales que se recopilan a través de Taskbot.pro.
                </p>
                <p className="text-[#5A6B7C] mb-6" style={{ lineHeight: 1.7 }}>
                  La política de privacidad completa de 3.14, que incluye información detallada sobre todos los tratamientos de datos, derechos de los usuarios, medidas de seguridad y contacto del Delegado de Protección de Datos, está disponible en el sitio corporativo.
                </p>
                
                <a 
                  href="https://www.3.14financialcontents.com/politica-de-privacidad/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
                    style={{ fontSize: '1.125rem' }}
                  >
                    Ver política de privacidad completa de 3.14
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Key Information */}
          <div className="mb-12">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Información específica sobre Taskbot.pro
            </h2>

            <div className="space-y-8">
              
              {/* Data Collection */}
              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <div className="flex items-start gap-4">
                  <Database className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Datos que recopilamos
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                      A través de este sitio web, podemos recopilar los siguientes datos personales:
                    </p>
                    <ul className="space-y-2 text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span><strong>Datos de contacto:</strong> nombre, email, teléfono y empresa cuando nos contactas para solicitar información o una demo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span><strong>Datos de navegación:</strong> información sobre tu uso del sitio web recopilada mediante cookies (ver nuestra Política de Cookies).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span><strong>Información comercial:</strong> detalles sobre procesos empresariales que compartes voluntariamente para evaluación de viabilidad.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <div className="flex items-start gap-4">
                  <UserCheck className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Finalidad del tratamiento
                    </h3>
                    <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                      Utilizamos tus datos personales para:
                    </p>
                    <ul className="space-y-2 text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span>Responder a tus consultas y solicitudes de información.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span>Realizar análisis de viabilidad de procesos de automatización.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span>Preparar y realizar demostraciones del producto.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span>Gestionar relaciones comerciales con clientes potenciales y actuales.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3A7D7C] mt-1">•</span>
                        <span>Mejorar nuestro sitio web y servicios.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal Basis */}
              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Base legal
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  El tratamiento de tus datos se basa en tu consentimiento (al enviarnos información a través de formularios o email) y en nuestro interés legítimo en gestionar relaciones comerciales B2B.
                </p>
              </div>

              {/* Rights */}
              <div className="p-6 bg-[#E1E5F0]/30 rounded-lg">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Tus derechos
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                  De acuerdo con el RGPD, tienes derecho a:
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Acceder a tus datos personales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Rectificar datos inexactos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Solicitar la supresión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Oponerte al tratamiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Solicitar la limitación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">✓</span>
                    <span>Portabilidad de datos</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Contact */}
          <div className="p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 rounded-lg border-2 border-[#3A7D7C]">
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-[#1B4965] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Ejercicio de derechos
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                  Para ejercer cualquiera de tus derechos o plantear consultas sobre el tratamiento de tus datos personales, puedes contactarnos en:
                </p>
                <a href="mailto:contacto@taskbot.pro" className="text-[#3A7D7C] hover:text-[#2E7D6D] underline" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                  contacto@taskbot.pro
                </a>
                <p className="text-[#5A6B7C] mt-4" style={{ lineHeight: 1.7 }}>
                  También puedes consultar el canal de ejercicio de derechos de 3.14 en su política de privacidad corporativa.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Note */}
          <div className="mt-8 p-6 bg-[#E1E5F0]/30 rounded-lg">
            <p className="text-[#5A6B7C] text-center" style={{ lineHeight: 1.7 }}>
              <strong className="text-[#0D1B2A]">Cumplimiento normativo:</strong> Esta política de privacidad cumple con el Reglamento General de Protección de Datos (RGPD - UE 2016/679) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
