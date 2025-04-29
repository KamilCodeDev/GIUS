import styles from "./Brand.module.scss"
import img6 from "../../img/img6.png"
import imh7 from "../../img/imh7.png"
import imh8 from "../../img/imh8.png"
import img9 from "../../img/img9.png"
const Brend = () => {
  return (
    <div className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnerLogo}><img src={img6} alt="" /></div>
        <div className={styles.partnerLogo}><img src={imh7} alt="" /></div>
        <div className={styles.partnerLogo}><img src={imh8} alt="" /></div>
        <div className={styles.partnerLogo}><img src={img9} alt="" /></div>
        <div className={styles.partnerLogo}>Logo 5</div>
      </div>
    </div>
  );
}

export default Brend