// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AntrianProvider } from './context/AntrianContext';

import './App.css';

// Komponen layout
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Halaman
import Home from './pages/Home';
import AntrianBaru from './pages/klinik/AntrianBaru';
import DaftarAntrian from './pages/klinik/DaftarAntrian';
import DetailPasien from './pages/klinik/DetailPasien';

function App() {
  return (
    <AntrianProvider>
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/antrian-baru" element={<AntrianBaru />} />
            <Route path="/daftar-antrian" element={<DaftarAntrian />} />
            <Route path="/detail/:id" element={<DetailPasien />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </AntrianProvider>
  );
}

export default App;
