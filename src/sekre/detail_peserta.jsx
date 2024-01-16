import React from "react";

const detailPeserta = () => {
  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-left text-xl font-semibold text-black dark:text-white">
        Detail Almaditha
      </h4>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Nama
              </th>
              <td className="px-6 py-4 text-left">Almaditha Dara Tivani</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Institusi
              </th>
              <td className="px-6 py-4 text-left">
                Institut Teknologi Kalimantan
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jurusan/Fakultas
              </th>
              <td className="px-6 py-4 text-left">
                Matematika dan Teknologi Informasi
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Program Studi
              </th>
              <td className="px-6 py-4 text-left">Informatika</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Durasi
              </th>
              <td className="px-6 py-4 text-left">2 Bulan</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Periode
              </th>
              <td className="px-6 py-4 text-left">
                11 Desember 2023 - 10 Februari 2024
              </td>
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
              onClick={() => navigate()}
              className="bg-blue-500 text-white px-2 py-1 mb-6 rounded-md hover:bg-blue-600">
              Review
            </button>
          </div>
        </div>
        <div className="items-left">
          <label
            for="message"
            class="mt-5 block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white">
            Pesan
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="pesan kosong"></textarea>
          <button
            // onClick={() => navigate()}
            className="mt-3 bg-blue-500 text-white px-2 py-1 mb-3 rounded-md hover:bg-blue-600">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default detailPeserta;
