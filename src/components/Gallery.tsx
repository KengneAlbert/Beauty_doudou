import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery: React.FC<{ onBookingClick: () => void }> = ({
  onBookingClick,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Salon moderne Beauty by Doudou",
      category: "Salon",
    },
    {
      src: "https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Coiffure professionnelle",
      category: "Coiffure",
    },
    {
      src: "https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Soins visage relaxants",
      category: "Soins",
    },
    {
      src: "https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Manucure artistique",
      category: "Manucure",
    },
    {
      src: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Maquillage professionnel",
      category: "Maquillage",
    },
    {
      src: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Espace détente premium",
      category: "Salon",
    },
    {
      src: "https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Coiffure créative",
      category: "Coiffure",
    },
    {
      src: "https://images.pexels.com/photos/3865670/pexels-photo-3865670.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Soins du corps relaxants",
      category: "Soins",
    },
    {
      src: "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Nail art créatif",
      category: "Manucure",
    },
  ];

  const categories = [
    "Tous",
    "Salon",
    "Coiffure",
    "Soins",
    "Manucure",
    "Maquillage",
  ];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredImages =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-8 h-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-gray-800">Notre Galerie</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos réalisations et l'ambiance unique de nos centres Éclat
            Beauté. Chaque image raconte une histoire de beauté et de
            transformation.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de la galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay avec informations */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                    <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de visualisation */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Bouton fermer */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Boutons navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image principale */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Informations de l'image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-white font-semibold text-lg mb-2">
                    {filteredImages[selectedImage].alt}
                  </p>
                  <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Envie de vivre cette expérience ?
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez nos nombreuses clientes satisfaites et découvrez
              pourquoi Beauty by Doudou est le complexe de beauté de référence à
              Yaoundé et Douala.
            </p>
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 shadow-lg"
            >
              Prendre rendez-vous maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
