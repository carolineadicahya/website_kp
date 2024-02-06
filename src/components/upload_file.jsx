import React, {useState} from "react";
import { useParams } from "react-router-dom";

const uploadFile = () => {
  const {id} = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("pdfFile", selectedFile);

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
        alert("Surat balasan berhasil diunggah");
      } else {
        throw new Error("Gagal mengunggah surat balasan");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 w-max">
            <span className="font-semibold">Upload Surat Balasan</span> 
            atau drag dan drop disini!
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PDF, Max 5MB
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
      </label>
      <div className="mt-5 flex justify-center">
        <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4 disabled:opacity-50"
        type="button"
      >
        Upload Surat Balasan
      </button>
      </div>
      
    </div>
  );
};

export default uploadFile;
