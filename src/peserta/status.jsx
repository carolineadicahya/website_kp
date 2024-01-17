const Status = () => {
  var status = ["Di Kirim, Di Review, Di Terima, Di Tolak"];

  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td className="px-6 py-4 text-center">{Status}</td>
              <td className="px-6 py-4 text-center">-</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td className="px-6 py-4 text-center">{Status}</td>
              <td className="px-6 py-4 text-center">-</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td className="px-6 py-4 text-center">{Status}</td>
              <td className="px-6 py-4 text-center underline dark:text-white decoration-indigo-500">
                Surat Balasan
                <div className="underline dark:text-white decoration-indigo-500">
                  ID Card
                </div>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td className="px-6 py-4 text-center">{Status}</td>
              <td className="px-6 py-4 text-center underline dark:text-white decoration-indigo-500">
                Surat Balasan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <label
        htmlFor="message"
        className="mt-10 block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
        Pesan
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="pesan kosong"></textarea>
    </div>
  );
};

export default Status;
