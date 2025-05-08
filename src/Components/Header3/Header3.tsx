import styles from "./Header3.module.scss"
import img51 from "../../img/img51.png"
const Header2 = () => {
  return (
    <div >
        <div className={styles.cards}>
            <img src={img51} alt="" />
            <div className={styles.card}>
                <h3>Официальный офис поддержки словацких работодателей в Центральной Азии</h3>
                <button>Стать партнёром</button>
            </div>
        </div>
    </div>
  )
}

export default Header2