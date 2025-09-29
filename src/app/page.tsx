import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/gallery/Gallery';
import Amenities from '@/components/amenities/Amenities';
import Reviews from '@/components/reviews/Reviews';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Amenities />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
