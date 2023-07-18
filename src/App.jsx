import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MaterialsPage from './pages/MaterialsPage';
import Login from './pages/login';
import Signup from './pages/signup';
import Layout from './pages/OverviewPage';
import PageNoteFound from './pages/404page'
import PDFViewer from './components/PDFViewer';
import Reset from './pages/forgotpassword'
import Dashboard from './components/Dashboard';
import Uploads from './components/Dashboard/uploads';
import Downloads from './components/Dashboard/downloads';
import Bookmarks from './components/Dashboard/bookmarks';
import Upload from './components/Dashboard/uploadform';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/materials/:category" element={<MaterialsPage />} />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/details" element={<Layout/>}></Route>
          <Route path="/pdfviewer/:id" element={<PDFViewer/>}></Route>
          <Route path="/resetpassword" element={<Reset/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="*" element={<PageNoteFound/>}></Route>
          <Route path="/uploads" element={<Uploads />}></Route>
          <Route path="/downloads" element={<Downloads />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
