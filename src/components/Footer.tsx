import React from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Éclat Beauté</h3>
            </div>

            <p className="text-gray-400 mb-6">
              Votre complexe de beauté de référence à Yaoundé et Douala. Nous
              révélons votre beauté naturelle avec passion et professionnalisme.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Bbddesign20"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Coiffure & Styling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Soins Visage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Manucure & Pédicure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Épilation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Maquillage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Soins Premium
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Yaoundé</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-pink-400" />
                <span>Quartier Bastos, Rue de la Réunification</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+237 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>yaounde@beautybydoudou.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Douala</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-pink-400" />
                <span>Akwa, Boulevard de la Liberté</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+237 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>douala@beautybydoudou.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2024 Éclat Beauté. Tous droits réservés.</span>
            <Heart className="w-4 h-4 text-pink-400" />
            <span>Fait avec amour au Cameroun</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
