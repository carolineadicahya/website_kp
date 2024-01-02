import { useNavigate } from "react-router-dom";

export const Tombol = ({ data }) => {
  const navigate = useNavigate;

  return (
    <div className="max-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-xl p-6 bg-white shadow-md rounded-md">
        <button
          onClick={() => navigate()}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Lihat Program
        </button>
      </div>
    </div>
  );
};
