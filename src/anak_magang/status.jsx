const Status = () => {
  return (
    <div className="mt-10 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Status Progres
      </h4>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">
                Tahapan
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Keterangan
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Unduh Lampiran
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td class="px-6 py-4 text-center">Di Kirim</td>
              <td class="px-6 py-4 text-center">-</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td class="px-6 py-4 text-center">Di Review</td>
              <td class="px-6 py-4 text-center">-</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td class="px-6 py-4 text-center">Di Terima</td>
              <td className="px-6 py-4 text-center underline dark:text-white decoration-indigo-500">
                Surat Balasan
                <div className="underline dark:text-white decoration-indigo-500">
                  ID Card
                </div>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pendaftaran
              </th>
              <td class="px-6 py-4 text-center">Di Tolak</td>
              <td class="px-6 py-4 text-center underline dark:text-white decoration-indigo-500">
                Surat Balasan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <label
        for="message"
        class="mt-10 block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
        Pesan
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="pesan kosong"></textarea>
    </div>
  );
};

export default Status;
