import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50 bg-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <div className="text-black text-2xl font-bold">IAN</div>
        
        {/* Hamburger button */}
        <button 
          className="lg:hidden text-black"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8">
          {['INICIO', 'BIBLIOGRAFIA', 'OBRAS DE TEATRO', 'TRABAJOS AUDIOVISUALES', 'LIBROS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm text-black hover:text-accent transition-colors`}
            >
              {item === 'SOBRE-MI' ? 'SOBRE MI' : item}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-200 backdrop-blur-sm ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center py-4">
            {['INICIO', 'BIBLIOGRAFIA', 'OBRAS DE TEATRO', 'TRABAJOS AUDIOVISUALES', 'LIBROS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl text-black hover:text-accent transition-colors py-2 font-bold"
                onClick={() => setIsOpen(false)}
              >
                {item === 'SOBRE-MI' ? 'SOBRE MI' : item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;