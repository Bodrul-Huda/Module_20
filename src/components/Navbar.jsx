"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const currentPath = usePathname();

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="w-full bg-teal-950 shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link href="#">
                  <h2 className="text-2xl text-white font-bold">
                    Blog Magazine
                  </h2>
                </Link>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li
                    className={
                      currentPath === "/"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className={
                      currentPath === "/blog"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li
                    className={
                      currentPath === "/about"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/about">About US</Link>
                  </li>
                  <li
                    className={
                      currentPath === "/contact"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/contact">Contact US</Link>
                  </li>
                  <li
                    className={
                      currentPath === "/service"
                        ? "text-orange-400 font-bold"
                        : "text-white hover:text-blue-300 hover:scale-x-110 transition-all duration-300"
                    }
                  >
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Link href="/login">
                      <button className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-md py-2 px-4 text-white hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-400">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration">
                      <button className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-md py-2 px-4 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400">
                        Register
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
