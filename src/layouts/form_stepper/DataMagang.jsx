import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";

import Datepicker from "react-tailwindcss-datepicker";

const DataMagang = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (newValue) => {
    setDateRange(newValue);
  };

  const handleGetStarted = () => {
    navigate("/lampiran");
  };

  return (
    <div className="mt-20">
      <CustomStepper activeStep={2} />
      <form action="">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
          Data Magang
        </h3>
        <div className="grid gap-4 mb-4 ">
          {/* departemen */}
          <div>
            <label
              htmlFor="departemen"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Departemen
            </label>
            <select
              name="departemen"
              id="departemen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedOption}
              onChange={handleChange}>
              <option value="">Pilih Departemen</option>
              <option value="IT">IT</option>
              <option value="Teknik">Teknik</option>
              <option value="SDM">SDM</option>
              <option value="Keuangan">Keuangan</option>
              <option value="Farmasi">Farmasi</option>
              <option value="Gizi">Gizi</option>
            </select>
          </div>

          {/* bidang minat */}
          <div>
            <label
              htmlFor="bidang_minat"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bidang Minat
            </label>

            {/* IT */}
            {selectedOption === "IT" && (
              <select
                name="bidang_minat"
                id="bidang_minat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Bidang Minat</option>
                <option value="">Sofware</option>
                <option value="">Hardware</option>
              </select>
            )}

            {/* Teknik */}
            {selectedOption === "Teknik" && (
              <select
                name="bidang_minat"
                id="bidang_minat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Bidang Minat</option>
                <option value="">Sipil</option>
                <option value="">Listrik</option>
                <option value="">Elektromedik</option>
                <option value="">Teknik Pendingin</option>
                <option value="">Telekomunikasi</option>
              </select>
            )}

            {/* SDM */}
            {selectedOption === "SDM" && (
              <select>
                <option value="">Pilih Bidang Minat</option>
                <option value="">Human Resource</option>
              </select>
            )}

            {/* Keuangan */}
            {selectedOption === "Keuangan" && (
              <select>
                <option value="">Pilih Bidang Minat</option>
                <option value="">Treasury</option>
                <option value="">Piutang</option>
                <option value="">Controller</option>
              </select>
            )}

            {/* Farmasi */}
            {selectedOption === "Farmasi" && (
              <select>
                <option value="">Pilih Bidang Minat</option>
                <option value="">Apotek</option>
                <option value="">Gudang</option>
              </select>
            )}

            {/* Gizi */}
            {selectedOption === "Gizi" && (
              <select>
                <option value="">Pilih Bidang Minat</option>
                <option value="">Gizi</option>
              </select>
            )}
          </div>

          {/* durasi magang */}
          <div>
            <label
              htmlFor="durasi_magang"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Durasi Magang
            </label>
            <input
              type="text"
              name="durasi_magang"
              id="durasi_magang"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: 2 Bulan"
              required=""
            />
          </div>

          {/* tanggal mulai */}
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="tanggal_mulai"
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tanggal Mulai
              </label>
              <Datepicker
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                useRange={false}
                asSingle={true}
                displayFormat="DD/MM/YYYY"
                value={dateRange.startDate}
                onChange={(newValue) =>
                  handleDateChange({ ...dateRange, startDate: newValue })
                }
                type="date"
                placeholder="Masukkan Tanggal"
              />
            </div>

            {/* tanggal selesai */}
            <div>
              <label
                htmlFor="tanggal_selesai"
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tanggal Selesai
              </label>
              <Datepicker
                useRange={false}
                asSingle={true}
                displayFormat="DD/MM/YYYY"
                value={dateRange.endDate}
                onChange={(newValue) =>
                  handleDateChange({ ...dateRange, endDate: newValue })
                }
                type="date"
                placeholder="Masukkan Tanggal"
              />
            </div>
          </div>

          {/* tombol */}
        </div>
        <div className="flex justify-between">
          <a
            onClick={() => navigate(-1)}
            // type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Kembali
          </a>
          <button
            onClick={handleGetStarted}
            // types="submit"
            className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selanjutnya: Lampiran
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataMagang;
