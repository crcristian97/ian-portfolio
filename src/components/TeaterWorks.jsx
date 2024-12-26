import { dataTeatro } from "./utils/dataTeatro";
function TheaterWork({ title = '', description = '', director = '', location = '', year = '', imgSrc = '', reverse = false, temporada = '', experiencia = '' }) {
  return (
    <section className="mb-16 bg-white shadow rounded-lg overflow-hidden">
      <div className={`md:flex ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="md:w-1/2">
          <img
            src={imgSrc}
            alt={`${title} Performance`}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-4">Temporada: {temporada.primerTemporada} | Funciones: {temporada.funciones}</p>
          <p className="text-gray-600 mb-4">Experiencia: {experiencia}</p>
          <p className="text-sm text-gray-500">
            Director: {director} | {location} | {year}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TheaterWorks() {
 
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 mt-16">
          <h1 className="text-3xl font-bold text-center">Obras de Teatro de Ian Luna</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {dataTeatro.map((work, index) => (
          <TheaterWork key={index} {...work} />
        ))}
      </main>
     
    </div>
  );
}
