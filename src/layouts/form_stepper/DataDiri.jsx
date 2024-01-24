import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/stepper";

const DataDiri = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !email || !birth || !address || !whatsapp || !gender) {
      window.alert("Semua data harus di isi!");
    } else {
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("birth", birth);
      localStorage.setItem("address", address);
      localStorage.setItem("whatsapp", whatsapp);
      localStorage.setItem("gender", gender);
      localStorage.setItem("islogin", true);

      navigate("/data_pendidikan");
    }
  };

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/data_pendidikan");
  };

  return (
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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: Almaditha Dara Tivani"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: almaditha@gmail.com"
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
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="contoh: 081234567890"
              required=""
            />
          </div>
          <div className="text-left ">
            <label
              htmlFor="gender"
              className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Jenis Kelamin
            </label>
            <input
              type="radio"
              name="gender"
              id="gender"
              onChange={() => setGender("Laki-Laki")}
              className="mr-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            Laki-Laki
            <input
              type="radio"
              name="gender"
              id="gender"
              onChange={() => setGender("Perempuan")}
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
  );
};

export default DataDiri;
