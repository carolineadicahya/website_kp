import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../components/navbar";
import Loader from "../components/loader";

const Detail = () => {
  const { id } = useParams();
  const [peserta, setPeserta] = useState(null);
  const [pesanSdm, setPesanSdm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const navigate = useNavigate();

  const checkRole = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/user/token/${token}`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      if (data.data.role != "sdm") {
        navigate("/login");
      }
      console.log(data);
    } else {
      throw new Error("Gagal mengambil data");
    }
  };

  useEffect(() => {
    checkRole();
    const fetchPesertaById = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/pendaftaran/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPeserta(data.data);
        } else {
          throw new Error("Gagal mengambil data peserta");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPesertaById(); // Memanggil fungsi untuk mendapatkan data peserta berdasarkan ID saat komponen dimuat
  }, [id]); // Bergantung pada perubahan ID

  const handleTerima = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/pendaftaran/${id}/terima`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        navigate(-1);
        window.alert("Peserta berhasil di Terima");
      } else {
        throw new Error("Gagal menerima peserta");
      }
    } catch (error) {
      console.error("Error terima peserta:", error);
    }
  };

  const handleTolak = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/pendaftaran/${id}/tolak`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        navigate(-1);
        window.alert("Peserta berhasil di Tolak");
      } else {
        throw new Error("Gagal menolak peserta");
      }
    } catch (error) {
      console.error("Error tolak peserta:", error);
    }
  };

  const handleKirim = async () => {
    try {
      const formData = new FormData();
      formData.append("pdfFile", selectedFile);

      // unggah surat balasan
      try {
        const response = await fetch(
          `http://localhost:8000/pendaftaran/${id}/surat-balasan`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
          }
        );

        if (response.ok) {
          setSelectedFile("");
        } else {
          throw new Error("Gagal mengunggah surat balasan");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }

      // Mengirim pesan SDM
      try {
        const response = await fetch(
          `http://localhost:8000/pendaftaran/${id}/pesan-sdm`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ pesan_sdm: pesanSdm }), // Mengirim pesan sekretaris dalam format JSON
          }
        );

        if (response.ok) {
          // Reset pesan sekretaris setelah berhasil mengirim
          setPesanSdm("");
          // Handle success response untuk pengiriman pesan SDM
          window.alert("Surat Balasan dan Pesan berhasil dikirim");
          // Lakukan sesuatu setelah berhasil mengirim, misalnya menampilkan notifikasi
        } else {
          throw new Error("Gagal mengirim pesan sekretaris");
        }
      } catch (error) {
        console.error("Error sending secretariat message:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!peserta) {
    return (
      <div>
        <Loader />
      </div>
    ); // Tampilkan loading indicator selama data masih diambil
  }

  const {
    durasi_magang,
    tanggal_mulai,
    tanggal_selesai,
    surat_pengantar,
    pas_foto,
    pesan_sekretaris,
    Pesertum,
  } = peserta;

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  }

  return (
    <div>
      <NavigationBar role="sdm_sekretaris" />
      <div className="mt-28 mb-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-gray-800 dark:bg-gray-800 dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-left text-xl font-semibold text-black dark:text-white">
          Detail {Pesertum.nama}
        </h4>
        <div class="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Nama
                </th>
                <td className="px-6 py-4 text-left">{Pesertum.nama}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Institusi
                </th>
                <td className="px-6 py-4 text-left">{Pesertum.institusi}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jurusan/Fakultas
                </th>
                <td className="px-6 py-4 text-left">{Pesertum.jurusan}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Program Studi
                </th>
                <td className="px-6 py-4 text-left">
                  {Pesertum?.program_studi || "-"}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Durasi
                </th>
                <td className="px-6 py-4 text-left">{durasi_magang}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Periode
                </th>
                <td className="px-6 py-4 text-left">
                  {formatDate(tanggal_mulai)} - {formatDate(tanggal_selesai)}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Pesan Sekretaris
                </th>
                <td className="px-6 py-4 text-left">{pesan_sekretaris}</td>
              </tr>
            </tbody>
          </table>
          <div className="py-2">
            <p className="px-6 py-2 text-left font-medium text-gray-900 whitespace-nowrap hover:text-gray-700 dark:text-white dark:hover:text-blue-500 underline">
              <a
                href={surat_pengantar}
                target="_blank"
                rel="noopener noreferrer">
                Surat Pengantar
              </a>
            </p>
            <p className="px-6 py-1 text-left font-medium text-gray-900 whitespace-nowrap hover:text-gray-700 dark:text-white dark:hover:text-blue-500 underline">
              <a href={pas_foto} target="_blank" rel="noopener noreferrer">
                Pas Foto
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
