import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";

const dataPendidikan = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGetStarted = () => {
    navigate("/data_magang");
  };

  return (
    <div>
      <CustomStepper activeStep={1} />
      <form action="">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
          Data Pendidikan
        </h3>
        <div className="grid gap-4 mb-4">
          <div className="text-left">
            <label
              htmlFor="kategori_pendidikan"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Kategori Pendidikan
            </label>
            <select
              name="options"
              id="options"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedOption}
              onChange={handleChange}>
              <option value="">Pilih Jenis Pendidikan</option>
              <option value="Mahasiswa">Mahasiswa</option>
              <option value="Pelajar">Pelajar</option>
            </select>
          </div>

          {selectedOption === "Mahasiswa" && (
            <form>
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tingkat Pendidikan
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Tingkat Pendidikan</option>
                <option value="">D3</option>
                <option value="">D4</option>
                <option value="">S1</option>
                <option value="">S2</option>
                <option value="">S3</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Universitas
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Universitas</option>
                <option value="">ITK</option>
                <option value="">UNIBA</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fakultas
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contoh: Fakultas MIPA"
              />
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Program Studi
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Program Studi</option>
                <option value="">Informatika</option>
                <option value="">Ternak Lele</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nomor Induk Mahasiswa
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contoh: 1122334455"
              />
            </form>
          )}

          {selectedOption === "Pelajar" && (
            <form>
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tingkat Pendidikan
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Tingkat Pendidikan</option>
                <option value="">SMA</option>
                <option value="">SMK</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Sekolah
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Sekolah</option>
                <option value="">SMKN 7 SAMARINDA</option>
                <option value="">SMA 10 SAMARINDA</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jurusan
              </label>
              <select
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Pilih Jurusan</option>
                <option value="">Rekayasa Perangkat Lunak</option>
                <option value="">Teknik Komputer Jaringan</option>
              </select>
              <div />
              <label
                htmlFor=""
                className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nomor Induk Siswa
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contoh: 1122334455"
              />
            </form>
          )}
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
            // type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Selanjutnya: Data Magang
          </button>
        </div>
      </form>
    </div>
  );
};

export default dataPendidikan;
