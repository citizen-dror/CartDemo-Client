import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div>
      <Link to='/'>Shopping List</Link> | <Link to='/order'>Order Summary</Link>
    </div>
  );
};

export default Navigation;
