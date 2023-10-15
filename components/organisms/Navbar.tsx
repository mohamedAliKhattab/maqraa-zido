import React, { useState } from "react";
import Logo from "@/components/organisms/Logo";
import HomeLinks from "@/components/organisms/HomeLinks";
import { PaySubscription } from "@/components/organisms/NavbarActions";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <>
      <nav className=" bg-white py-2">
        <div className="container relative">
          <div className="mx-auto flex items-center justify-between">
            <div className="navbar-item-wrapper lg:w-[200px]">
              <Logo />
            </div>

            <button
              onClick={() => toggleNavbar()}
              data-collapse-toggle="navbar-default"
              type="button"
              className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={` absolute left-[0.5%] top-[110px] z-50 mt-3 max-h-[0px] w-[99%]
                max-w-full items-center justify-between overflow-hidden rounded-md bg-white lg:static lg:mt-0 lg:!flex lg:max-h-[100%] lg:w-[calc(100%-65px)] lg:w-full lg:grow lg:overflow-visible lg:rounded-none  
                ${
                  toggleNav
                    ? "!max-h-[999px] transition-[max-height] duration-500 ease-in-out"
                    : ""
                }`}
            >
              <div
                className=" w-full grow items-center justify-between gap-3 lg:flex lg:w-auto"
                id="navbar-default"
              >
                <div className="block w-full items-center justify-between p-4 lg:flex lg:p-0">
                  <div className=""></div>
                  <HomeLinks />
                  <div className="navbar-item-wrapper mt-8 lg:mt-0">
                    <PaySubscription />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
