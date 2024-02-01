import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import NavigationBar from "../../components/navbar";

const DataLampiran = () => {
  const navigate = useNavigate();
  const [fileSuratPengantar, setFileSuratPengantar] = useState(null);
  const [filePasFoto, setFilePasFoto] = useState(null);

  const handleFileSuratPengantarChange = (event) => {
    setFileSuratPengantar(event.target.files[0]);
  };

  const handleFilePasFotoChange = (event) => {
    setFilePasFoto(event.target.files[0]);
  };

  const handleGetStarted = async () => {
    try {
      const formData = new FormData();
      formData.append("pdfFile", fileSuratPengantar);
      formData.append("imageFile", filePasFoto);

      const response = await fetch("/api/uploadLampiran", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/dashboard");
      } else {
        const data = await response.json();
        console.error("Error:", data.message);
        // Tampilkan pesan error kepada pengguna
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Tangani error
    }
  };

  return (
    <div>
      <NavigationBar role="peserta" />
      <div className="mt-20">
        <CustomStepper activeStep={3} />
        <form>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
            Lampiran
          </h3>
          <div className="grid gap-4 mb-4 ">
            <div>
              <label
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="surat_pengantar">
                Unggah Surat Pengantar
              </label>
              <input
                aria-describedby="surat_pengantar_input_help"
                id="surat_pengantar"
                type="file"
                onChange={handleFileSuratPengantarChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p
                className="mt-1 text-left text-sm text-gray-500 dark:text-gray-300"
                id="surat_pengantar_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div>
              <label
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="pas_foto">
                Unggah Pas Foto 3x4 Latar
              </label>
              <input
                aria-describedby="pas_foto_input_help"
                id="pas_foto"
                type="file"
                onChange={handleFilePasFotoChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p
                className="mt-1 text-left text-sm text-gray-500 dark:text-gray-300"
                id="pas_foto_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <a
              onClick={() => navigate(-1)}
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Kembali
            </a>
            <button
              type="button"
              onClick={handleGetStarted}
              className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataLampiran;
