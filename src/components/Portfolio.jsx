import { useState } from 'react';
import IMG_5723 from '../assets/IMG_5723.webp';
import IMG_5717 from '../assets/IMG_5717.webp';
import IMG_5715 from '../assets/IMG_5715.webp';
import IMG_5702 from '../assets/IMG_5702.webp';
import IMG_5698 from '../assets/IMG_5698.webp';
import IMG_5680 from '../assets/IMG_5680.webp';
import IMG_5679 from '../assets/IMG_5679.webp';
import IMG_5677 from '../assets/IMG_5677.webp';
import ianHeroImg from '../assets/ianHeroImg.webp';
import ianAboutImg from '../assets/ianAboutImg.webp';
import hegemonicosAlvaro from '../assets/hegemonicosAlvaro.webp';
import hegemonicoIan from '../assets/hegemonicoIan.webp';
import HEGEM from '../assets/HEGEM.webp';
import IMG_5278 from '../assets/IMG_5278.webp';
import IMG_6419 from '../assets/IMG_6419.webp';
import IMG_6420 from '../assets/IMG_6420.webp';
import patriacarajo from '../assets/patriacarajo.webp';
import patriacarajo2 from '../assets/patriacarajo2.webp';
import IMG_5711 from '../assets/IMG_5711.webp';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODAS');

  const categories = ['TODAS', 'OBRAS', 'MODELAJE'];
  const projects = [
    { id: 1, img: HEGEM, category: 'OBRAS' },
    { id: 2, img: hegemonicosAlvaro, category: 'OBRAS' },
    { id: 3, img: hegemonicoIan, category: 'OBRAS' },
    { id: 14, img: IMG_5278, category: 'OBRAS' },
    { id: 15, img: IMG_6419, category: 'OBRAS' },
    { id: 16, img: IMG_6420, category: 'OBRAS' },
    { id: 17, img: patriacarajo, category: 'OBRAS' },
    { id: 18, img: patriacarajo2, category: 'OBRAS' },
    { id: 4, img: ianAboutImg, category: 'MODELAJE' },
    { id: 5, img: IMG_5723, category: 'MODELAJE' },
    { id: 6, img: IMG_5717, category: 'MODELAJE' },
    { id: 9, img: IMG_5715, category: 'MODELAJE' },
    { id: 7, img: IMG_5677, category: 'MODELAJE' },
    { id: 8, img: ianHeroImg, category: 'MODELAJE' },
    { id: 10, img: IMG_5702, category: 'MODELAJE' },
    { id: 11, img: IMG_5698, category: 'MODELAJE' },
    { id: 12, img: IMG_5680, category: 'MODELAJE' },
    { id: 13, img: IMG_5679, category: 'MODELAJE' },
    { id: 19, img: IMG_5711, category: 'MODELAJE' },
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'TODAS' ? true : project.category === selectedCategory
  );

  return (
    <div className="py-20 bg-gray-50" id="trabajos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Mi participación
          <span className="block text-5xl text-accent">en proyectos </span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 my-8 md:my-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${
                category === selectedCategory ? 'text-accent' : 'text-gray-600'
              } hover:text-accent transition-colors px-2 md:px-4`}
            >
              {category}
            </button>
          ))}
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden aspect-square bg-gray-200"
            >
              <img
                src={project.img}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
  
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-primary/90 transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;