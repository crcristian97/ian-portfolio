import Navbar from '../components/Navbar';

function WorkVisuals() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-pulse">
            Próximamente
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Estamos preparando algo extraordinario para mostrar nuestro trabajo visual. 
              Un espacio donde la creatividad y la innovación se encuentran para crear 
              experiencias únicas y memorables.
            </p>
            <p className="text-lg text-gray-400 italic">
              "El arte es la mentira que nos permite comprender la verdad" - Pablo Picasso
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default WorkVisuals;
