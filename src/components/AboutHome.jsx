import aboutImage from '../assets/ianAboutImg.webp';
import { sendDriveGoogle } from './utils/sendDriveGoogle';
import BoxSummary from './BoxSummary';

const AboutHome = () => {
  return (
    <div className="py-20 bg-white" id="sobre-mi">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
            {/* Portfolio Button */}
            <div className="mb-6">
              <div className="text-center p-4 bg-blue-500 rounded-lg hover:shadow-md transition-all cursor-pointer w-full">
                <a onClick={() => sendDriveGoogle('https://drive.google.com/drive/folders/1-5TVPSuNphutyj9MYQjomo3gCjtLal96')} className="block text-white font-bold text-2xl">PORTFOLIO</a>
              </div>
            </div>

            {/* Medidas Section */}
            <h2 className="text-2xl font-bold mb-3 text-center lg:text-left">Medidas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-6">
              <BoxSummary value="1.73 cm" label="Altura" />
              <BoxSummary value="70 kg" label="Peso" />
              <BoxSummary value="M" label="Remera" />
              <BoxSummary value="42" label="Pantalón" />
              <BoxSummary value="42" label="Calzado" />
            </div>

            {/* Skills Section */}
            <h2 className="text-2xl font-bold mb-3 text-center lg:text-left">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <BoxSummary value="⚽" label="Fútbol" />
              <BoxSummary value="🏃" label="Deportista" />
              <BoxSummary value="🏊" label="Natación" />
              <BoxSummary value="⛷️" label="Ski" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;