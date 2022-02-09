import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";

import {
  headerButton,
  headerNavLink,
  headerNavLinkActive,
} from "../common/styles";
import { CART_QUANTITY } from "../redux/slices/data";

// links used to map nav links
const links = ["home", "shop", "about", "contact"];

export const Header = () => {
  const cart_quantity = useSelector(CART_QUANTITY);
  const [active, setActive] = useState("home");
  return (
    <div className="w-full h-12 p-2 px-3 flex justify-between items-center bg-white drop-shadow-lg fixed md:px-10 lg:px-32 lg:h-16">
      {/* logo that displays on md and lg */}
      <img
        src="/resources/main_logo.webp"
        className="hidden md:block h-8 lg:h-12"
        alt="RaggyGirlVintage"
      />
      {/* div to map all the links on Large screens */}
      <div className="justify-center items-center hidden md:flex">
        {links.map((link: string, i: number) => (
          <Link
            key={i}
            to={link === "home" ? "/" : `/${link}`}
            onClick={() => setActive(link)}
            className={active === link ? headerNavLinkActive : headerNavLink}
          >
            {link}
          </Link>
        ))}
      </div>
      {/* menu for md and sm screens */}
      <Menu as="div" className="relative inline-block text-left md:hidden">
        <div>
          <Menu.Button>
            <span className={`${headerButton} md:hidden`}>menu</span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y rounded-sm divide-gray-100">
            <div>
              {links.map((link: string, i: number) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <Link
                      to={link === "home" ? "/" : `/${link}`}
                      className={`${
                        active ? "bg-gray-100 scale-105" : "text-gray-900"
                      } group flex items-center w-full p-3 uppercase font-light text-sm`}
                    >
                      {link}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {/* shopping cart icon and link with badge to display number of items */}
      <div className="relative">
        <Link to="/cart">
          <span className={headerButton}>shopping_cart</span>
          <div className="absolute cursor-pointer flex justify-center items-center bottom-0 right-0 text-white text-xs bg-red-400 h-4 w-4 rounded-full">
            {cart_quantity}
          </div>
        </Link>
      </div>
    </div>
  );
};
