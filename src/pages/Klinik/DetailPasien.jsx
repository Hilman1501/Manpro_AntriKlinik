import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AntrianContext } from '../../context/AntrianContext';

const DetailPasien = () => {
  const { id } = useParams();
  const { antrian } = useContext(AntrianContext);
  const pasien = antrian.find((p) => p.id === parseInt(id));

  if (!pasien) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Pasien tidak ditemukan!</h2>
        <Link to="/daftar-antrian">← Kembali ke Daftar Antrian</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Detail Pasien</h1>
      <div style={styles.card}>
        <div style={styles.item}><span style={styles.label}>ID:</span><span>{pasien.id}</span></div>
        <div style={styles.item}><span style={styles.label}>Nama:</span><span>{pasien.nama}</span></div>
        <div style={styles.item}><span style={styles.label}>Telepon:</span><span>{pasien.telepon}</span></div>
        <div style={styles.item}><span style={styles.label}>Jenis Kelamin:</span><span>{pasien.gender}</span></div>
        <div style={styles.item}><span style={styles.label}>Keluhan:</span><span>{pasien.keluhan}</span></div>
        <div style={styles.item}><span style={styles.label}>Status:</span><span>{pasien.status}</span></div>
      </div>
      <Link to="/daftar-antrian" style={styles.backLink}>← Kembali ke Daftar Antrian</Link>
    </div>
  );
};

const styles = {
  container: { maxWidth: '500px', margin: '2rem auto', padding: '1rem', textAlign: 'center' },
  title: { color: '#00b894', marginBottom: '1rem' },
  card: { border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#f9f9f9', textAlign: 'left' },
  item: { marginBottom: '0.75rem' },
  label: { fontWeight: 'bold', display: 'inline-block', width: '150px' },
  backLink: { display: 'inline-block', marginTop: '1rem', color: '#007bff', textDecoration: 'none' },
};

export default DetailPasien;
