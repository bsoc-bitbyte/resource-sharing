import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MaterialsPage from './pages/MaterialsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/materials/:category" element={<MaterialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App