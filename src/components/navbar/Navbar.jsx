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
            <a href="#home" className={styles.navbar__link}>Home</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#data-antrian" className={styles.navbar__link}>Data Antrian</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#data-pasien" className={styles.navbar__link}>Data Pasien</a>
          </li>
          <li className={styles.navbar__item}>
            <a href="#form" className={styles.navbar__link}>Form</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
