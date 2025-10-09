import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'que-hacemos', label: 'Qué hacemos' },
    { id: 'como-lo-hacemos', label: 'Cómo lo hacemos' },
    { id: 'sobre-taskbot', label: 'Sobre Taskbot' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <span className="text-[#1B4965]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Taskbot<span className="text-[#3A7D7C]">.pro</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 transition-colors ${
                  currentPage === item.id
                    ? 'text-[#1B4965]'
                    : 'text-gray-600 hover:text-[#3A7D7C]'
                }`}
                style={{ fontWeight: currentPage === item.id ? 600 : 400 }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavigate('contacto')}
              className="bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1B4965] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.id
                    ? 'bg-[#E1E5F0] text-[#1B4965]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={{ fontWeight: currentPage === item.id ? 600 : 400 }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button 
                onClick={() => handleNavigate('contacto')}
                className="w-full bg-[#3A7D7C] hover:bg-[#2E7D6D] text-white"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}