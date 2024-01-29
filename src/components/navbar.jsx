import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_rspb from "../assets/logo_rspb.png";

const NavigationBar = () => {
  const storedLogin = localStorage.getItem("islogin");
  const navigate = useNavigate();

  function logOut() {
    localStorage.setItem("islogin", "false");
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen p-4 flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo_rspb}
            className="mr-3 h-6 sm:h-14 rounded-full"
            alt="Portal Career"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div id="navbar-sticky" className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {storedLogin === "false" ? (
              <>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 mb-1 text-gray-900 hover:bg-gray-100 rounded-lg md:hover:bg-transparent hover:text-[#0b4d8c] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Daftar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-white bg-[#0b4d8c] hover:bg-[#072e54] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#c5e09c] dark:hover:bg-[#a6d16a] dark:hover:text-[#111827] dark:text-[#111827]">
                    Masuk
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/career"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-[#0b4d8c] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Daftar Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profil"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-[#0b4d8c] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#a6d16a] md:dark:hover:bg-transparent dark:border-gray-700">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-[#0b4d8c] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#a6d16a] md:dark:hover:bg-transparent dark:border-gray-700 mb-2">
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={logOut}
                    className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#c5e09c] dark:hover:bg-[#a6d16a] dark:hover:text-[#072e54] dark:text-[#072e54]">
                    Keluar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
