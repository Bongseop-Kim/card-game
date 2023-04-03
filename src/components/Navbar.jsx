import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 opacity-70 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-xl font-bold">
              My App
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <NavLink
                to="/rooms"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                방 만들기
              </NavLink>
              <NavLink
                to="/quick-entry"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                빠른 입장
              </NavLink>
              <NavLink
                to="/shop"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                상점
              </NavLink>
              <NavLink
                to="/encyclopedia"
                activeClassName="text-white"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                도감
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
