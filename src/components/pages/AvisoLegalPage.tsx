import { Shield, Building2, Mail, MapPin, FileText, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-[#3A7D7C]" />
            <h1 className="text-[#E1E5F0]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Aviso Legal
            </h1>
          </div>
          <p className="text-[#E1E5F0] opacity-90" style={{ fontSize: '1.125rem' }}>
            Información legal del sitio web Taskbot.pro conforme a la LSSI
          </p>
          <p className="text-[#E1E5F0] opacity-75 mt-2">
            Última actualización: Octubre 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Titular del sitio web - Datos obligatorios LSSI */}
          <div className="mb-12 p-8 bg-gradient-to-br from-[#1B4965]/5 to-[#3A7D7C]/5 rounded-lg border-l-4 border-[#3A7D7C]">
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="w-8 h-8 text-[#1B4965] flex-shrink-0 mt-1" />
              <div className="w-full">
                <h2 className="text-[#0D1B2A] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                  1. Titular del sitio web
                </h2>
                
                <div className="bg-white/60 p-6 rounded-lg mb-6">
                  <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                    En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa que el titular de este sitio web es:
                  </p>
                  
                  <div className="space-y-3 text-[#0D1B2A]">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="opacity-70">Denominación social</p>
                        <p style={{ fontWeight: 600 }}>3.14 (ver datos completos en aviso legal corporativo)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="opacity-70">Correo electrónico</p>
                        <a href="mailto:contacto@taskbot.pro" className="text-[#3A7D7C] hover:text-[#2E7D6D] underline" style={{ fontWeight: 600 }}>
                          contacto@taskbot.pro
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#3A7D7C] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="opacity-70">Sitio web</p>
                        <p style={{ fontWeight: 600 }}>www.taskbot.pro</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
                  <strong className="text-[#0D1B2A]">Taskbot.pro</strong> es una marca y producto de <strong className="text-[#0D1B2A]">3.14</strong>, empresa especializada en automatización de procesos empresariales con inteligencia artificial.
                </p>
                
                <p className="text-[#5A6B7C] mb-6" style={{ lineHeight: 1.7 }}>
                  Los datos completos del titular (NIF, domicilio social, inscripción registral y demás información obligatoria) están disponibles en el aviso legal corporativo de 3.14:
                </p>
                
                <a 
                  href="https://www.3.14financialcontents.com/aviso-legal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="bg-[#1B4965] hover:bg-[#0D1B2A] text-white px-8 py-6"
                    style={{ fontSize: '1.125rem' }}
                  >
                    Ver aviso legal completo de 3.14
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Objeto del sitio web */}
          <div className="mb-8 p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              2. Objeto del sitio web
            </h2>
            <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
              Taskbot.pro es la solución especializada de 3.14 para la automatización de procesos empresariales mediante agentes de inteligencia artificial. Este sitio web tiene como objeto informar sobre las características, funcionalidades y servicios de Taskbot.pro, así como facilitar el contacto con clientes potenciales.
            </p>
          </div>

          {/* Condiciones de uso */}
          <div className="mb-8 p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              3. Condiciones de uso
            </h2>
            <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones legales. El usuario se compromete a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#5A6B7C] ml-4">
              <li>Utilizar el sitio web de conformidad con la ley y el presente aviso legal</li>
              <li>No realizar actividades ilícitas o contrarias a la buena fe</li>
              <li>No introducir o difundir contenidos que sean contrarios a la ley, la moral o el orden público</li>
              <li>No realizar acciones que puedan dañar, inutilizar o deteriorar el sitio web o sus servicios</li>
            </ul>
          </div>

          {/* Protección de datos */}
          <div className="mb-8 p-6 bg-[#E1E5F0]/30 rounded-lg">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              4. Protección de datos personales
            </h2>
            <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
              3.14 cumple con el <strong className="text-[#0D1B2A]">Reglamento General de Protección de Datos (RGPD)</strong> de la Unión Europea y la <strong className="text-[#0D1B2A]">Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD)</strong>.
            </p>
            <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
              Los datos personales recabados a través de este sitio web (formularios de contacto, suscripciones, etc.) serán tratados conforme a la política de privacidad de 3.14, disponible en el aviso legal corporativo. Los usuarios pueden ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad contactando en <a href="mailto:contacto@taskbot.pro" className="text-[#3A7D7C] hover:text-[#2E7D6D] underline">contacto@taskbot.pro</a>.
            </p>
          </div>

          {/* Propiedad intelectual */}
          <div className="mb-8 p-6 bg-[#E1E5F0]/30 rounded-lg">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              5. Propiedad intelectual e industrial
            </h2>
            <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
              Todos los derechos de propiedad intelectual e industrial sobre este sitio web, su código fuente, diseño, estructura de navegación, bases de datos y los distintos elementos contenidos en el mismo (textos, imágenes, sonido, audio, vídeo, software, marcas, logotipos, combinaciones de colores, etc.) son titularidad de <strong className="text-[#0D1B2A]">3.14</strong> o de terceros que han autorizado su uso.
            </p>
            <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra explotación de los contenidos de este sitio web sin la autorización previa y expresa de 3.14.
            </p>
          </div>

          {/* Responsabilidad y exención */}
          <div className="mb-8 p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              6. Limitación de responsabilidad
            </h2>
            <p className="text-[#5A6B7C] mb-4" style={{ lineHeight: 1.7 }}>
              3.14 no se hace responsable de los daños y perjuicios que pudieran derivarse de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#5A6B7C] ml-4">
              <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web</li>
              <li>Virus, programas maliciosos o lesivos en los contenidos</li>
              <li>El uso ilícito, negligente, fraudulento o contrario a este aviso legal</li>
              <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros a través del sitio web</li>
            </ul>
          </div>

          {/* Legislación aplicable */}
          <div className="mb-8 p-6 bg-white rounded-lg border-2 border-[#E1E5F0]">
            <h2 className="text-[#0D1B2A] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-[#5A6B7C]" style={{ lineHeight: 1.7 }}>
              Las presentes condiciones legales se rigen por la legislación española. Para la resolución de cualquier controversia relacionada con este sitio web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

          {/* CTA final */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#1B4965] to-[#0D1B2A] rounded-lg text-center text-white">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }} className="mb-4">
              ¿Necesitas información adicional?
            </h3>
            <p className="mb-6 text-[#E1E5F0]" style={{ lineHeight: 1.7 }}>
              Para información legal completa y detallada, consulta el aviso legal corporativo de 3.14
            </p>
            <a 
              href="https://www.3.14financialcontents.com/aviso-legal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                className="bg-white text-[#1B4965] hover:bg-[#E1E5F0] px-8 py-6"
                style={{ fontSize: '1.125rem' }}
              >
                Ver aviso legal completo de 3.14
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
