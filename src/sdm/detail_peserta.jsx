import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navbar";

const SDMDetail = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/surat_balasan");
  };

  var nama = "Almaditha Dara Tivani";
  var institusi = "Institut Teknologi Kalimanatan";
  var jurusan_fakultas = "Matematika dan Teknologi Informasi";
  var prodi = "Informatika";
  var durasi = "2 Bulan";
  var periode = "11 Desember 2023 - 10 Februari 2024";
  var keterangan = "diterima tapi pangkas waktunya";

  return (
    <div>
      <NavigationBar role="sdm_sekretaris" />
    <div className="mt-28 mb-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-gray-800 dark:bg-gray-800 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-left text-xl font-semibold text-black dark:text-white">
        Detail {nama}
      </h4>
      <div class="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Nama
              </th>
              <td className="px-6 py-4 text-left">{nama}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Institusi
              </th>
              <td className="px-6 py-4 text-left">{institusi}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jurusan/Fakultas
              </th>
              <td className="px-6 py-4 text-left">{jurusan_fakultas}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Program Studi
              </th>
              <td className="px-6 py-4 text-left">{prodi}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Durasi
              </th>
              <td className="px-6 py-4 text-left">{durasi}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Periode
              </th>
              <td className="px-6 py-4 text-left">{periode}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Keterangan
              </th>
              <td className="px-6 py-4 text-left">{keterangan}</td>
            </tr>
          </tbody>
        </table>
        <div className="py-2">
          <p className="px-6 py-2 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white underline">
            Surat Pengantar
          </p>
          <p className="px-6 py-1 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white underline">
            Pas Foto
          </p>
        </div>
        <div>
          <h4 className="mt-8 mb-3 text-left text-xl font-semibold text-black dark:text-white">
            Status
          </h4>
          <div className="items-left">
            <button
              onClick={handleGetStarted}
              className="bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 mb-6 rounded-md">
              Terima
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-red-500 text-white px-2 py-1 mb-6 rounded-md hover:bg-red-600">
              Tolak
            </button>
          </div>
        </div>
        <div className="items-left">
          <label
            for="message"
            className="mt-5 block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white">
            Pesan
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="pesan kosong"></textarea>
          <button
            // onClick={() => navigate()}
            className="mt-3 bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 mb-3 rounded-md">
            Kirim
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SDMDetail;
