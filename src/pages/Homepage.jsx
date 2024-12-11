import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
//import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/utils/WhatsAppButton';
//import AnnouncementModal from './components/AnnouncementModal';
function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <AnnouncementModal /> */}
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <AboutHome />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default HomePage;