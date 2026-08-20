import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 text-sm">
        {/* Home */}
        <li className="inline-flex items-center">
          <Link to="/" className="font-medium dark:text-white text-gray-800 hover:text-blue-500">
            Home
          </Link>
        </li>

        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;

          const isLast = index === pathNames.length - 1;

          return (
            <li key={routeTo} className="inline-flex items-center">
              <span className="mx-1.5">
                <MdOutlineKeyboardDoubleArrowRight className="mr-2 text-orange-500" />
              </span>

              {isLast ? (
                <span className="font-medium text-blue-700 dark:text-blue-500 capitalize">
                  {name}
                </span>
              ) : (
                <Link className="hover:text-blue-500 capitalize">{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
