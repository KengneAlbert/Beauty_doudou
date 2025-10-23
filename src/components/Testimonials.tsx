import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Ngono",
      city: "Yaoundé",
      rating: 5,
      text: "Un service exceptionnel ! L'équipe est professionnelle et à l'écoute. Je recommande vivement Éclat Beauté.",
      image:
        "https://images.pexels.com/photos/3992617/pexels-photo-3992617.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Sandrine Mballa",
      city: "Douala",
      rating: 5,
      text: "Depuis que j'ai découvert ce salon, je ne vais plus ailleurs. La qualité des soins est remarquable chez Éclat Beauté.",
      image:
        "https://images.pexels.com/photos/3992617/pexels-photo-3992617.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      name: "Aminata Diallo",
      city: "Yaoundé",
      rating: 5,
      text: "Un endroit magique où l'on se sent chouchoutée. Les résultats dépassent toujours mes attentes avec Éclat Beauté.",
      image:
        "https://images.pexels.com/photos/3992617/pexels-photo-3992617.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que disent nos clientes sur leur expérience Beauty by
            Doudou.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-pink-200">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.city}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
