import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import innovaPemeImg from 'figma:asset/a830e676ae6ab941a73b754fb2357f09e50433e8.png';
import igapeImg from 'figma:asset/59add9222fd85bf4d54b2ea4be07d733ca0a1034.png';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    empresa: [
      { label: t('nav.queHacemos'), page: 'que-hacemos' },
      { label: t('nav.comoLoHacemos'), page: 'como-lo-hacemos' },
      { label: t('nav.sobreTaskbot'), page: 'sobre-taskbot' },
    ],
    recursos: [
      { label: t('nav.blog'), page: 'blog' },
    ],
    legal: [
      { label: t('footer.avisoLegal'), page: 'aviso-legal' },
      { label: t('footer.politicaPrivacidad'), page: 'politica-privacidad' },
      { label: t('footer.politicaCookies'), page: 'politica-cookies' },
    ],
  };

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección de Ayudas */}
        <div className="mb-12 pb-12 border-b border-[#1B4965]">
          <p className="text-center text-[#E1E5F0] opacity-80 mb-8">
            {t('footer.ayudas')}
          </p>
          
          {/* Primera fila: 2 logos en columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            <img
              src={innovaPemeImg}
              alt="Plan de Innovación 3.14 Financial Contents - Xunta de Galicia - Axencia Galega de Innovación"
              className="w-full object-contain"
            />
            <img
              src={igapeImg}
              alt="Instituto Galego de Promoción Económica - Cofinanciado pola Unión Europea - Fondos Europeos"
              className="w-full object-contain"
            />
          </div>
          
          {/* Segunda fila: Logo ministerio full width */}
          <div className="max-w-4xl mx-auto">
            <img
              src="https://www.3.14financialcontents.com/static/img/logo_ministerio.svg"
              alt="Ministerio de Industria, Comercio y Turismo"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Taskbot<span className="text-[#3A7D7C]">.pro</span>
              </span>
            </div>
            <p className="text-[#E1E5F0] opacity-80 mb-4">
              {t('footer.tagline')}
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
              {t('footer.company')}
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
              {t('footer.resources')}
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
              {t('footer.legal')}
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
          <p>© {currentYear} Taskbot.pro. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}