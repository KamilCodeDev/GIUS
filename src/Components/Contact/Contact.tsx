import styles from "./Contact.module.scss"
import img12 from "../../img/img12.png"
import img13 from "../../img/img13.png"
import img14 from "../../img/img14.png"
import img15 from "../../img/img15.png"
import img16 from "../../img/img16.png"
import img17 from "../../img/img17.png"
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div>
                        <h1>Контакты</h1>
                        <h4>Оставьте заявку, и мы свяжемся с вами, чтобы обсудить детали и предложить подходящее решение. </h4>
                    </div>
                    <div>
                        <div className={styles.phone}>
                            <img src={img12} alt="" />
                            <p>+998 20 003 69 71</p>
                        </div>
                        <div className={styles.phone}>
                            <img src={img13} alt="" />
                            <p>info@gius.support</p>
                        </div>
                        <div className={styles.phone}>
                            <img src={img14} alt="" />
                            <p>5-й проезд Богтепа, дом 22, Яккасарайский район, г. Ташкент, 100031</p>
                        </div>
                    </div>
                    <div>
                        <img src={img15} alt="" />
                        <img src={img16} alt="" />
                    </div>

                </div>
                <div className={styles.right}>
                    <form className={styles.form}>
                        <div className={styles.field}><input type="text" placeholder="Полное имя" required /></div>
                        <div className={styles.field}><input type="email" placeholder="Email" required /></div>
                        <div className={styles.field}><input type="tel" placeholder="Номер телефона" required /></div>
                        <div className={styles.field}><textarea placeholder="Сообщение" rows={4}></textarea></div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact