import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

const ViewRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  );
};

export default ViewRouter;
