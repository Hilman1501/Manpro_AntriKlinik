import { useContext } from 'react';
import styles from './section.module.css';
import { AntrianContext } from '../../context/AntrianContext';

function Section({
  mainTitle = "Antrian Klinik",
  subTitle = "Data Antrian Hari Ini",
  registeredLabel = "Pasien Terdaftar",
  servedLabel = "Pasien Dilayani",
  waitingLabel = "Pasien Menunggu"
}) {
  const { antrian } = useContext(AntrianContext);

  const total = antrian.length;
  const served = antrian.filter((p) => p.status === "Dilayani").length;
  const waiting = antrian.filter((p) => p.status === "Menunggu").length;

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.section__title}>{mainTitle}</h2>
        <h3 className={styles.section__subtitle}>{subTitle}</h3>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h4>{registeredLabel}</h4>
            <p className={styles.card__registered}>{total}</p>
          </div>
          <div className={styles.card}>
            <h4>{servedLabel}</h4>
            <p className={styles.card__served}>{served}</p>
          </div>
          <div className={styles.card}>
            <h4>{waitingLabel}</h4>
            <p className={styles.card__waiting}>{waiting}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
