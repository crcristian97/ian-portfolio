const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-black text-2xl font-bold">IAN.</div>
        <div className="flex gap-8">
          {['INICIO', 'SOBRE-MI', 'TRABAJOS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm ${
                item === 'INICIO' ? 'text-black' : 'text-black'
              } hover:text-accent transition-colors`}
            >
              {item === 'SOBRE-MI' ? 'SOBRE MI' : item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
  
  export default Navbar;