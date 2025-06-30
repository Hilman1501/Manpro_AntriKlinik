// src/components/Footer/Footer.jsx
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer__brand}>
          <h2 className={styles.footer__title}>AntriKlinik</h2>
          <p className={styles.footer__author}>Development by Hilman</p>
        </div>

        <ul className={styles.footer__list}>
          <li className={styles.footer__item}>
            <Link to="/" className={styles.footer__link}>Home</Link>
          </li>
          <li className={styles.footer__item}>
            <Link to="/daftar-antrian" className={styles.footer__link}>Data Antrian</Link>
          </li>
         
          <li className={styles.footer__item}>
            <Link to="/antrian-baru" className={styles.footer__link}>Form</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
