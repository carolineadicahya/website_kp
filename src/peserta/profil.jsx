import  React, {useState, useEffect } from "react";
import NavigationBar from "../components/navbar";
import Loader from "../components/loader";

const ProfilPeserta = () => {
  const [peserta, setPeserta] = useState(null);

  useEffect(() => {
    const fetchPesertaById = async () => {
      try {
        const token = localStorage.getItem("token");

        // Ganti URL dengan URL endpoint yang sesuai di backend Anda
        const response = await fetch(`http://localhost:8000/user/token/${token}`, {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setPeserta(data); // Sesuaikan dengan struktur data yang diterima dari backend
        } else {
          throw new Error("Gagal mengambil data peserta");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchPesertaById();
  }, []);

  if (!peserta) {
    return <div>
      <Loader />
    </div>; // Tampilkan indikator loading saat data sedang dimuat
  }

  function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
  }  

  
  return (
    <div>
      <NavigationBar role="peserta" />
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 dark:bg-gray-700 pt-6 pb-2.5 shadow-default dark:border-gray-700 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Profil
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
              <td className="px-6 py-4 text-left dark:text-white">{peserta.data?.Peserta[0]?.nama || "-"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Institusi
              </th>
              <td className="px-6 py-4 text-left dark:text-white">
                {peserta.data?.Peserta[0]?.institusi || "-"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jurusan/Fakultas
              </th>
              <td className="px-6 py-4 text-left dark:text-white">
                {peserta.data?.Peserta[0]?.jurusan || "-"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Program Studi
              </th>
              <td className="px-6 py-4 text-left dark:text-white">{peserta.data?.Peserta[0]?.program_studi || "-"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Durasi
              </th>
              <td className="px-6 py-4 text-left dark:text-white">{peserta.data?.Peserta[0]?.Pendaftarans[0].durasi_magang || "-"}</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Periode
              </th>
              <td className="px-6 py-4 text-left dark:text-white">{formatDate(peserta.data?.Peserta[0]?.Pendaftarans[0]?.tanggal_mulai) || "-"} - {formatDate(peserta.data?.Peserta[0]?.Pendaftarans[0]?.tanggal_selesai) || "-"} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ProfilPeserta;
