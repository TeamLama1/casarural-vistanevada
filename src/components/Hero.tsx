'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Vista Nevada
          <span className="block text-green-600">Casa Rural</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Descubre la tranquilidad y belleza del campo español en el corazón de Alcalá la Real, Jaén
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Una casa rural única que combina el encanto tradicional andaluz con las comodidades modernas, 
          ofreciendo vistas espectaculares de las montañas de Sierra Nevada.
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
            onClick={scrollToContact}
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
          >
            Contactar Directamente
          </button>
        </div>
      </div>
    </section>
  );
}