import React from "react";
import { useNavigate } from "react-router-dom";

const DaftarProgram = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <section className="">
      <div className="mb-8 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Daftar Program
      </div>
      <button
        onClick={handleGetStarted}
        className="px-40 py-40 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Magang atau Kerja Praktik (KP)
      </button>
    </section>
  );
};
export default DaftarProgram;
