import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'INICIO', path: '/' },
    { label: 'BIBLIOGRAFIA', path: '/bibliografia' },
    { label: 'OBRAS DE TEATRO', path: '/obras-de-teatro' },
    { label: (
      <div className="relative">
        TRABAJOS AUDIOVISUALES
        <span className="absolute -top-4 -right-2 text-xs text-black font-bold">
          Proximamente
        </span>
      </div>
    ), path: '/trabajos-audiovisuales' },
    { label: 'LIBROS', path: '/libros' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50 bg-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
          {menuItems.map((item) => (
            <Link
              key={typeof item.label === 'string' ? item.label : 'TRABAJOS AUDIOVISUALES'}
              to={item.path}
              className="text-sm text-black hover:text-accent transition-colors relative"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gray-200 backdrop-blur-sm ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <Link
                key={typeof item.label === 'string' ? item.label : 'TRABAJOS AUDIOVISUALES'}
                to={item.path}
                className="text-2xl text-black hover:text-accent transition-colors py-2 font-bold relative"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
