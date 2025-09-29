interface AmenityItem {
  icon: string;
  title: string;
  description: string;
}

const amenities: AmenityItem[] = [
  {
    icon: "🏠",
    title: "Capacidad para 8 personas",
    description: "4 dormitorios dobles con camas cómodas y ropa de cama de calidad"
  },
  {
    icon: "🏊",
    title: "Piscina privada",
    description: "Piscina de temporada con área de descanso y tumbonas"
  },
  {
    icon: "🍳",
    title: "Cocina completamente equipada",
    description: "Frigorífico, horno, microondas, lavavajillas y todos los utensilios necesarios"
  },
  {
    icon: "🔥",
    title: "Chimenea",
    description: "Chimenea acogedora para las noches más frescas"
  },
  {
    icon: "📺",
    title: "TV y entretenimiento",
    description: "Televisión con canales locales y área de estar cómoda"
  },
  {
    icon: "🚗",
    title: "Aparcamiento privado",
    description: "Plaza de aparcamiento gratuito en la propiedad"
  },
  {
    icon: "🌿",
    title: "Jardín y terraza",
    description: "Amplios espacios exteriores con vistas panorámicas"
  },
  {
    icon: "🧺",
    title: "Lavandería",
    description: "Lavadora disponible para estancias más largas"
  },
  {
    icon: "🌡️",
    title: "Climatización",
    description: "Calefacción y aire acondicionado en toda la casa"
  },
  {
    icon: "🛜",
    title: "WiFi gratuito",
    description: "Conexión a internet de alta velocidad en toda la propiedad"
  },
  {
    icon: "🏔️",
    title: "Vistas espectaculares",
    description: "Vistas panorámicas de las montañas y el paisaje andaluz"
  },
  {
    icon: "🍽️",
    title: "Comedor para 8",
    description: "Mesa de comedor amplia perfecta para reuniones familiares"
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Servicios y Comodidades</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Disfruta de todas las comodidades modernas en un entorno rural auténtico
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Información Adicional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📍 Ubicación</h4>
              <p className="text-gray-600 mb-4">
                Situada en Alcalá la Real, Jaén, nuestra casa rural ofrece fácil acceso a:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Centro histórico de Alcalá la Real (5 min)</li>
                <li>• Parque Natural Sierras Subbéticas (30 min)</li>
                <li>• Granada y la Alhambra (1 hora)</li>
                <li>• Córdoba (1 hora y 30 min)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">ℹ️ Normas de la Casa</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Check-in: 16:00 - 20:00</li>
                <li>• Check-out: hasta las 11:00</li>
                <li>• No se admiten mascotas</li>
                <li>• Prohibido fumar en el interior</li>
                <li>• Respeto por el entorno rural y vecinos</li>
                <li>• Máximo 8 huéspedes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}