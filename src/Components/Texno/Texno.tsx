import styles from './Texno.module.scss';
import img29 from '../../img/img29.png';
import img30 from '../../img/img30.png';
import img31 from '../../img/img31.png';
import img32 from '../../img/img32.png';
import img33 from '../../img/img33.png';


const Texno = () => {
    return (
        <div >
            <h1 className={styles.title}>Технологии — ID SYSTEM</h1>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div>
                        <img src={img29} alt="" />
                        <p>Учёт и хранение документов</p>
                    </div>
                    <div>
                        <img src={img30} alt="" />
                        <p>Проверка и фильтрация кандидатов</p>
                    </div>
                    <div>
                        <img src={img31} alt="" />
                        <p>Контроль сроков подачи и статуса дел</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.card4}>
                        <img src={img32} alt="" />
                        <p>Прозрачное взаимодействие между работодателем, рекрутером и работником</p>
                    </div>
                    <div className={styles.card4}>
                        <img src={img33} alt="" />
                        <p>Интеграция с Telegram и мобильными инструментами</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texno