import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Signin');
  };

  const handleRegisterClick = () => {
    navigate('/Registration');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Dispensary</h1>
      <div className="space-x-4">
        <button 
          onClick={handleLoginClick} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button 
          onClick={handleRegisterClick} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
}
