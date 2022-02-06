import { useState } from "react";
import { Link } from "react-router-dom";
import {
  headerButton,
  headerNavLink,
  headerNavLinkActive,
} from "../common/styles";

const links = ["home", "shop", "about", "contact"];

export const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="w-full h-12 p-2 px-3 flex justify-between items-center bg-white drop-shadow-lg fixed md:px-10">
      <img src="/resources/main_logo.webp" className="h-8" alt="RaggyGirlVintage"/>
      <div className="justify-center items-center hidden md:flex">
        {links.map((link: string) => (
          <Link
            to={link === "home" ? "/" : `/${link}`}
            onClick={() => setActive(link)}
            className={active === link ? headerNavLinkActive : headerNavLink}
          >
            {link}
          </Link>
        ))}
      </div>
      <span className={`${headerButton} md:hidden`}>menu</span>
      <div className="relative">
        <span className={headerButton}>shopping_cart</span>
        <div className="absolute cursor-pointer flex justify-center items-center bottom-0 right-0 text-white text-xs bg-red-400 h-4 w-4 rounded-full">
          1
        </div>
      </div>
    </div>
  );
};
