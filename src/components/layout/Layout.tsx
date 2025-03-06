import React from "react";
import NavBar from "../navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { RooteStore } from "../../Redux/store";
import SideBar from "../sidebar/SideBar";
import { MenuSlice } from "../../Redux/MenuSlice";
import { useThemeContext } from "../../Context/ThemeContext";
interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const {theme}  = useThemeContext()
  const {menu} = useSelector((state: RooteStore) => state.Menu)
  const dispath = useDispatch()
  return (
    
      <div className={`grid ${!theme ? "light" : "dark"} grid-cols-6 `}>
        <div
          className={`lg:col-span-1   lg:block sm:${
            !menu ? "hidden" : "block"
          } sm:bg-[rgba(0,0,0,0.1)] lg:relative lg:z-[1] sm:z-[100]    sm:h-full sm:w-full sm:fixed sm:top-0 sm:left-0  `}
        >
          <SideBar />
          {menu && (
            <div
              onClick={() =>
                dispath(MenuSlice.actions.openMenu({ menu: false }))
              }
              className="absolute lg:hidden sm:block cursor-pointer top-5 right-5"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                 className="fill-gray-black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  
                />
              </svg>
            </div>
          )}
        </div>
        <div className="lg:col-span-5  sm:col-span-full ">
          <NavBar />
          {children}
        </div>
      </div>
  
  );
}

export default Layout;
