'use client';

import { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const images: ImageData[] = [
  { id: 1, src: '/images/exterior-1.jpg', alt: 'Vista exterior de la casa rural', title: 'Fachada Principal' },
  { id: 2, src: '/images/living-room.jpg', alt: 'Salón principal con chimenea', title: 'Salón Principal' },
  { id: 3, src: '/images/bedroom-1.jpg', alt: 'Dormitorio principal con vistas', title: 'Dormitorio Principal' },
  { id: 4, src: '/images/kitchen.jpg', alt: 'Cocina completamente equipada', title: 'Cocina' },
  { id: 5, src: '/images/terrace.jpg', alt: 'Terraza con vistas panorámicas', title: 'Terraza' },
  { id: 6, src: '/images/pool.jpg', alt: 'Piscina y área de descanso', title: 'Piscina' },
  { id: 7, src: '/images/garden.jpg', alt: 'Jardín y áreas verdes', title: 'Jardín' },
  { id: 8, src: '/images/dining.jpg', alt: 'Comedor con mesa para 8 personas', title: 'Comedor' },
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Galería de Fotos</h2>
        
        {/* Main Featured Image */}
        <div className="mb-8">
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <div 
              className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center cursor-pointer"
              onClick={() => openModal(currentImage)}
            >
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-xl font-semibold">{images[currentImage].title}</p>
                <p className="text-sm">Haz clic para ampliar</p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow ${
                index === currentImage ? 'ring-4 ring-green-500' : ''
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-full h-80 md:h-96 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-600">
                    <div className="text-8xl mb-4">🏠</div>
                    <p className="text-2xl font-semibold">{images[currentImage].title}</p>
                  </div>
                </div>
                <p className="text-gray-600">{images[currentImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}