import React from "react";
import { useNavigate } from "react-router-dom";
import ilust from "../assets/ilust.png";
import NavigationBar from "../components/navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/career");
  };

  return (
 
    <section className="container mx-auto mt-24 flex flex-col items-center justify-center bg-cover bg-center ">
         <div>
    <NavigationBar role="guest" />
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="max-w-3xl p-4 md:p-10 mb-8 md:text-center">
          <h1 className="text-left text-4xl md:text-5xl dark:text-[#a6d16a] font-bold mb-4 text-[#0b4d8c]">
            Portal Career
          </h1>
          <p className="text-left text-[#3c4043] text-md md:text-lg dark:text-white mb-6">
            Selamat Datang di Portal Career! Portal Career adalah Website
            Pendaftaran Magang Online untuk memudahkan siswa-siswi SMK dan
            mahasiswa-mahasiswi dalam mendaftar magang atau kerja praktik (KP)
            secara online di Rumah Sakit Pertamina Balikpapan.
          </p>
          <button
            onClick={handleGetStarted}
            className="flex justify-start bg-[#0b4d8c] text-white px-6 py-3 rounded-md hover:bg-[#072e54] hover:text-white dark:bg-[#c5e09c] dark:hover:bg-[#a6d16a] dark:hover:text-[#111827] dark:text-[#111827]">
            Lihat Program
          </button>
        </div>
        {/* Hide image on mobile (md:image-none) */}
        <div className="hidden md:block">
          <img
            className="mb-4 rounded-lg w-full max-w-md h-auto"
            src={ilust}
            alt="Pemanis"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8 mb-10">
        <div className="max-w-md p-6 bg-[#d6e6f57a] dark:bg-[#272d3b] pb-10 md:pb-20 rounded-lg ">
          <h4 className="text-2xl md:text-4xl font-bold text-[#0b4d8c] mb-4 dark:text-[#d9ebbd]">
            Apa Saja Syaratnya?
          </h4>
          <div className="ml-4 md:ml-8 text-left text-[#3c4043] mb-8 dark:text-white">
            <li>Surat Pengantar</li>
            <li>Pas Foto 4 x 3 berlatar</li>
          </div>
        </div>

        <div className="max-w-md p-6 bg-[#d6e6f57a] dark:bg-[#272d3b] pb-10 md:pb-20 rounded-lg ">
          <h4 className="text-2xl md:text-4xl font-bold text-[#0b4d8c] mb-4 dark:text-[#d9ebbd]">
            Apa yang Didapatkan?
          </h4>
          <div className="ml-4 md:ml-8 text-left text-[#3c4043] mb-8 dark:text-white">
            <li>Ilmu yang bermanfaat</li>
            <li>Sertifikat Magang</li>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LandingPage;
