import React from "react";
import { sendDriveGoogle } from "./utils/sendDriveGoogle";
import aboutImage from '../assets/ianAboutImg.webp';
import ModelPortfolio1 from '../assets/ModelPortfolio1.webp';
import ModelPortfolio2 from '../assets/ModelPortfolio2.webp';
import ModelPortfolio3 from '../assets/ModelPortfolio3.webp';
import ModelPortfolio4 from '../assets/ModelPortfolio4.webp';
import ModelPortfolio5 from '../assets/ModelPortfolio5.webp';


const ModelPortfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 mt-12">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-2">IAN LUNA</h1>
          <p className="text-gray-400">BUENOS AIRES, ARGENTINA</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Featured Images */}
          <div className="space-y-4 flex items-center">
            <div className="aspect-[3/4] w-full">
              <img
                src={aboutImage}
                alt="Portfolio Image 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8">
              <h2 className="text-2xl mb-4">Soy Ian -</h2>
              <p className="text-gray-300 mb-6">
              Soy un actor apasionado y versátil con experiencia en teatro, cine y televisión. Mi dedicación al arte dramático me ha permitido desarrollar una amplia gama de habilidades interpretativas, desde papeles dramáticos hasta comedias. También me desempeño como modelo profesional, participando en pasarelas y sesiones fotográficas.
              </p>
              <p className="text-gray-300">
                Mi formación incluye estudios en actuación, expresión corporal y técnicas de interpretación. Me caracterizo por mi profesionalismo, versatilidad y compromiso con cada proyecto. Siempre busco nuevos desafíos que me permitan crecer como artista y conectar con el público de manera auténtica y memorable.
              </p>
              {/* <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors">
                MORE ABOUT JORDAN →
              </button> */}
            </div>

            {/* Measurements */}
            
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <img
              src={ModelPortfolio1}
              alt="Fotografía de modelo Ian Luna en sesión profesional"
              title="Fotografía de portafolio de Ian Luna"
              width={200}
              height={300}
              className="w-full object-cover aspect-[3/4]"
            />
            <img
              src={ModelPortfolio2}
              alt="Retrato profesional del modelo Ian Luna" 
              title="Retrato de portafolio de Ian Luna"
              width={200}
              height={300}
              className="w-full object-cover aspect-[3/4]"
            />
            <img
              src={ModelPortfolio3}
              alt="Sesión fotográfica de moda con Ian Luna"
              title="Sesión de moda de Ian Luna"
              width={200}
              height={300}
              className="w-full object-cover aspect-[3/4]"
            />
            <img
              src={ModelPortfolio4}
              alt="Fotografía editorial del modelo Ian Luna"
              title="Fotografía editorial de Ian Luna"
              width={200}
              height={300}
              className="w-full object-cover aspect-[3/4]"
            />
            <img
              src={ModelPortfolio5}
              alt="Retrato artístico del modelo Ian Luna"
              title="Retrato artístico de Ian Luna"
              width={200}
              height={300}
              className="w-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors" onClick={() => sendDriveGoogle('https://drive.google.com/drive/folders/1-5TVPSuNphutyj9MYQjomo3gCjtLal96')}>
              VER TODO EL PORTAFOLIO
            </button>
          </div>
        </div>

        {/* Agency & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 p-8">
            <h2 className="text-2xl mb-4">AGENCIA</h2>
            <p className="text-gray-400">ACTOR INDEPENDIENTE</p>
          </div>
          <div className="bg-zinc-900 p-8">
            <h2 className="text-2xl mb-4">CONTACTO</h2>
            <div className="space-y-2 text-gray-300">
              <p>IAN LUNA</p>
              <p>IAN.LUNA@GMAIL.COM</p>
              <p className="text-sm text-gray-400">
                UBICACIÓN: Buenos Aires, AR • Argentina 
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif">IAN LUNA</div>
            <nav className="flex items-center gap-6">
              <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              </button>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ModelPortfolio;
