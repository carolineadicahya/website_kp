import React from "react";
import { useNavigate } from "react-router-dom";
import daftar_program from "../assets/daftar_program.png";

const DaftarProgram = () => {
  const navigate = useNavigate();
  const storedLogin = localStorage.getItem("islogin");

  const handleGetStarted = () => {
    storedLogin === "true" ? navigate("/data_diri") : navigate("/login");
  };

  return (
    <section className="mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-[#0b4d8c] dark:text-[#c5e09c]">
        Daftar Program
      </h1>
      <div className="mb-12 md:mb-0 md:w-4/5 lg:w-3/5">
        <button
          onClick={handleGetStarted}
          className="text-2xl bg-[#0b4d8c] text-white rounded-md hover:bg-white hover:text-[#74914a] mx-auto text-center p-4 dark:bg-[#343730] dark:hover:bg-[#1f221b] dark:hover:text-white"
          style={{ width: "fit-content", maxWidth: "300px" }}>
          <img src={daftar_program} className="w-full mb-4" alt="magang" />
          Magang atau Kerja Praktik (KP)
        </button>
      </div>
    </section>
  );
};

export default DaftarProgram;
