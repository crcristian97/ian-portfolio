import Navbar from '../components/Navbar';

function Books() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-pulse">
            Próximo Lanzamiento
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Prepárate para sumergirte en un viaje íntimo a través de las páginas de mi próximo libro. 
              Una obra que combina experiencias personales, reflexiones artísticas y lecciones aprendidas 
              en el mundo del teatro y la actuación.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-400">
                Muy pronto podrás descubrir historias nunca antes contadas, anécdotas de backstage,
                y perspectivas únicas sobre el arte dramático.
              </p>
              <p className="text-lg text-gray-400 italic">
                "Las palabras son el lienzo donde pintamos nuestras verdades"
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Books;
