'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">VN</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Vista Nevada</h1>
              <p className="text-sm text-gray-600">Casa Rural</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Opiniones
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 mt-1 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Opiniones
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}