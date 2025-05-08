import styles from "./Header.module.scss"
import img27 from "../../img/img27.png"
const Header2 = () => {
  return (
    <div >
        <div className={styles.cards}>
            <img src={img27} alt="" />
            <div className={styles.card}>
                <h3>Официальный офис поддержки словацких работодателей в Центральной Азии</h3>
                <button>Стать партнёром</button>
            </div>
        </div>
    </div>
  )
}

export default Header2