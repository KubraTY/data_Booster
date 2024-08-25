import React from 'react';
import { Link } from '@remix-run/react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-customPurple text-white text-center p-6 relative">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Exercise App</h1>
      <p className="text-lg mb-8">Click the button below to start your exercises.</p>
      <Link to="/exercises">
        <button className="bg-customPurple_light text-white font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-gray-100 hover:text-customPurple transition duration-300">
          Start Here
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
