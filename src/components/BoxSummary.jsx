const BoxSummary = ({ value, label }) => {
  return (
    <div className="text-center p-3 bg-gray-50 rounded-lg hover:shadow-md transition-all">
      <span className="block text-accent font-bold text-xl md:text-2xl">{value}</span>
      <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default BoxSummary;

