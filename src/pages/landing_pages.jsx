import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/career");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl p-6 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Portal Career</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our career portal! Explore exciting opportunities and take
          the next step in your career.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
