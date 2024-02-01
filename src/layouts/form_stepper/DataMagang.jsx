import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import NavigationBar from "../../components/navbar";
import Datepicker from "react-tailwindcss-datepicker";

const DataMagang = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [durasiMagang, setDurasiMagang] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInterestChange = (event) => {
    setSelectedInterest(event.target.value);
  };

  const handleDurasiMagangChange = (event) => {
    setDurasiMagang(event.target.value);
  };

  const handleDateChange = (newValue) => {
    setDateRange(newValue);
  };

  // Fungsi untuk menangani saat tombol "Get Started" diklik
  const handleGetStarted = () => {
    navigate("/lampiran");
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/peserta/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departemen: selectedOption,
          bidang_minat: selectedInterest,
          durasi_magang: durasiMagang,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          // tambahkan data formulir lainnya yang diperlukan oleh backend
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan data pendidikan");
      }

      // Jika sukses, navigasikan pengguna ke halaman data magang
      navigate("/lampiran");
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      // Tangani kesalahan, misalnya tampilkan pesan kepada pengguna
    }
  };

  return (
    <div>
      <NavigationBar role="peserta" />
      <div className="mt-20">
        <CustomStepper activeStep={2} />
        <form onSubmit={handleSubmit}>
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
            Data Magang
          </h3>
          <div className="grid gap-4 mb-4 ">
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
              {selectedOption === "IT" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Sofware">Sofware</option>
                  <option value="Hardware">Hardware</option>
                </select>
              )}
              {/* Teknik */}
              {selectedOption === "Teknik" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Sipil">Sipil</option>
                  <option value="Listrik">Listrik</option>
                  <option value="Elektromedik">Elektromedik</option>
                  <option value="Teknik Pendingin">Teknik Pendingin</option>
                  <option value="Telekomunikasi">Telekomunikasi</option>
                </select>
              )}
              {/* SDM */}
              {selectedOption === "SDM" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Human Resource">Human Resource</option>
                </select>
              )}
              {/* Keuangan */}
              {selectedOption === "Keuangan" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Treasury">Treasury</option>
                  <option value="Piutang">Piutang</option>
                  <option value="Controller">Controller</option>
                </select>
              )}
              {/* Farmasi */}
              {selectedOption === "Farmasi" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Apotek">Apotek</option>
                  <option value="Gudang">Gudang</option>
                </select>
              )}
              {/* Gizi */}
              {selectedOption === "Gizi" && (
                <select
                  name="bidang_minat"
                  id="bidang_minat"
                  value={selectedInterest}
                  onChange={handleInterestChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Pilih Bidang Minat</option>
                  <option value="Gizi">Gizi</option>
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
                value={durasiMagang}
                onChange={handleDurasiMagangChange}
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
          </div>
          <div className="flex justify-between">
            <a
              onClick={() => navigate(-1)}
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Kembali
            </a>
            <button
              onClick={handleGetStarted}
              className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Selanjutnya: Lampiran
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataMagang;
