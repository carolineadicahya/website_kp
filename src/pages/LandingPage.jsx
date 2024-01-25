// import React from "react";
// import { useNavigate } from "react-router-dom";

// import gambar1 from "../assets/gambar1.jpg";
// import gambar2 from "../assets/gambar2.jpg";
// import gambar3 from "../assets/gambar3.jpg";
// import gambar4 from "../assets/gambar4.jpg";
// import gambar5 from "../assets/gambar5.jpg";
// import background from "../assets/background.jpg";

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate("/career");
//   };

//   return (
//     <section className="mt-20">
//       <div className="flex items-center justify-center">
//         <div className="max-w-xl p-6 ">
//           <h1 className="text-l font-bold mb-4 text-[#0b4d8c]">
//             Portal Career
//           </h1>
//           <p className="text-[#3c4043] text-m mb-6">
//             Selamat Datang di Portal Career! Portal Career adalah Website
//             Pendaftaran Magang Online untuk memudahkan siswa-siswi SMK dan
//             mahasiswa-mahasiswi dalam mendaftar magang atau kerja praktik (KP)
//             secara online di Rumah Sakit Pertamina Balikpapan.
//           </p>

//           <img className="mb-4 rounded-lg" src={background} alt="Pemanis" />

//           <button
//             onClick={handleGetStarted}
//             className="bg-[#0b4d8c] text-white px-4 py-2 rounded-md hover:bg-[#a6d16a] hover:text-[#3c4043]">
//             Lihat Program
//           </button>
//         </div>
//       </div>
//       <div className="flex justify-between gap-4">
//         <div className="items-center justify-left">
//           <div className="max-w-xl p-6 bg-[#c5dcf163] pb-20 rounded-lg">
//             <h4 className="text-4xl font-bold text-[#0b4d8c] mb-4">
//               Apa Saja Syaratnya?
//             </h4>
//             <div className="ml-12 text-left text-gray-600 mb-8 ">
//               <li>Surat Pengantar</li>
//               <li>Pas Foto 4 x 3 berlatar</li>
//             </div>
//           </div>
//         </div>
//         <div className="items-center justify-left">
//           <div className="max-w-xl p-6 bg-[#c5dcf163] pb-20 rounded-lg">
//             <h4 className="text-4xl font-bold text-[#0b4d8c] mb-4">
//               Apa yang Didapatkan?
//             </h4>
//             <div className="ml-12 text-left text-gray-600 mb-8">
//               <li>Ilmu yang bermanfaat</li>
//               <li>Sertifikat Magang</li>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import ilust from "../assets/ilust.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/career");
  };

  return (
    <section className="container mx-auto mt-24 flex flex-col items-center justify-center bg-cover bg-center ">
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
            className="flex justify-start bg-[#0b4d8c] text-white px-6 py-3 rounded-md hover:bg-[#072e54] hover:text-white dark:bg-[#c5e09c] dark:hover:bg-[#a6d16a] dark:hover:text-[#072e54] dark:text-[#072e54]">
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
        <div className="max-w-md p-6 bg-[#d6e6f57a] dark:bg-[#1f221b] pb-10 md:pb-20 rounded-lg ">
          <h4 className="text-2xl md:text-4xl font-bold text-[#0b4d8c] mb-4 dark:text-[#d9ebbd]">
            Apa Saja Syaratnya?
          </h4>
          <div className="ml-4 md:ml-8 text-left text-[#3c4043] mb-8 dark:text-white">
            <li>Surat Pengantar</li>
            <li>Pas Foto 4 x 3 berlatar</li>
          </div>
        </div>

        <div className="max-w-md p-6 bg-[#d6e6f57a] dark:bg-[#1f221b] pb-10 md:pb-20 rounded-lg ">
          <h4 className="text-2xl md:text-4xl font-bold text-[#0b4d8c] mb-4 dark:text-[#d9ebbd]">
            Apa yang Didapatkan?
          </h4>
          <div className="ml-4 md:ml-8 text-left text-[#3c4043] mb-8 dark:text-white">
            <li>Ilmu yang bermanfaat</li>
            <li>Sertifikat Magang</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
