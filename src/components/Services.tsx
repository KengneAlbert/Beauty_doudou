import React from 'react';
import { Scissors, Sparkles, Heart, Zap, Brush, Crown } from 'lucide-react';

interface ServicesProps {
  onBookingClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookingClick }) => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Coiffure & Styling',
      description: 'Coupes tendance, colorations, défrisages et coiffures pour toutes occasions.',
      features: ['Coupe moderne', 'Coloration', 'Défrisage', 'Coiffure mariage']
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Soins Visage',
      description: 'Nettoyage en profondeur, hydratation et traitements anti-âge personnalisés.',
      features: ['Nettoyage facial', 'Hydratation', 'Anti-âge', 'Masques']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Manucure & Pédicure',
      description: 'Soins des ongles, pose de vernis et nail art créatif.',
      features: ['Manucure classique', 'Pédicure', 'Nail art', 'Pose de gel']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Épilation',
      description: 'Épilation à la cire, méthodes douces pour un résultat optimal.',
      features: ['Épilation cire', 'Épilation douce', 'Zones sensibles', 'Épilation complète']
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: 'Maquillage',
      description: 'Maquillage professionnel pour événements spéciaux et formations.',
      features: ['Maquillage mariage', 'Maquillage soirée', 'Formations', 'Conseils beauté']
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Soins Premium',
      description: 'Massages relaxants, soins du corps et packages bien-être exclusifs.',
      features: ['Massage relaxant', 'Soins du corps', 'Packages VIP', 'Détente absolue']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services beauté, réalisés par des professionnels 
            expérimentés avec des produits de qualité premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl hover:shadow-xl transition duration-500 transform hover:-translate-y-2 border border-pink-100"
            >
              <div className="text-pink-500 mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={onBookingClick}
                className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300"
              >
                Réserver maintenant
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;