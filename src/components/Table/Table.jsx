import styles from './table.module.css';

function Table({ 
  patients, 
  setPatients, 
  mainTitle = "Antrian Klinik", 
  subTitle = "Daftar Pasien",
  headers = ["No", "Nama Pasien", "Nomor Telepon", "Jenis Kelamin", "Keluhan", "Status", "Aksi"]
}) {
  const handleStatusChange = (index) => {
    const updatedPatients = [...patients];
    const currentStatus = updatedPatients[index].status;

    updatedPatients[index].status = currentStatus === "Menunggu" ? "Dilayani" : "Menunggu";

    setPatients(updatedPatients);
  };
  const handleDelete = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{mainTitle}</h2>
      <h3 className={styles.subtitle}>{subTitle}</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{patient.nama}</td>
              <td>{patient.telepon}</td>
              <td>{patient.gender}</td>
              <td>{patient.keluhan}</td>
              <td>
                <button 
                  onClick={() => handleStatusChange(index)} 
                  className={styles.editButton}
                >
                  {patient.status === "Menunggu" ? "Menunggu" : "Dilayani"}
                </button>
              </td>
              <td>
                <button 
                  onClick={() => handleDelete(index)} 
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
