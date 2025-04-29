import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.left}>
                    <h1>GUIS UZBEKISTAN</h1>
                </div>
                <div className={styles.right}>
                    <div className={styles.foot}>
                        <a href="">Главная</a>
                        <a href="">О нас</a>
                        <a href="">Услуги</a>
                        <a href="">Контакты</a>
                    </div>
                    <div>
                        <p>ул. Истикбол, 8, Ташкент</p>
                        <p>info@gius.support</p>
                        <p>+998 20 003 69 71</p>
                        <p>+99894 658 78 88</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer