import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prête à vous offrir un moment de beauté et de détente ?
            Contactez-nous pour prendre rendez-vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Prenez rendez-vous
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom complet
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
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone
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

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service désiré
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                    required
                  >
                    <option value="">Sélectionner un service</option>
                    <option value="coiffure">Coiffure & Styling</option>
                    <option value="soins-visage">Soins Visage</option>
                    <option value="manucure">Manucure & Pédicure</option>
                    <option value="epilation">Épilation</option>
                    <option value="maquillage">Maquillage</option>
                    <option value="soins-premium">Soins Premium</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
                  placeholder="Décrivez vos attentes ou posez vos questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Autres moyens de contact
            </h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Téléphone
                  </h4>
                  <p className="text-gray-600">Yaoundé: +237 XXX XXX XXX</p>
                  <p className="text-gray-600">Douala: +237 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">contact@eclatbeaute.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Réseaux sociaux
                  </h4>
                  <p className="text-gray-600">Facebook: @Bbddesign20</p>
                  <p className="text-gray-600">Instagram: @beautybydoudou</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Horaires d'ouverture
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Samedi</span>
                  <span>8h00 - 19h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>10h00 - 17h00</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  🎉 <strong>Promotion spéciale:</strong>
                  <br />
                  20% de réduction sur votre première visite !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
