import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: 'Qué hacemos', page: 'que-hacemos' },
      { label: 'Cómo lo hacemos', page: 'como-lo-hacemos' },
      { label: 'Sobre Taskbot', page: 'sobre-taskbot' },
    ],
    recursos: [
      { label: 'Blog', page: 'blog' },
    ],
    legal: [
      { label: 'Aviso legal', page: 'aviso-legal' },
      { label: 'Política de privacidad', page: 'politica-privacidad' },
      { label: 'Política de cookies', page: 'politica-cookies' },
    ],
  };

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Taskbot<span className="text-[#3A7D7C]">.pro</span>
              </span>
            </div>
            <p className="text-[#E1E5F0] opacity-80 mb-4">
              Automatización inteligente para empresas que quieren crecer.
            </p>
            {/* Social Media Links - Hidden temporarily */}
            {/* <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#1B4965] hover:bg-[#3A7D7C] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1B4965] hover:bg-[#3A7D7C] rounded-full flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1B4965] hover:bg-[#3A7D7C] rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#1B4965] hover:bg-[#3A7D7C] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
            </div> */}
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#E1E5F0] opacity-80 hover:opacity-100 hover:text-[#3A7D7C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              Recursos
            </h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#E1E5F0] opacity-80 hover:opacity-100 hover:text-[#3A7D7C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-[#E1E5F0] opacity-80 hover:opacity-100 hover:text-[#3A7D7C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1B4965] pt-8 text-center text-[#E1E5F0] opacity-70">
          <p>© {currentYear} Taskbot.pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}