import React, { useState } from "react";
import Hegemonicos from '../assets/HEGEM.webp';
export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const redirectToTicket = () => {
    window.open('https://www.plateanet.com/obra/27404?obra=HEGEMONICOS&paso=inicio', '_blank');
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/3 rounded-xl shadow-lg overflow-hidden">
          {/* Imagen */}
          <div className="relative">
            <img
              src={Hegemonicos}
              alt="Anuncio de la obra"
              className="w-full h-64 object-cover"
            />
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-gray-100 text-gray-600 rounded-full p-2 shadow-md hover:bg-gray-200 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Contenido */}
          <div className="p-4">
            {/* Título */}
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              ¡Gran Estreno de <span className="text-blue-600">HEGEMONICOS!</span>
            </h2>
            {/* Descripción */}
            <p className="text-gray-600 mt-3 text-center">
              Prepárate para una noche inolvidable. La obra se estrena este <b>04 de diciembre</b> a las <b>21:00 hs</b> en el <b>TEATRO MULTIESCENA, CABA</b>. ¡No te lo pierdas!
            </p>
            {/* Botón de acción */}
            <div className="mt-4 flex justify-center gap-4">
            <button
                className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800"
                onClick={redirectToTicket}
              >
                Comprar Entrada
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                onClick={closeModal}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
