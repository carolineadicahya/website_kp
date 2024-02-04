// Import useState dan useNavigate dari react-router-dom
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import NavigationBar from "../../components/navbar";

const DataPendidikan = () => {
  // Menggunakan useNavigate untuk navigasi
  const navigate = useNavigate();

  // State untuk menyimpan nilai dari form
  const [selectedOption, setSelectedOption] = useState("");
  const [tingkatPendidikan, setTingkatPendidikan] = useState("");
  const [institusi, setInstitusi] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [programStudi, setProgramStudi] = useState("");
  const [nomorInduk, setNomorInduk] = useState("");
  const [errorText, setErrorText] = useState("");


  // Fungsi untuk menangani perubahan pada input kategori pendidikan
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Fungsi untuk menangani saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOption || !tingkatPendidikan || !institusi || !jurusan || !nomorInduk) {
      setErrorText("Harap lengkapi semua kolom.");
    }
      else {
        setErrorText("");
      try {
        // Simpan data formulir
        localStorage.setItem("dataPendidikan", JSON.stringify({ selectedOption, tingkatPendidikan, institusi, jurusan, programStudi, nomorInduk }));
        navigate("/data_magang");
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message);

        // Tangani kesalahan, misalnya tampilkan pesan kepada pengguna
      }
    }
  };



  return (
    <div>
      <NavigationBar role="peserta" />
      <div className="mt-20">
        <CustomStepper activeStep={1} />
        <form onSubmit={handleSubmit}>
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
                name="kategori_pendidikan"
                id="kategori_pendidikan"                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedOption}
                onChange={handleChange}>
                <option value="">Pilih Jenis Pendidikan</option>
                <option value="Mahasiswa">Mahasiswa</option>
                <option value="Pelajar">Pelajar</option>
              </select>
            </div>

            {selectedOption === "Mahasiswa" && (
              <div>
                <label
                  htmlFor="tingkat_pendidikan"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tingkat Pendidikan
                </label>
                <select
                  name="tingkat_pendidikan"
                  id="tingkat_pendidikan"
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={tingkatPendidikan}
                  onChange={(e) => setTingkatPendidikan(e.target.value)}>
                  <option value="">Pilih Tingkat Pendidikan</option>
                  <option value="D3">D3</option>
                  <option value="D4">D4</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
                  <option value="S3">S3</option>
                </select>

                <label
                  htmlFor="institusi"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Institusi
                </label>
                <input
                  type="text"
                  name="institusi"
                  id="institusi"
                  value={institusi}
                  onChange={(e) => setInstitusi(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: Institut Teknologi Sepuluh November"
                />

                <label
                  htmlFor="jurusan"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Fakultas/Jurusan
                </label>
                <input
                  type="text"
                  name="jurusan"
                  id="jurusan"
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: Fakultas Teknik Industri"
                />

                <label
                  htmlFor="program_studi"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Program Studi
                </label>
                <input
                  type="text"
                  name="program_studi"
                  id="program_studi"
                  value={programStudi}
                  onChange={(e) => setProgramStudi(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: Teknik Mesin"
                />

                <label
                  htmlFor="nomor_induk"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nomor Induk Mahasiswa
                </label>
                <input
                  type="text"
                  name="nomor_induk"
                  id="nomor_induk"
                  value={nomorInduk}
                  onChange={(e) => setNomorInduk(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: 1122334455"
                />
              </div>
            )}

            {selectedOption === "Pelajar" && (
              <div>
                <label
                  htmlFor="tingkat_pendidikan"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Tingkat Pendidikan
                </label>
                <select
                  name="tingkat_pendidikan"
                  id="tingkat_pendidikan"
                  value={tingkatPendidikan}
                  onChange={(e) => setTingkatPendidikan(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="">Pilih Tingkat Pendidikan</option>
                  <option value="SMK">SMK</option>
                </select>

                <label
                  htmlFor="institusi"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Sekolah
                </label>
                <input
                  type="text"
                  name="institusi"
                  id="institusi"
                  value={institusi}
                  onChange={(e) => setInstitusi(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: SMKN 7 Balikpapan"
                />

                <label
                  htmlFor="jurusan"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Jurusan
                </label>
                <input
                  type="text"
                  name="jurusan"
                  id="jurusan"
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                  className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: Teknik Mesin"
                />

                <label
                  htmlFor="nomor_induk"
                  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nomor Induk Siswa
                </label>
                <input
                  type="text"
                  name="nomor_induk"
                  id="nomor_induk"
                  value={nomorInduk}
                  onChange={(e) => setNomorInduk(e.target.value)}
                  className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="contoh: 1122334455"
                />
              </div>
            )}
          </div>
          <div className="mb-4 flex justify-between">
            <a
              onClick={() => navigate(-1)}
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Kembali
            </a>
            <button
            type="submit"
              // onClick={handleGetStarted}
              className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Selanjutnya: Data Magang
            </button>
          </div> 
        </form>
      </div>
    </div>
  );
};

export default DataPendidikan;
