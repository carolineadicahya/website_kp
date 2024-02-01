import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";
import NavigationBar from "../../components/navbar"

const DataDiri = () => {
  const [nama, setNama] = useState("");
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noWhatsapp, setNoWhatsapp] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !alamat || !noWhatsapp || !tempatTanggalLahir || !jenisKelamin) {
      window.alert("Semua data harus di isi!");
    } else {
      try {
        const response = await fetch('http://localhost:8000/peserta/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama: nama,
            alamat: alamat,
            no_whatsapp: noWhatsapp,
            tempat_tanggal_lahir: tempatTanggalLahir,
            jenis_kelamin: jenisKelamin
          }),
        });

        if (!response.ok) {
          throw new Error('Gagal menambahkan data ke database');
        }

        const responseData = await response.json();
        console.log('Respon dari backend:', responseData);
        // Lakukan sesuatu dengan respons dari backend (opsional)

        localStorage.setItem("islogin", true);
        navigate("/data_pendidikan");
      } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        // Tangani kesalahan, misalnya tampilkan pesan kepada pengguna
      }
    }
  };

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/data_pendidikan");
  };

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
              onChange={(e) => setNama(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Almaditha Dara Tivani"
              required=""
            />
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
              onChange={(e) => setTempatTanggalLahir(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Balikpapan, 01 Januari 2000"
              required=""
            />
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
              onChange={(e) => setAlamat(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Jl No.Rumah No.RT, Kelurahan, Kecamatan"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nomor Whatsapp
            </label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              value={noWhatsapp}
              onChange={(e) => setNoWhatsapp(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: 081234567890"
              required=""
            />
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
            onChange={() => setJenisKelamin("Laki-Laki")}
            className="mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          Laki-Laki
          <input
            type="radio"
            name="gender"
            id="genderPerempuan"
            onChange={() => setJenisKelamin("Perempuan")}
            className="ml-10 mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          Perempuan
        </div>
        </div>
        <div className=" flex justify-end">
          <button
            onClick={handleGetStarted}
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
