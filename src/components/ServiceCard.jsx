const ServiceCard = ({ number, title, description, icon }) => {
  return (
    <div className="group relative rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-6 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
      
      {/* Top bar */}
      <div className="absolute rounded-full top-0 left-0 h-1 w-12 bg-orange-500 group-hover:w-full transition-all duration-300" />

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl font-bold text-slate-200 dark:text-slate-700">
          {number}
        </span>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-medium">
        Learn more →
      </div>
    </div>
  );
};

export default ServiceCard;