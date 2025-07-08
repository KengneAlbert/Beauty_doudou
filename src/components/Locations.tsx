import React from 'react';
import { MapPin, Phone, Clock, Car } from 'lucide-react';
import img1 from '../assets/n2.jpg';
import img2 from '../assets/n3.jpg';

const Locations = () => {
  const locations = [
    {
      city: 'Yaoundé',
      address: 'Quartier Bastos, Rue de la Réunification',
      phone: '+237 XXX XXX XXX',
      hours: 'Lun-Sam: 8h-19h, Dim: 10h-17h',
      parking: 'Parking gratuit disponible',
      image: img1
    },
    {
      city: 'Douala',
      address: 'Akwa, Boulevard de la Liberté',
      phone: '+237 XXX XXX XXX',
      hours: 'Lun-Sam: 8h-19h, Dim: 10h-17h',
      parking: 'Parking sécurisé',
      image: img2
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Centres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Retrouvez-nous dans nos deux centres modernes et accueillants, 
            situés au cœur de Yaoundé et Douala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${location.image})` }}>
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {location.city}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">Adresse</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-pink-500 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">Téléphone</p>
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-pink-500 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">Horaires</p>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-pink-500 mt-1" />
                    <div>
                      <p className="text-gray-800 font-medium">Parking</p>
                      <p className="text-gray-600">{location.parking}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300">
                    Réserver
                  </button>
                  <button className="flex-1 border-2 border-pink-500 text-pink-500 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition duration-300">
                    Itinéraire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;