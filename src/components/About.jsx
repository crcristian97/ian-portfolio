import aboutImage from '../assets/ianAboutImg.webp';
import { sendDriveGoogle } from './utils/sendDriveGoogle';


const About = () => {
  return (
    <div className="py-20 bg-white" id="sobre-mi">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-4/5 max-w-md aspect-square bg-gray-200">
              <img
                src={aboutImage}
                alt="About Image Ian"
                title="About Image Ian"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left">
              ¿Quién soy?
              <br />
              <span className="text-4xl md:text-5xl text-accent">¡Hola!</span>
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base text-center lg:text-left">
              Soy un actor apasionado y versátil con experiencia en teatro, cine y televisión. 
              Mi dedicación al arte dramático me ha permitido desarrollar una amplia gama de 
              habilidades interpretativas, desde papeles dramáticos hasta comedias. También me 
              desempeño como modelo profesional, participando en pasarelas y sesiones fotográficas.
            </p>
            <p className="text-gray-600 text-sm md:text-base text-center lg:text-left">
              Mi formación incluye estudios en actuación, expresión corporal y técnicas de 
              interpretación. Me caracterizo por mi profesionalismo, versatilidad y compromiso 
              con cada proyecto. Siempre busco nuevos desafíos que me permitan crecer como 
              artista y conectar con el público de manera auténtica y memorable.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <span className="block text-accent font-bold text-xl md:text-2xl">174 cm</span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Altura</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <span className="block text-accent font-bold text-xl md:text-2xl">70 kg</span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Peso</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <span className="block text-accent font-bold text-xl md:text-2xl">M</span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Remera</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <span className="block text-accent font-bold text-xl md:text-2xl">42</span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Pantalón</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all">
                <span className="block text-accent font-bold text-xl md:text-2xl">42</span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Calzado</span>
              </div>
              <div className="text-center p-3 md:p-4 bg-blue-500 rounded-lg hover:shadow-md transition-all cursor-pointer flex items-center justify-center">
                <a onClick={() => sendDriveGoogle('https://drive.google.com/drive/folders/1yOk7qP_I19kRjvjldjEYlc6C14sbHAYz')} className="block text-accent font-bold text-xl md:text-2xl">PORTFOLIO</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;