const Profil = () => {
  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Almadt'C
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
              <td className="px-6 py-4 text-left">Almaditha Dara Tivani</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Institusi
              </th>
              <td className="px-6 py-4 text-left">
                Institut Teknologi Kalimantan
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Jurusan/Fakultas
              </th>
              <td className="px-6 py-4 text-left">
                Matematika dan Teknologi Informasi
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Program Studi
              </th>
              <td className="px-6 py-4 text-left">Informatika</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Durasi
              </th>
              <td className="px-6 py-4 text-left">2 Bulan</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Periode
              </th>
              <td className="px-6 py-4 text-left">
                11 Desember 2023 - 10 Februari 2024
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profil;
