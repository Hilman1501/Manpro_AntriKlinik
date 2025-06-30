import React, { useContext } from 'react';
import Form from "../../components/Form/Form";
import { AntrianContext } from '../../context/AntrianContext';

const AntrianBaru = () => {
  const { addAntrian } = useContext(AntrianContext);

  const handleSubmit = (formData) => {
    addAntrian(formData);
    alert(`Antrian untuk ${formData.nama} berhasil ditambahkan!`);
  };

  return (
    <div>
      <h1>Form Antrian Baru</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default AntrianBaru;
