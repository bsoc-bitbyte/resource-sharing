import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MaterialsPage from './pages/MaterialsPage';
import Login from './pages/login';
import Signup from './pages/signup';
import './styles/globals.css';
import Layout from './pages/OverviewPage';
import PDFViewer from './components/PDFViewer';
import Reset from './pages/forgotpassword'

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
          <Route path="/details" element={<Layout/>}></Route>
          <Route path="/pdfviewer/:id" element={<PDFViewer/>}></Route>
          <Route path="/resetpassword" element={<Reset/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
