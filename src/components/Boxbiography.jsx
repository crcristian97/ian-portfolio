const Boxbiography = ({ title, description }) => {
  return (
    <div className="bg-zinc-900 p-8">
      <h2 className="text-2xl mb-4">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Boxbiography;

