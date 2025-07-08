import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star } from 'lucide-react';
import Logo from '../assets/logo.jpg'; 

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Barre d'information supérieure */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Lun-Sam: 8h-19h | Dim: 10h-17h</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>500+ clients satisfaits</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+237 XXX XXX XXX</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                🎉 -20% première visite
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo amélioré */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                    <img src={Logo} alt="Logo Beauty by Doudou" className="w-10 h-10 rounded-full object-cover" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-white fill-current" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 leading-tight">
                  Beauty by Doudou
                </h1>
                <p className="text-xs text-gray-500">Complexe de Beauté Premium</p>
              </div>
            </div>

            {/* Navigation desktop améliorée */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { label: 'Accueil', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Galerie', id: 'gallery' },
                { label: 'Tarifs', id: 'pricing' },
                { label: 'À Propos', id: 'about' },
                { label: 'Centres', id: 'locations' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-pink-500 transition duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Informations de contact et CTA */}
            <div className="hidden xl:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>Yaoundé • Douala</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
              </div>
              
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Réserver maintenant
              </button>
            </div>

            {/* Bouton mobile amélioré */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:from-pink-600 hover:to-rose-600 transition duration-300"
              >
                Réserver
              </button>
              
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Menu mobile amélioré */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
              <nav className="py-6 space-y-4">
                {[
                  { label: 'Accueil', id: 'home' },
                  { label: 'Services', id: 'services' },
                  { label: 'Galerie', id: 'gallery' },
                  { label: 'Tarifs', id: 'pricing' },
                  { label: 'À Propos', id: 'about' },
                  { label: 'Centres', id: 'locations' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-pink-500 transition duration-300 font-medium py-2 px-4 hover:bg-pink-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Informations de contact mobile */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <div className="space-y-3 px-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">Yaoundé • Douala</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">+237 XXX XXX XXX</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">Lun-Sam: 8h-19h</span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;