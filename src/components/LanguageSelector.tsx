import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-[#3A7D7C]" />
      <div className="flex gap-1">
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 text-sm transition-colors ${
            language === 'es'
              ? 'text-[#3A7D7C]'
              : 'text-gray-400 hover:text-[#1B4965]'
          }`}
        >
          ES
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-sm transition-colors ${
            language === 'en'
              ? 'text-[#3A7D7C]'
              : 'text-gray-400 hover:text-[#1B4965]'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
