import React from "react";
import { Award, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "5+",
      label: "Années d'expérience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Clients satisfaits",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "2000+",
      label: "Heures de formation",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction client",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-pink-50 to-rose-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              À Propos de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Éclat Beauté
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Éclat Beauté est né de la passion pour la beauté et le
                bien-être. Depuis plus de 5 ans, nous nous engageons à révéler
                la beauté naturelle de chaque cliente avec professionnalisme et
                bienveillance.
              </p>

              <p>
                Nos centres de Yaoundé et Douala offrent un environnement
                chaleureux et moderne, équipé des dernières technologies et
                produits de qualité premium. Notre équipe de professionnels
                formés aux dernières tendances vous garantit des résultats
                exceptionnels.
              </p>

              <p>
                Nous croyons que chaque femme mérite de se sentir belle et
                confiante. C'est pourquoi nous personnalisons chaque service
                selon vos besoins et vos préférences, dans le respect de votre
                individualité.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition duration-300 shadow-lg">
                Découvrir notre histoire
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-pink-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
