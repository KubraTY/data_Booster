// app/routes/index.tsx
import React from 'react';
import { Link } from '@remix-run/react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Exercise App</h1>
      <p>Click the button below to start your exercises.</p>
      <Link to="/exercises">
        <button>Start Here</button>
      </Link>
    </div>
  );
};

export default HomePage;
