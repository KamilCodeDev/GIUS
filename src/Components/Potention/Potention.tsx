import styles from './Potention.module.scss';
import img46 from '../../img/img46.png';
import img47 from '../../img/img47.png';
import img48 from '../../img/img48.png';
import img49 from '../../img/img49.png';
import img50 from '../../img/img50.png';


const Texno = () => {
    return (
        <div >
            <h1 className={styles.title}>Мощность и потенциал GWS</h1>
            <div className={styles.card}>
                <div className={styles.left}>
                    <div>
                        <img src={img46} alt="" />
                        <p>8+ официальных партнёрских агентств в ЦА</p>
                    </div>
                    <div>
                        <img src={img47} alt="" />
                        <p>Более 5 000 активных кандидатов в базе</p>
                    </div>
                    <div>
                        <img src={img48} alt="" />
                        <p>Возможность массового подбора под сезонные и срочные заявки</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.card4}>
                        <img src={img49} alt="" />
                        <p>Собственный офис и локальная команда в Ташкенте</p>
                    </div>
                    <div className={styles.card4}>
                        <img src={img50} alt="" />
                        <p>Юридическое сопровождение от отправки до трудоустройства</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texno