// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';  
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h2 className={styles.navbar__title}>AntriKlinik</h2>
        </div>

        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}>
            <Link to="/" className={styles.navbar__link}>Home</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to="/daftar-antrian" className={styles.navbar__link}>Data Pasien</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link to="/antrian-baru" className={styles.navbar__link}>Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
