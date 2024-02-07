import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import NavigationBar from "../../components/navbar";


const DataDiri = () => {
  const [nama, setNama] = useState("");
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noWhatsapp, setNoWhatsapp] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !alamat || !noWhatsapp || !tempatTanggalLahir || !jenisKelamin) {
      window.alert("Semua data harus di isi!");
      return;
    }
      try {
        // Simpan data formulir
        localStorage.setItem("dataDiri", JSON.stringify({ nama, tempatTanggalLahir, alamat, noWhatsapp, jenisKelamin }));
        navigate("/data_pendidikan");
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        // Tangani kesalahan, misalnya tampilkan pesan kepada pengguna
      }
  };


  // Fungsi untuk menangani perubahan input dan memperbarui status formulir
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullname") setNama(value);
    else if (name === "text") setTempatTanggalLahir(value);
    else if (name === "alamat") setAlamat(value);
    else if (name === "whatsapp") setNoWhatsapp(value);
    else if (name === "gender") setJenisKelamin(value);
  };

  const handleGenderChange = (e) => {
    setJenisKelamin(e.target.value);
  };

  // const handleGetStarted = () => {
  //   setErrorText(""); // Menghapus pesan kesalahan sebelum memeriksa input
  
  //   if (!nama) {
  //     setErrorText("Kolom Nama Lengkap harus diisi");
  //     return;
  //   }
  //   if (!tempatTanggalLahir) {
  //     setErrorText("Kolom Tempat, Tanggal Lahir harus diisi");
  //     return;
  //   }
  //   if (!alamat) {
  //     setErrorText("Kolom Alamat harus diisi");
  //     return;
  //   }
  //   if (!noWhatsapp) {
  //     setErrorText("Kolom Nomor Whatsapp harus diisi");
  //     return;
  //   }
  //   if (!jenisKelamin) {
  //     setErrorText("Pilih salah satu jenis kelamin");
  //     return;
  //   }
  // };
  

  return (
    <div>
      <NavigationBar role="peserta" />
    <div className="mt-20">
      <CustomStepper activeStep={0} />
      <form onSubmit={handleSubmit}>
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
          Data Diri
        </h3>
        <div className="grid gap-4 mb-4 ">
          <div>
            <label
              htmlFor="fullname"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={nama}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Almaditha Dara Tivani"
              required=""
            />
            <span id="fullname-error" className="text-red-500 text-sm hidden">Kolom ini harus diisi</span>
          </div>
          <div>
            <label
              htmlFor="TTL"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tempat, Tanggal Lahir
            </label>
            <input
              type="text"
              name="text"
              id="text"
              value={tempatTanggalLahir}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Balikpapan, 01 Januari 2000"
              required=""
            />
            <span id="text-error" className="text-red-500 text-sm hidden">Kolom ini harus diisi</span>
          </div>
          <div>
            <label
              htmlFor="alamat"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              id="alamat"
              value={alamat}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Jl No.Rumah No.RT, Kelurahan, Kecamatan"
              required=""
            />
            <span id="alamat-error" className="text-red-500 text-sm hidden">Kolom ini harus diisi</span>
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nomor Whatsapp
            </label>
            <p id="helper-text-explanation" class="text-left text-sm text-gray-500 dark:text-gray-400">Harus gunakan +62 ...</p>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              value={noWhatsapp}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: +6281234567890"
              required=""
            />
            <span id="whatsapp-error" className="text-red-500 text-sm hidden">Kolom ini harus diisi</span>
          </div>
          <div className="text-left ">
          <label
            htmlFor="genderLaki"
            className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Jenis Kelamin
          </label>
          <input
            type="radio"
            name="gender"
            id="genderLaki"
            value="Laki-Laki"
            checked={jenisKelamin === "Laki-Laki"}
            onChange={handleGenderChange}
            className="mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          Laki-Laki
          <input
            type="radio"
            name="gender"
            id="genderPerempuan"
            value="Perempuan"
            checked={jenisKelamin === "Perempuan"}
            onChange={handleGenderChange}
            className="ml-10 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          Perempuan
          <span id="gender-error" className="text-red-500 text-sm hidden">Kolom ini harus diisi</span>
        </div>
        </div>
        <div className=" flex justify-end">
          {errorText && <p className="text-red-500 text-sm mb-2">{errorText}</p>}
          <button
            // onClick={handleSubmit}
            type="submit"
            className="text-white bg-[#0b4d8c] hover:bg-[#072e54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Selanjutnya: Data Pendidikan
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default DataDiri;
