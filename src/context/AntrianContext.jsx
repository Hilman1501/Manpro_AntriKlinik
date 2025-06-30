import React, { createContext, useState } from 'react';

export const AntrianContext = createContext();

export const AntrianProvider = ({ children }) => {
  const [antrian, setAntrian] = useState([
    { id: 1, nama: 'Budi', telepon: '0812...', gender: 'Laki-laki', keluhan: 'Demam', status: 'Menunggu' },
    { id: 2, nama: 'Siti', telepon: '0813...', gender: 'Perempuan', keluhan: 'Batuk', status: 'Dilayani' },
    { id: 3, nama: 'Agus', telepon: '0814...', gender: 'Laki-laki', keluhan: 'Pusing', status: 'Menunggu' },
  ]);

  const addAntrian = (pasienBaru) => {
    setAntrian((prev) => [
      ...prev,
      { ...pasienBaru, id: prev.length + 1, status: 'Menunggu' },
    ]);
  };

  const toggleStatusAntrian = (id) => {
    setAntrian((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === 'Menunggu' ? 'Dilayani' : 'Menunggu' }
          : p
      )
    );
  };

  const deleteAntrian = (id) => {
    setAntrian((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AntrianContext.Provider
      value={{ antrian, addAntrian, toggleStatusAntrian, deleteAntrian }}
    >
      {children}
    </AntrianContext.Provider>
  );
};
