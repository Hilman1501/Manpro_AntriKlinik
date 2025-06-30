import { useContext } from 'react';
import styles from './table.module.css';
import { AntrianContext } from '../../context/AntrianContext';

function Table({ mainTitle = "Antrian Klinik", subTitle = "Daftar Pasien" }) {
  const { antrian, toggleStatusAntrian, deleteAntrian } = useContext(AntrianContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{mainTitle}</h2>
      <h3 className={styles.subtitle}>{subTitle}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pasien</th>
            <th>Nomor Telepon</th>
            <th>Jenis Kelamin</th>
            <th>Keluhan</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {antrian.map((patient, index) => (
            <tr key={patient.id}>
              <td>{index + 1}</td>
              <td>{patient.nama}</td>
              <td>{patient.telepon}</td>
              <td>{patient.gender}</td>
              <td>{patient.keluhan}</td>
              <td>
                <button
                  onClick={() => toggleStatusAntrian(patient.id)}
                  className={`${styles.statusButton} ${patient.status === "Menunggu" ? styles.waiting : styles.served}`}
                >
                  {patient.status}
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteAntrian(patient.id)}
                  className={styles.deleteButton}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
