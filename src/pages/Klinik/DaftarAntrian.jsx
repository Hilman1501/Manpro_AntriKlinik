import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AntrianContext } from '../../context/AntrianContext';

const DaftarAntrian = () => {
  const { antrian } = useContext(AntrianContext);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#00b894' }}>Daftar Antrian</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>No Antrian</th>
            <th style={thStyle}>Nama</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Detail</th>
          </tr>
        </thead>
        <tbody>
          {antrian.map((item, index) => {
            const posisiAntrian = index + 1;
            const sisaDiDepan = index;
            return (
              <tr key={item.id}>
                <td style={tdStyle}>{posisiAntrian}</td>
                <td style={tdStyle}>{item.nama}</td>
                <td style={tdStyle}>{item.status}</td>
                <td style={tdStyle}>
                  <Link to={`/detail/${item.id}`}>Lihat Detail</Link>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>
                    {`Antrian ke-${posisiAntrian} (${sisaDiDepan} orang di depan)`}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p style={{ marginTop: '1rem' }}>
        <strong>Total Antrian:</strong> {antrian.length}
      </p>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '0.75rem',
  backgroundColor: '#f0f0f0',
  color: '#00b894',
  textAlign: 'center',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '0.75rem',
  textAlign: 'center',
};

export default DaftarAntrian;
