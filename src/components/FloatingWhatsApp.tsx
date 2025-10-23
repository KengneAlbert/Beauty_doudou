import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumbers = {
    yaounde: "+237XXXXXXXXX",
    douala: "+237XXXXXXXXX",
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendWhatsAppMessage = (location: "yaounde" | "douala") => {
    const number = whatsappNumbers[location];
    const message = encodeURIComponent(
      `Bonjour Éclat Beauté ! Je souhaiterais prendre rendez-vous dans votre centre de ${
        location === "yaounde" ? "Yaoundé" : "Douala"
      }.`
    );
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleChat}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu de sélection */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 bg-white rounded-2xl shadow-xl p-6 w-80">
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Contactez-nous sur WhatsApp
            </h3>
            <p className="text-sm text-gray-600">
              Choisissez votre centre pour un contact direct
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => sendWhatsAppMessage("yaounde")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Centre Yaoundé</span>
            </button>

            <button
              onClick={() => sendWhatsAppMessage("douala")}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Centre Douala</span>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Réponse rapide garantie pendant les heures d'ouverture
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
