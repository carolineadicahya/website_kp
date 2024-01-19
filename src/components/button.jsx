import { useNavigate } from "react-router-dom";

export const Tombol = ({ data }) => {
  const navigate = useNavigate;

  return (
    <div className=" items-center justify-center bg-gray-100">
      <div className="max-w-xl p-6 bg-white shadow-md rounded-md">
        <button
          onClick={() => navigate()}
          className="text-white bg-[#0b4d8c] hover:bg-[#1377d6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#0b4d8c] dark:hover:bg-[#0b4d8c] dark:focus:ring-blue-800"></button>
      </div>
    </div>
  );
};
