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
                    <a href="#home" className={styles.footer__link}>Home</a>
                  </li>
                  <li className={styles.footer__item}>
                    <a href="#data-antrian" className={styles.footer__link}>Data Antrian</a>
                  </li>
                  <li className={styles.footer__item}>
                    <a href="#data-pasien" className={styles.footer__link}>Data Pasien</a>
                  </li>
                  <li className={styles.footer__item}>
                    <a href="#form" className={styles.footer__link}>Form</a>
                  </li>
                </ul>
      </footer>
    </div>
  );
}

export default Footer;
