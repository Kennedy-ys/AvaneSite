export default function Button({
  as: Component = "button", // default to <button>
  children,
  icon,
  btnBgColor = "bg-blue-500",
  btnBgHover = "bg-blue-600",
  btnTxtColor = "text-white",
  iconBgColor = "bg-white",
  size = 20,
  ...props // pass any additional props to the button element
}) {
  const fs = size * 0.85; // font-size
  const paddingY = size * 0.5; // vertical padding
  const paddingL = size * 1.1; // left padding
  const paddingR = size * 0.55; // right padding
  const iconSize = size * 1.6; // icon pill diameter
  const iconFs = size * 0.9; // icon inner font-size  (pass to your icon)
  const radius = size * 2; // border-radius → stays pill-shaped at any size
  const gap = icon ? size * 0.55 : 0; // space between text & icon, only if icon exists

  return (
    <Component
      {...props}
      className={`
        ${btnBgColor} group relative overflow-hidden inline-flex items-center ${icon ? "justify-between" : "justify-center"} font-semibold cursor-pointer outline-none select-none transition-[filter] duration-200 hover:brightness-110 shadow-lg 
      `}
      style={{
        fontSize: fs,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingL,
        paddingRight: icon ? paddingR : paddingL,
        borderRadius: radius,
        gap,
        letterSpacing: "0.01em",
      }}
    >
      {/* Hover Effect */}
      <span
        className={`absolute transform scale-x-0 origin-left group-hover:scale-x-100 inset-0 ${btnBgHover} transition-transform duration-300 ease-out`}
        style={{ borderRadius: "inherit" }}
      />

      {/* Label */}
      <span
        className={`z-10 capitalize ${btnTxtColor}`}
        style={{ whiteSpace: "nowrap" }}
      >
        {children}
      </span>

      {/* Icon pill only if an Icon exists */}
      {icon && (
        <span
          className={`inline-flex items-center justify-center rounded-full transition-transform duration-200 ease-in-out group-hover:scale-105 ${iconBgColor} overflow-hidden`}
          style={{
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            fontSize: iconFs,
          }}
        >
          {icon}
        </span>
      )}
    </Component>
  );
}
