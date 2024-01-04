import React from "react";
import { useNavigate } from "react-router-dom";

import gambar1 from "../assets/gambar1.jpg";
import gambar2 from "../assets/gambar2.jpg";
import gambar3 from "../assets/gambar3.jpg";
import gambar4 from "../assets/gambar4.jpg";
import gambar5 from "../assets/gambar5.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/career");
  };

  return (
    <section className="mt-20">
      <div className="max-h-screen items-center justify-center bg-gray-100">
        <div className="max-w-xl p-6 bg-white">
          <h1 className="text-4xl font-bold mb-4">Portal Career</h1>
          <p className="text-gray-600 mb-8">
            Welcome to our career portal! Explore exciting opportunities and
            take the next step in your career.
          </p>
          <div>
            <div
              id="animation-carousel"
              className="relative w-full"
              data-carousel="static">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div
                  className="hidden duration-200 ease-linear"
                  data-carousel-item>
                  <img
                    src={gambar1}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Image 1"
                  />
                </div>
                {/* Item 2 */}
                <div
                  className="hidden duration-200 ease-linear"
                  data-carousel-item>
                  <img
                    src={gambar2}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Image 2"
                  />
                </div>
                {/* Item 3 */}
                <div
                  className="hidden duration-200 ease-linear"
                  data-carousel-item="active">
                  <img
                    src={gambar3}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Image 3"
                  />
                </div>
                {/* Item 4 */}
                <div
                  className="hidden duration-200 ease-linear"
                  data-carousel-item>
                  <img
                    src={gambar4}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Image 4"
                  />
                </div>
                {/* Item 5 */}
                <div
                  className="hidden duration-200 ease-linear"
                  data-carousel-item>
                  <img
                    src={gambar5}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="Image 5"
                  />
                </div>
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

          <button
            onClick={handleGetStarted}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Lihat Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
