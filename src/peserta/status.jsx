import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navbar";

const StatusPeserta = () => {
  const navigate = useNavigate();
  const [peserta, setPeserta] = useState(null);

  useEffect(() => {
    const fetchPesertaById = async () => {
      try {
        const token = localStorage.getItem("token");

        // Ganti URL dengan URL endpoint yang sesuai di backend Anda
        const response = await fetch(`http://localhost:8000/user/peserta/token/${token}`, {
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

  const handleGetStarted = () => {
    navigate("/profil");
  };

  return (
    <div>
    <NavigationBar role="peserta" />
    <div className="mt-20 rounded-sm border border-stroke dark:bg-gray-700 bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-gray-700 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Status Progres
      </h4>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Tahapan
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Keterangan
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Unduh Lampiran
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td className="px-6 py-4 text-center dark:text-white">
              {peserta && peserta.data && peserta.data.Peserta && peserta.data.Peserta[0] && peserta.data.Peserta[0].Pendaftarans && peserta.data.Peserta[0].Pendaftarans[0] && peserta.data.Peserta[0].Pendaftarans[0].status_pendaftaran}
              </td>
              <td className="px-6 py-4 text-center dark:text-white">
                {peserta && peserta.data && peserta.data.Peserta && peserta.data.Peserta[0] && peserta.data.Peserta[0].Pendaftarans && peserta.data.Peserta[0].Pendaftarans[0] && (peserta.data.Peserta[0].Pendaftarans[0].status_pendaftaran === "Dikirim" || peserta.data.Peserta[0].Pendaftarans[0].status_pendaftaran === "Direview") ? ("-") : (
                  <a
                    href={peserta && peserta.data && peserta.data.Peserta && peserta.data.Peserta[0] && peserta.data.Peserta[0].Pendaftarans && peserta.data.Peserta[0].Pendaftarans[0] && peserta.data.Peserta[0].Pendaftarans[0].surat_balasan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 text-center underline hover:text-blue-500 dark:text-white dark:hover:text-blue-500 decoration-gray-500">
                    Surat Balasan
                  </a>
                )}
              </td>

              {/* <td>
                <a
                  href={peserta && peserta.data && peserta.data.Peserta && peserta.data.Peserta[0] && peserta.data.Peserta[0].Pendaftarans && peserta.data.Peserta[0].Pendaftarans[0] && peserta.data.Peserta[0].Pendaftarans[0].surat_balasan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 text-center underline hover:text-blue-500 dark:text-white dark:hover:text-blue-500 decoration-gray-500">
                  Surat Balasan
                </a>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
      <label htmlFor="message" 
      className="mt-10 block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
        Pesan</label>
    <textarea
      id="message"
      rows="4"
      value={peserta && peserta.data && peserta.data.Peserta && peserta.data.Peserta[0] && peserta.data.Peserta[0].Pendaftarans && peserta.data.Peserta[0].Pendaftarans[0] && peserta.data.Peserta[0].Pendaftarans[0].pesan_sdm ? peserta.data.Peserta[0].Pendaftarans[0].pesan_sdm : ""}
      readOnly
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Tidak ada pesan dari SDM"></textarea>
    </div>
    </div>
  );
};

export default StatusPeserta;
