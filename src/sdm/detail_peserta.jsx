import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../components/navbar";

const SDMDetail = () => {
  const {id} = useParams();
  const [peserta, setPeserta] = useState(null);
  const [pesanSdm, setPesanSdm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const navigate = useNavigate();

  // const {
  //   durasi_magang,
  //   tanggal_mulai,
  //   tanggal_selesai,
  //   surat_pengantar,
  //   pas_foto,
  //   pesan_sekretaris,
  //   Pesertum,
  // } = peserta;

  // const handleGetStarted = () => {
  //   navigate("/surat_balasan");
  // };

  // var nama = "Almaditha Dara Tivani";
  // var institusi = "Institut Teknologi Kalimanatan";
  // var jurusan_fakultas = "Matematika dan Teknologi Informasi";
  // var prodi = "Informatika";
  // var durasi = "2 Bulan";
  // var periode = "11 Desember 2023 - 10 Februari 2024";
  // var keterangan = "diterima tapi pangkas waktunya";

  useEffect(() => {
    const fetchPesertaById = async () => {
      try {
        const response = await fetch(`http://localhost:8000/pendaftaran/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

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
      const response = await fetch(`http://localhost:8000/pendaftaran/${id}/terima`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        // Jika berhasil, arahkan pengguna kembali ke halaman sebelumnya
        // navigate(`/surat_balasan/${peserta.id}`);
      } else {
        throw new Error("Gagal menerima peserta");
      }
    } catch (error) {
      console.error("Error terima peserta:", error);
    }
  };

  const handleTolak = async () => {
    try {
      const response = await fetch(`http://localhost:8000/pendaftaran/${id}/tolak`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        // Jika berhasil, arahkan pengguna kembali ke halaman sebelumnya
        // navigate(`/surat_balasan/${peserta.id}`);
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
      const response = await fetch(`http://localhost:8000/pendaftaran/${id}/surat-balasan`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (response.ok) {
        // Handle success response
        // window.alert("Surat balasan berhasil diunggah");
      } else {
        throw new Error("Gagal mengunggah surat balasan");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }

     // Mengirim pesan SDM
    try {
      const response = await fetch(`http://localhost:8000/pendaftaran/${id}/pesan-sdm`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ pesan_sdm: pesanSdm }), // Mengirim pesan sekretaris dalam format JSON
      });

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
    return <div>Loading...</div>; // Tampilkan loading indicator selama data masih diambil
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
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
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
              <td className="px-6 py-4 text-left">{Pesertum?.program_studi || "-"}</td>
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
              <td className="px-6 py-4 text-left">{formatDate(tanggal_mulai)} - {formatDate(tanggal_selesai)}</td>
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
          <a href={surat_pengantar} 
          target="_blank" 
          rel="noopener noreferrer">
            Surat Pengantar</a>
          </p>
        <p className="px-6 py-1 text-left font-medium text-gray-900 whitespace-nowrap hover:text-gray-700 dark:text-white dark:hover:text-blue-500 underline">
          <a href={pas_foto} 
          target="_blank" 
          rel="noopener noreferrer">
            Pas Foto</a>
          </p>
        </div>
        <div>
          <h4 className="mt-8 mb-3 text-left text-xl font-semibold text-black dark:text-white">
            Status
          </h4>
          <div className="flex items-center justify-between">
            <button
              onClick={handleTerima}
              type=""
              className="bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 mb-6 rounded-md">
              Terima
            </button>
            <button
              onClick={handleTolak}
              type=""
              className="bg-red-500 text-white px-2 py-1 mb-6 rounded-md hover:bg-red-600">
              Tolak
            </button>
            <a
              href={Pesertum?.nomor_whatsapp ? ` https://wa.me/${Pesertum.nomor_whatsapp}`: '#'}
              className="bg-green-500 text-white px-2 py-1 mb-6 rounded-md hover:bg-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="mb-2 text-left text-xl font-semibold text-black dark:text-white">
            Upload Surat
          </h4>
          <div className="items-left">
              <input
                aria-describedby="surat_pengantar_input_help"
                id="surat_pengantar"
                type="file"
                onChange={handleFileChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p
                className="mt-1 text-left text-sm text-gray-500 dark:text-gray-300"
                id="surat_pengantar_input_help">
                PDF (MAX. 5MB).
              </p>
              {/* <button
                onClick={handleUpload}
                disabled={!selectedFile}
                className="mt-3 bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 mb-3 rounded-md">
                Kirim
              </button> */}
          </div>
        </div>
        <div className="items-left">
          <label
            for="message"
            className="mt-6 block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white">
            Pesan
          </label>
          <textarea
            id="message"
            rows="4"
            value={pesanSdm}
            onChange={(e) => setPesanSdm(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="pesan kosong"></textarea>
          <button
            onClick={handleKirim}
            disabled={!selectedFile}
            className="mt-3 bg-[#0b4d8c] hover:bg-[#073560] text-white px-2 py-1 mb-3 rounded-md">
            Kirim
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SDMDetail;
