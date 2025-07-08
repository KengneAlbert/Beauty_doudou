import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Coiffure & Styling',
    'Soins Visage',
    'Manucure & Pédicure',
    'Épilation',
    'Maquillage',
    'Soins Premium'
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de réservation
    console.log('Booking submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Réserver un rendez-vous</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <User className="w-4 h-4" />
                <span>Nom complet</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Phone className="w-4 h-4" />
                <span>Téléphone</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                placeholder="+237 XXX XXX XXX"
                required
              />
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Service désiré</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                required
              >
                <option value="">Sélectionner un service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <MapPin className="w-4 h-4" />
                <span>Centre</span>
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                required
              >
                <option value="">Choisir un centre</option>
                <option value="yaounde">Yaoundé - Bastos</option>
                <option value="douala">Douala - Akwa</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Calendar className="w-4 h-4" />
                <span>Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                required
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                <Clock className="w-4 h-4" />
                <span>Heure</span>
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                required
              >
                <option value="">Choisir une heure</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Notes spéciales</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
              placeholder="Demandes spéciales, allergies, préférences..."
            />
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              🎉 <strong>Offre spéciale :</strong> 20% de réduction sur votre première visite !
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 shadow-lg"
          >
            Confirmer la réservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;