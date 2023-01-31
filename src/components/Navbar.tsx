import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 py-1 ${
        scroll > 0 ? "bg-[#001124] text-white" : "transparent text-white"
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3 shadow-md">
        <div className="pl-4">
          <a
            className="text-base xl:text-xl no-underline hover:no-underline font-bold font-display"
            href="#"
          >
            GVOTING
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20 font-display">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 font-bold no-underline"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-blockno-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block  no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Login{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
