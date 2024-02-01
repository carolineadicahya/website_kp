import React from "react";
import { useNavigate } from "react-router-dom";
import { exportToExcel } from "react-easy-export";
import NavigationBar from "../components/navbar";

import gambar1 from "../assets/gambar1.jpg";
import gambar2 from "../assets/gambar2.jpg";
import gambar4 from "../assets/gambar4.jpg";

const SDM = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/detail_peserta");
  };

  const dataPeserta = [
    ["Nama", "Tingkat Pendidikan", "Institusi", "Department", "Periode"],
    [
      "Almaditha Dara",
      "S1",
      "ITK",
      "IT",
      "11 Desember 2023 - 10 Februari 2024",
    ],
    [
      "Caroline Adi Cahya",
      "S1",
      "ITK",
      "IT",
      "11 Desember 2023 - 10 Februari 2024",
    ],
    ["Anisya Indra", "S1", "ITK", "IT", "08 Januari - 10 Februari"],
  ];

  const handleExportToExcel = () => {
    exportToExcel(dataPeserta, "data_peserta.xls");
  };

  return (
    <div>
      <NavigationBar role="sdm_sekretaris" />
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-gray-800 dark:bg-gray-800 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Data Peserta
      </h4>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full flex pl-2 items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
              <span className="sr-only">Action button</span>
              Filter
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-[#d9ebbd] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Siswa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-[#d9ebbd] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Mahasiswa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-[#d9ebbd] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Diterima
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-[#d9ebbd] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Ditolak
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Selesai
                </a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative pr-2">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cari sesuatu..."
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center text-center">
                  {/* <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  /> */}
                  {/* <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label> */}
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Tingkat Pendidikan
              </th>
              <th scope="col" className="px-6 py-3">
                Institusi
              </th>
              <th scope="col" className="px-6 py-3">
                Departemen
              </th>
              <th scope="col" className="px-6 py-3">
                Periode
              </th>
              <th scope="col" className="px-6 py-3">
                Detail Peserta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={gambar4}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Almaditha Dara</div>
                  <div className="font-normal text-gray-500">
                    alma.nyenye.com
                  </div>
                </div>
              </th>
              <td className="text-center px-6 py-4">S1</td>
              <td className="text-center px-6 py-4">ITK</td>
              <td className="text-center px-6 py-4">IT</td>
              <td className="text-center px-6 py-4">
                11 Desember 2023 - 10 Februari 2024
              </td>
              <td className="px-6 py-4">
                {/* <!-- Modal toggle --> */}
                <a
                  type="button"
                  onClick={handleGetStarted}
                  data-modal-target="editUserModal"
                  data-modal-show="editUserModal"
                  className="text-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Detail
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={gambar1}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    Caroline Adi Cahya
                  </div>
                  <div className="font-normal text-gray-500">
                    oyin.nyenye.com
                  </div>
                </div>
              </th>
              <td className="text-center px-6 py-4">S1</td>
              <td className="text-center px-6 py-4">ITK</td>
              <td className="text-center px-6 py-4">IT</td>
              <td className="text-center px-6 py-4">
                11 Desember 2023 - 10 Februari 2024
              </td>
              <td className="px-6 py-4">
                {/* <!-- Modal toggle --> */}
                <a
                  href="#"
                  type="button"
                  data-modal-show="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Detail
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={gambar2}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Anisya Indra </div>
                  <div className="font-normal text-gray-500">
                    alma.nyenye.com
                  </div>
                </div>
              </th>
              <td className="text-center px-6 py-4">S1</td>
              <td className="text-center px-6 py-4">ITK</td>
              <td className="text-center px-6 py-4">IT</td>
              <td className="text-center px-6 py-4">
                08 Januari - 10 Februari
              </td>
              <td className="px-6 py-4">
                {/* <!-- Modal toggle --> */}
                <a
                  href="#"
                  type="button"
                  data-modal-show="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Detail
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Edit user modal --> */}
        <div
          id="editUserModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            {/* ... (modal content) ... */}
          </div>
        </div>
        <div className="flex justify-end  mt-2 mb-2 mr-2">
          <button
            onClick={handleExportToExcel}
            className="bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 rounded-md">
            Export Excel
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SDM;
