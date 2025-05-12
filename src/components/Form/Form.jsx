import { useState } from 'react';
import styles from './form.module.css';

function Form({
  onSubmit,
  title = "Formulir Antrian Klinik",
  imageUrl = "https://media.istockphoto.com/id/1186549652/id/vektor/orang-kartun-berdiri-dalam-antrian-untuk-kantor-dokter-pasien-klinik-medis-mengantri-untuk.jpg?s=170667a&w=0&k=20&c=-U_Yl4LqKvYVPL8akCw3TgguDK7tBL8aHg7jXZx5eig=",
  buttonText = "Daftar"
}) {
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [gender, setGender] = useState('');
  const [keluhan, setKeluhan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, telepon, gender, keluhan });

    // Reset form
    setNama('');
    setTelepon('');
    setGender('');
    setKeluhan('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formMainTitle}>{title}</h2>

      <section className={styles.formSection}>
        <div className={styles.formRight}>
          <img 
            src={imageUrl} 
            alt="Ilustrasi Antrian Klinik"
            className={styles.formImage}
          />
        </div>

        <div className={styles.formLeft}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Nama Pasien</label>
              <input 
                type="text" 
                placeholder="Masukkan Nama" 
                required 
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Nomor Telepon</label>
              <input 
                type="tel" 
                placeholder="Masukkan Nomor Telepon" 
                required 
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Jenis Kelamin</label>
              <select 
                required 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Keluhan</label>
              <textarea 
                placeholder="Masukkan Keluhan" 
                rows="4" 
                required
                value={keluhan}
                onChange={(e) => setKeluhan(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              {buttonText}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
