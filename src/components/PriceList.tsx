import React from 'react';
import { Scissors, Sparkles, Heart, Zap, Brush, Crown, Star } from 'lucide-react';

const PriceList = () => {
  const services = [
    {
      category: 'Coiffure & Styling',
      icon: <Scissors className="w-6 h-6" />,
      services: [
        { name: 'Coupe femme', price: '15 000', duration: '45 min' },
        { name: 'Brushing', price: '8 000', duration: '30 min' },
        { name: 'Coloration complète', price: '25 000', duration: '2h' },
        { name: 'Mèches', price: '20 000', duration: '1h30' },
        { name: 'Défrisage', price: '18 000', duration: '2h' },
        { name: 'Coiffure mariage', price: '35 000', duration: '2h30' }
      ]
    },
    {
      category: 'Soins Visage',
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        { name: 'Nettoyage de peau', price: '12 000', duration: '1h' },
        { name: 'Soin hydratant', price: '15 000', duration: '1h15' },
        { name: 'Soin anti-âge', price: '20 000', duration: '1h30' },
        { name: 'Masque purifiant', price: '10 000', duration: '45 min' },
        { name: 'Gommage visage', price: '8 000', duration: '30 min' }
      ]
    },
    {
      category: 'Manucure & Pédicure',
      icon: <Heart className="w-6 h-6" />,
      services: [
        { name: 'Manucure classique', price: '5 000', duration: '45 min' },
        { name: 'Manucure gel', price: '8 000', duration: '1h' },
        { name: 'Pédicure complète', price: '7 000', duration: '1h' },
        { name: 'Nail art simple', price: '3 000', duration: '30 min' },
        { name: 'Nail art complexe', price: '6 000', duration: '45 min' }
      ]
    },
    {
      category: 'Épilation',
      icon: <Zap className="w-6 h-6" />,
      services: [
        { name: 'Sourcils', price: '2 000', duration: '15 min' },
        { name: 'Lèvre supérieure', price: '1 500', duration: '10 min' },
        { name: 'Aisselles', price: '3 000', duration: '20 min' },
        { name: 'Jambes complètes', price: '8 000', duration: '45 min' },
        { name: 'Maillot classique', price: '5 000', duration: '30 min' }
      ]
    },
    {
      category: 'Maquillage',
      icon: <Brush className="w-6 h-6" />,
      services: [
        { name: 'Maquillage jour', price: '10 000', duration: '45 min' },
        { name: 'Maquillage soirée', price: '15 000', duration: '1h' },
        { name: 'Maquillage mariage', price: '25 000', duration: '1h30' },
        { name: 'Cours de maquillage', price: '20 000', duration: '2h' }
      ]
    },
    {
      category: 'Soins Premium',
      icon: <Crown className="w-6 h-6" />,
      services: [
        { name: 'Massage relaxant', price: '18 000', duration: '1h' },
        { name: 'Soin corps complet', price: '25 000', duration: '1h30' },
        { name: 'Package VIP', price: '50 000', duration: '3h' },
        { name: 'Journée beauté', price: '80 000', duration: '5h' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Tarifs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prix transparents pour des services de qualité premium. 
            Tous nos tarifs incluent les produits professionnels utilisés.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
                <div className="flex items-center space-x-3 text-white">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <h4 className="font-medium text-gray-800">{service.name}</h4>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-pink-600">
                          {service.price} FCFA
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <h3 className="text-2xl font-bold text-gray-800">Offres Spéciales</h3>
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Première visite</h4>
                <p className="text-pink-600 font-bold text-xl mb-2">-20%</p>
                <p className="text-sm text-gray-600">Sur tous nos services</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Package Duo</h4>
                <p className="text-pink-600 font-bold text-xl mb-2">-15%</p>
                <p className="text-sm text-gray-600">2 services ou plus</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">Fidélité</h4>
                <p className="text-pink-600 font-bold text-xl mb-2">-10%</p>
                <p className="text-sm text-gray-600">À partir de la 5ème visite</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              * Les offres ne sont pas cumulables. Conditions détaillées en centre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;