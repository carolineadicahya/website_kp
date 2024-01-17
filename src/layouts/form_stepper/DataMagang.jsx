import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "flowbite-datepicker/DateRangePicker";

const dataMagang = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleGetStarted = () => {
    navigate("/lampiran");
  };

  return (
    <div>
      <CustomStepper activeStep={2} />
      <form action="">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
          Data Magang
        </h3>
        <div className="grid gap-4 mb-4 ">
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
          <div>
            <label
              htmlFor="tanggal_mulai"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tanggal Mulai
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanggal Mulai"
            />
          </div>
          <div>
            <label
              htmlFor="tanggal_selesai"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tanggal Selesai
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tanggal Selesai"
            />
          </div>
          <div>
            <label
              htmlFor="departemen"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Departemen
            </label>
            <select
              name="departemen"
              id="departemen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Pilih Departemen</option>
              <option value="">IT</option>
              <option value="">Teknik</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="bidang_minat"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bidang Minat
            </label>
            <select
              name="bidang_minat"
              id="bidang_minat"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Pilih Bidang Minat</option>
              <option value="">Sofware</option>
              <option value="">Hardware</option>
              <option value="">Kelistrikan</option>
            </select>
          </div>
        </div>
        <div className="flex flex-items">
          <a
            onClick={() => navigate(-1)}
            // type="submit"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Kembali
          </a>
          <button
            onClick={handleGetStarted}
            // types="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selanjutnya: Lampiran
          </button>
        </div>
      </form>
    </div>
  );
};

export default dataMagang;
