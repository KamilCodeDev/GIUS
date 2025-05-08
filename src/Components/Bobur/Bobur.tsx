import styles from "./Bobur.module.scss"
const Bobur = () => {
    return (
        <div>
            <div className={styles.card}>
                <h1>LOGO</h1>
                <div className={styles.cards}>
                    <h5>Основатель и стратег проекта</h5>
                    <h1>Бобур Садыков</h1>
                    <ul>
                        <li>Более 6 лет в визовом отделе Консульства Словацкой Республики в Ташкенте</li>
                        <li>Эксперт по трудовой миграции и визовому праву ЕС
                            Автор IT-платформы ID SYSTEM</li>
                        <li>Автор IT-платформы ID SYSTEM</li>
                        <li>Основатель GIUS WORK SUPPORT — компании, которая работает 365 дней в году, без выходных</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bobur