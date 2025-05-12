import styles from './hero.module.css';
import ilustrasi from '../../assets/image/ilustrasi-daftar-rumah-sakit-dokter.jpg';

function Hero({
  title = "Manajemen Antrian Klinik",
  subtitle = "Mudah dan Efisien dalam Mengelola Antrian Pasien",
  description = "Kelola antrian pasien secara online dengan lebih efisien. Pantau status antrian, perbarui data pasien, dan pastikan pelayanan berjalan lancar tanpa hambatan.",
  buttonText = "Daftarkan pasien",
  image = ilustrasi
}) {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{title}</h2>
          <h3 className={styles.hero__subtitle}>{subtitle}</h3>
          <p className={styles.hero__description}>{description}</p>

          <button 
            className={styles.hero__button} 
            onClick={() => { document.getElementById('form').scrollIntoView({ behavior: 'smooth' }); }}
          >
            {buttonText}
          </button>
        </div>

        <div className={styles.hero__right}>
          <img src={image} alt="Ilustrasi Klinik" className={styles.hero__image} />
        </div>                              
      </section>
    </div>
  );
}

export default Hero;
