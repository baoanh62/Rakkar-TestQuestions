import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
      <div>
        <h1>Welcome to the home page!</h1>
        <Link to="/test1">About</Link>

      </div>
    );
  }
export default HomePage;