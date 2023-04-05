import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const userItem = useSelector((state) => state.userItem);

  const logOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  console.log(userItem);
  return (
    <nav className="bg-gray-800 opacity-70 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="text-white text-xl font-bold">{userItem.channel} 채널</div>
            <button className="hover:text-white" onClick={() => navigate("/channelSelection")}>
              채널 변경하기
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <NavLink to="/rooms" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                방 만들기
              </NavLink>
              <NavLink
                to="/quickEntry"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                빠른 입장
              </NavLink>
              <NavLink to="/shop" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                상점
              </NavLink>
              <NavLink
                to="/monsterDictionary"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                도감
              </NavLink>
              <NavLink to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                보유 카드
              </NavLink>
              <NavLink
                to="/encyclopedia"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                오류 게시판
              </NavLink>
              <NavLink
                to="/encyclopedia"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                카드 건의 게시판
              </NavLink>
              <div onClick={logOut} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                로그아웃
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
