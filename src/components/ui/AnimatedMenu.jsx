const AnimatedMenu = ({ size = 24 }) => {
  const lineWeight = size * 0.13; // Proportional thickness
  const LineHeight = size * 0.7; // Total height for the three lines

  return (
    <div
      className="group flex flex-col justify-between items-end cursor-pointer overflow-visible"
      style={{ width: size, height: LineHeight }}
    >
      {/* Top Line - shrinks to 80% on hover */}
      <div
        className="dark:text-gray-100 text-gray-700 bg-current font-bold rounded-4xl transition-all duration-300 ease-in-out w-full  group-hover:w-4/5"
        style={{ height: lineWeight }}
      />

      {/* Middle Line - extends past container (115%) on hover */}
      <div
        className="dark:text-gray-100 text-gray-700 bg-current font-bold rounded-4xl transition-all duration-300 ease-in-out w-[60%]  group-hover:w-[115%]"
        style={{ height: lineWeight }}
      />

      {/* Bottom Line - shrinks to 55% on hover */}
      <div
        className="dark:text-gray-100 text-gray-700 bg-current font-bold rounded-4xl transition-all duration-300 ease-in-out w-[80%]  group-hover:w-[55%]"
        style={{ height: lineWeight }}
      />
    </div>
  );
};

export default AnimatedMenu;
