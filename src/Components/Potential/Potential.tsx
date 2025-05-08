import styles from "./Potential.module.scss"
import img41 from "../../img/img41.png"
import img42 from "../../img/img42.png"
import img43 from "../../img/img43.png"
import img44 from "../../img/img44.png"
import img45 from "../../img/img45.png"


const Potential = () => {
    return (
        <div >
            <h1 className={styles.title}>Почему выбирают GIUS
            WORK SUPPORT?</h1>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div>
                        <img src={img41} alt="" />
                        <p>Один контракт — десятки рекрутеров</p>
                    </div>
                    <div>
                        <img src={img42} alt="" />
                        <p>Одна система — вся Центральная Азия</p>
                    </div>
                    <div>
                        <img src={img43} alt="" />
                        <p>Один контакт — полная ответственность</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.card4}>
                        <img src={img44} alt="" />
                        <p>Прозрачность, безопасность, скорость</p>
                    </div>
                    <div className={styles.card4}>
                        <img src={img45} alt="" />
                        <p>Мы не просто агент — мы ваша структура в ЦА</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Potential