import { Cookie, Settings, BarChart3, Shield, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-10 h-10 text-[#3A7D7C]" />
            <h1 className="text-[#E1E5F0]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Política de Cookies
            </h1>
          </div>
          <p className="text-[#E1E5F0] opacity-90" style={{ fontSize: '1.125rem' }}>
            Información sobre el uso de cookies en Taskbot.pro
          </p>
          <p className="text-[#E1E5F0] opacity-75 mt-2">
            Última actualización: Octubre 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro */}
          <div className="mb-12 p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 rounded-lg border-l-4 border-[#3A7D7C]">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-[#1B4965] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  ¿Qué son las cookies?
                </h2>
                <p className="text-[#5A6B7C] mb-6" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo.
                </p>
                <p className="text-[#5A6B7C] mb-6" style={{ lineHeight: 1.7 }}>
                  Este sitio web es operado por <strong className="text-[#0D1B2A]">3.14</strong>. La política de cookies completa de 3.14, que incluye información detallada sobre todos los tipos de cookies utilizadas, finalidades específicas y opciones de gestión, está disponible en el sitio corporativo.
                </p>
                
                <a 
                  href="https://www.3.14financialcontents.com/politica-de-cookies/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
                    style={{ fontSize: '1.125rem' }}
                  >
                    Ver política de cookies completa de 3.14
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mb-12">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Tipos de cookies que utilizamos
            </h2>

            <div className="space-y-6">
              
              {/* Technical Cookies */}
              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Cookies técnicas y de funcionalidad
                    </h3>
                    <p className="text-[#5A6B7C] mb-3" style={{ lineHeight: 1.7 }}>
                      <strong className="text-[#1B4965]">Propósito:</strong> Son esenciales para el funcionamiento del sitio web. Permiten la navegación básica y el uso de funcionalidades como áreas seguras o recordar preferencias de idioma.
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                      <strong className="text-[#1B4965]">Base legal:</strong> Interés legítimo (no requieren consentimiento previo).
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-[#3A7D7C] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Cookies analíticas
                    </h3>
                    <p className="text-[#5A6B7C] mb-3" style={{ lineHeight: 1.7 }}>
                      <strong className="text-[#1B4965]">Propósito:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima. Esto nos permite mejorar la experiencia de usuario y el rendimiento del sitio.
                    </p>
                    <p className="text-[#5A6B7C] mb-3" style={{ lineHeight: 1.7 }}>
                      <strong className="text-[#1B4965]">Ejemplos:</strong> Google Analytics (con IP anonimizada).
                    </p>
                    <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                      <strong className="text-[#1B4965]">Base legal:</strong> Consentimiento del usuario.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Cookie Details Table */}
          <div className="mb-12">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Cookies específicas utilizadas en Taskbot.pro
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[#E1E5F0]">
                <thead className="bg-[#1B4965] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>Cookie</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>Tipo</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>Duración</th>
                    <th className="px-4 py-3 text-left" style={{ fontWeight: 600 }}>Finalidad</th>
                  </tr>
                </thead>
                <tbody className="text-[#5A6B7C]">
                  <tr className="border-t border-[#E1E5F0]">
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">2 años</td>
                    <td className="px-4 py-3">Distinguir usuarios (Google Analytics)</td>
                  </tr>
                  <tr className="border-t border-[#E1E5F0] bg-[#E1E5F0]/20">
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">24 horas</td>
                    <td className="px-4 py-3">Distinguir usuarios (Google Analytics)</td>
                  </tr>
                  <tr className="border-t border-[#E1E5F0]">
                    <td className="px-4 py-3">_gat</td>
                    <td className="px-4 py-3">Analítica</td>
                    <td className="px-4 py-3">1 minuto</td>
                    <td className="px-4 py-3">Limitar frecuencia de peticiones</td>
                  </tr>
                  <tr className="border-t border-[#E1E5F0] bg-[#E1E5F0]/20">
                    <td className="px-4 py-3">cookie_consent</td>
                    <td className="px-4 py-3">Técnica</td>
                    <td className="px-4 py-3">1 año</td>
                    <td className="px-4 py-3">Recordar preferencias de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="mb-12">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Gestión de cookies
            </h2>

            <div className="space-y-6">
              
              <div className="p-6 bg-[#E1E5F0]/30 rounded-lg">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Aceptar o rechazar cookies
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                  Cuando visitas nuestro sitio web por primera vez, te mostramos un banner informativo sobre el uso de cookies. Puedes aceptar todas las cookies, rechazar las no esenciales o configurar tus preferencias.
                </p>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  Puedes cambiar tus preferencias en cualquier momento desde la configuración de tu navegador.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Configuración del navegador
                </h3>
                <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                  Puedes configurar tu navegador para aceptar, rechazar o eliminar cookies. Los pasos varían según el navegador que utilices:
                </p>
                <ul className="space-y-2 text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">•</span>
                    <span><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">•</span>
                    <span><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">•</span>
                    <span><strong>Safari:</strong> Preferencias → Privacidad → Cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3A7D7C] mt-1">•</span>
                    <span><strong>Edge:</strong> Configuración → Privacidad → Cookies</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
                <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Consecuencias de desactivar cookies
                </h3>
                <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                  Si desactivas las cookies técnicas, es posible que algunas funcionalidades del sitio web no funcionen correctamente. Las cookies analíticas no son imprescindibles para la navegación, pero nos ayudan a mejorar tu experiencia.
                </p>
              </div>

            </div>
          </div>

          {/* Third Party Cookies */}
          <div className="mb-12">
            <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
              Cookies de terceros
            </h2>
            <div className="p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
              <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                Utilizamos servicios de terceros que pueden instalar cookies propias. Estos terceros tienen sus propias políticas de privacidad y cookies:
              </p>
              <ul className="space-y-3 text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#3A7D7C] mt-1">•</span>
                  <div>
                    <strong className="text-[#1B4965]">Google Analytics:</strong> Servicio de análisis web.
                    <br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#3A7D7C] hover:text-[#2E7D6D] underline text-sm">
                      Política de privacidad de Google
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 rounded-lg border-2 border-[#3A7D7C]">
            <h3 className="text-[#0D1B2A] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Más información
            </h3>
            <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
              Si tienes dudas sobre nuestra política de cookies, puedes contactarnos en:
            </p>
            <a href="mailto:contacto@taskbot.pro" className="text-[#3A7D7C] hover:text-[#2E7D6D] underline" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
              contacto@taskbot.pro
            </a>
          </div>

          {/* Compliance Note */}
          <div className="mt-8 p-6 bg-[#E1E5F0]/30 rounded-lg">
            <p className="text-[#5A6B7C] text-center" style={{ lineHeight: 1.7 }}>
              <strong className="text-[#0D1B2A]">Cumplimiento normativo:</strong> Esta política de cookies cumple con la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), el Reglamento General de Protección de Datos (RGPD - UE 2016/679) y la directiva ePrivacy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
