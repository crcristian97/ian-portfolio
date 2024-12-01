import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppButton from './components/utils/WhatsAppButton';
import AnnouncementModal from './components/AnnouncementModal';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementModal />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;