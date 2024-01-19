import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite";

import gambar1 from "../assets/gambar1.jpg";
import gambar2 from "../assets/gambar2.jpg";
import gambar3 from "../assets/gambar3.jpg";
import gambar4 from "../assets/gambar4.jpg";
import gambar5 from "../assets/gambar5.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const carousel = new Carousel(
      document.getElementById("animation-carousel"),
      {}
    );

    carousel.cycle();
  }, []);

  const handleGetStarted = () => {
    navigate("/career");
  };

  return (
    <section className="mt-20">
      <div className="max-h-screen flex items-center justify-center ">
        <div className="max-w-xl p-6 bg-white">
          <h1 className="text-l font-bold mb-4 text-[#0b4d8c]">
            Portal Career
          </h1>
          <p className="text-[#3c4043] text-m mb-8">
            Selamat Datang di Portal Career! Portal Career adalah Website
            Pendaftaran Magang Online untuk memudahkan siswa-siswi SMK dan
            mahasiswa-mahasiswi dalam mendaftar magang atau kerja praktik (KP)
            secara online di Rumah Sakit Pertamina Balikpapan.
          </p>
          <div>
            <div
              id="animation-carousel"
              className="relative w-full"
              data-carousel="static">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div data-carousel-item>
                  <img
                    src={gambar1}
                    className="w-full h-full object-cover"
                    alt="Image 1"
                  />
                </div>
                {/* Item 2 */}
                <div data-carousel-item>
                  <img
                    src={gambar2}
                    className="w-full h-full object-cover"
                    alt="Image 2"
                  />
                </div>
                {/* Item 3 */}
                <div data-carousel-item="active">
                  <img
                    src={gambar3}
                    className="w-full h-full object-cover"
                    alt="Image 3"
                  />
                </div>
                {/* Item 4 */}
                <div data-carousel-item>
                  <img
                    src={gambar4}
                    className="w-full h-full object-cover"
                    alt="Image 4"
                  />
                </div>
                {/* Item 5 */}
                <div data-carousel-item>
                  <img
                    src={gambar5}
                    className="w-full h-full object-cover"
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
            className="bg-[#0b4d8c] text-white px-4 py-2 rounded-md hover:bg-[#a6d16a] hover:text-[#3c4043]">
            Lihat Program
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center justify-left border mr-4">
          <div className="max-w-xl p-6">
            <h4 className="text-4xl font-bold text-[#0b4d8c] mb-4">
              Apa Saja Syaratnya?
            </h4>
            <p className="text-center text-gray-600 mb-8">
              <ol>Surat Pengantar </ol>
              <ol>Pas Foto 4x6</ol>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-left border ml-4">
          <div className="max-w-xl p-6">
            <h4 className="text-4xl font-bold text-[#0b4d8c] mb-4">
              Apa yang Didapatkan?
            </h4>
            <p className="text-center text-gray-600 mb-8">
              <ol>Ilmu yang bermanfaat </ol>
              <ol>Sertifikat Magang</ol>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
