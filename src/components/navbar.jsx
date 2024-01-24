import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_rspb from "../assets/logo_rspb.jpg";

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
          <img className="pl-5" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img
              src={logo_rspb}
              className="mr-3 h-6 sm:h-14"
              alt="Portal Career"
            />
          </span>
        </Link>
        <div id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {" "}
            {storedLogin === "false" ? (
              <>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 text-gray-900  hover:bg-gray-100 rounded-lg md:hover:bg-transparent hover:text-[#0b4d8c] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Daftar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-white bg-[#0b4d8c] hover:bg-[#072e54] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#0b4d8c] dark:hover:bg-[#0b4d8c] dark:focus:ring-blue-800">
                    Masuk
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/career"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Daftar Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profil"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={logOut}
                    className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#0b4d8c] dark:hover:bg-[#0b4d8c] dark:focus:ring-blue-800">
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
