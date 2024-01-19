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
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-[#0b4d8c]">Daftar Program</h1>
      <div className="flex justify-center items-center mb-12 md:mb-0 md:w-4/12 lg:w-4/14">
        <button
          onClick={handleGetStarted}
          className="text-2xl bg-[#0b4d8c] text-white rounded-md hover:bg-white hover:text-[#74914a] mx-auto text-center"
          style={{ width: "fit-content" }}>
          <img
            src={daftar_program}
            className="w-3/4 mb-4 mx-auto"
            alt="magang"
          />
          Magang atau Kerja Praktik (KP)
        </button>
      </div>
    </section>
  );
};

export default DaftarProgram;
