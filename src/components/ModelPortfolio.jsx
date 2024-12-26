import React from "react";
import { sendDriveGoogle } from "./utils/sendDriveGoogle";
import aboutImage from '../assets/ianAboutImg.webp';
import ModelPortfolio1 from '../assets/ianBibliografia.webp';
import ModelPortfolio2 from '../assets/ianBibliografia2.webp';
import ModelPortfolio3 from '../assets/ianBibliografia3.webp';
import ModelPortfolio4 from '../assets/ianBibliografia4.webp';
import ModelPortfolio5 from '../assets/ianBibliografia5.webp';
import Boxbiography from "./Boxbiography";

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
                Un artista apasionado que vive cada día al máximo. Hace no mucho tiempo descubrí que mi lugar está en el escenario y frente a las cámaras, y hoy estoy trabajando para hacer realidad mis sueños como actor, cantante y músico.
              </p>
              <p className="text-gray-300 mb-6">
                Soy una persona vibrante, curiosa y siempre en busca de nuevos desafíos. Ya he tenido mis primeras experiencias tanto frente a cámara como en el escenario, lo que me confirmó que este camino es lo que amo profundamente.
              </p>
              <p className="text-gray-300 mb-6">
                Mi formación incluye clases intensivas de actuación, canto y guitarra con distintos profesores que me han ayudado a crecer. Actualmente, estudio en la UNA, porque estoy convencido de que un artista nunca deja de aprender. Siempre busco evolucionar, tanto en lo profesional como en lo personal. Mis metas son claras: ser un actor profesional, vivir de mi arte y llegar al corazón de las personas con mis interpretaciones.
              </p>
              <p className="text-gray-300 mb-6">
                Creo firmemente que el arte es una herramienta para inspirar y conectar. Por eso, en cada proyecto que emprendo, pongo todo mi corazón y energía. Estoy emocionado por las oportunidades que vienen y agradecido por cada paso que me acerca a mis sueños.
              </p>
              <p className="text-gray-300">
                ¿Querés saber más sobre mi trabajo? ¡Te invito a explorar esta página, donde encontrarás todo.
              </p>
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
          <Boxbiography title="AGENCIA" description="ACTOR INDEPENDIENTE" />
          <div>
            <Boxbiography title="CONTACTO" description="IAN LUNA" />
            <p className="mt-2 text-zinc-400">
              UBICACIÓN: Buenos Aires, AR • Argentina
            </p>
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
