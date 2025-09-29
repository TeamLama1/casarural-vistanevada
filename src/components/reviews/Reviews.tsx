'use client';

import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  platform: 'booking' | 'google' | 'airbnb';
}

const reviews: Review[] = [
  {
    id: 1,
    name: "María González",
    location: "Madrid, España",
    rating: 5,
    date: "Marzo 2024",
    comment: "Una experiencia increíble en Vista Nevada. La casa es aún más hermosa de lo que muestran las fotos. Las vistas son espectaculares y la tranquilidad absoluta. Perfect para desconectar de la ciudad.",
    platform: "booking"
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    location: "Lyon, Francia",
    rating: 5,
    date: "Febrero 2024",
    comment: "Magnifique! Une maison authentique avec tout le confort moderne. L'accueil a été parfait et la région d'Alcalá la Real est superbe. Nous reviendrons certainement!",
    platform: "airbnb"
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    location: "Sevilla, España",
    rating: 5,
    date: "Enero 2024",
    comment: "Pasamos un fin de semana fantástico en familia. La casa tiene todo lo necesario, la piscina (aunque era invierno) se ve preciosa y el entorno es muy relajante. Los anfitriones muy atentos.",
    platform: "google"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 4,
    date: "Diciembre 2023",
    comment: "Beautiful rural house with amazing views of the mountains. Very peaceful location, perfect for a relaxing holiday. The kitchen is well equipped and the bedrooms are comfortable.",
    platform: "booking"
  },
  {
    id: 5,
    name: "Antonio López",
    location: "Barcelona, España",
    rating: 5,
    date: "Noviembre 2023",
    comment: "Una casa rural de 10. Hemos estado con amigos y ha sido genial. La chimenea le da un ambiente muy acogedor y las vistas desde la terraza son impresionantes. Totalmente recomendable.",
    platform: "google"
  },
  {
    id: 6,
    name: "Lisa Weber",
    location: "Munich, Germany",
    rating: 5,
    date: "Octubre 2023",
    comment: "Wunderschönes Landhaus mit allem Komfort. Die Lage ist perfekt für Ausflüge nach Granada und Córdoba. Sehr sauber und gut ausgestattet. Die Gastgeber sind sehr hilfsbereit!",
    platform: "airbnb"
  }
];

const platformColors = {
  booking: 'bg-blue-100 text-blue-800',
  google: 'bg-red-100 text-red-800',
  airbnb: 'bg-pink-100 text-pink-800'
};

const platformNames = {
  booking: 'Booking.com',
  google: 'Google',
  airbnb: 'Airbnb'
};

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Opiniones de Huéspedes</h2>
        
        {/* Rating Summary */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="flex mr-4">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-3xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-lg text-gray-600">
            Basado en {reviews.length} opiniones verificadas
          </p>
        </div>

        {/* Featured Review Carousel - Mobile */}
        <div className="md:hidden mb-8">
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-gray-800">{reviews[currentReview].name}</h4>
                <p className="text-sm text-gray-600">{reviews[currentReview].location}</p>
                <div className="flex mt-1">
                  {renderStars(reviews[currentReview].rating)}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${platformColors[reviews[currentReview].platform]}`}>
                  {platformNames[reviews[currentReview].platform]}
                </span>
                <span className="text-sm text-gray-500">{reviews[currentReview].date}</span>
              </div>
            </div>
            <p className="text-gray-700 italic">&ldquo;{reviews[currentReview].comment}&rdquo;</p>
            
            {/* Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                  <div className="flex mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${platformColors[review.platform]}`}>
                    {platformNames[review.platform]}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{review.comment}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            {showAll ? 'Mostrar menos opiniones' : 'Ver todas las opiniones'}
          </button>
        </div>

        {/* Booking Integration */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Listo para tu experiencia en Vista Nevada?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Únete a nuestros huéspedes satisfechos y crea tus propios recuerdos inolvidables
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Reservar en Booking.com
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
            >
              Contacto Directo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}