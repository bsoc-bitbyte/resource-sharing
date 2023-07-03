import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MaterialsPage from './pages/MaterialsPage';
import Login from './pages/login';
import Signup from './pages/signup';
import './styles/globals.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/materials/:category"
            element={
              <Suspense fallback={<div className="preloader"></div>}>
                <MaterialsPage />
              </Suspense>
            }
          />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
