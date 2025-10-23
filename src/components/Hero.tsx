import React from "react";
import { Star, ArrowRight } from "lucide-react";
// import Logo from '../assets/logo.jpg';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const heroImage =
    "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800";
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-pink-50 to-rose-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                Complexe de beauté de référence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Éclat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Beauté
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez l'excellence en matière de beauté et de bien-être. Nos
              experts vous offrent des services personnalisés dans nos centres
              de Yaoundé et Douala.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Prendre rendez-vous</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition duration-300">
                Découvrir nos services
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">500+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">2</div>
                <div className="text-gray-600">Centres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">5+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-white shadow-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Salon de beauté moderne"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
