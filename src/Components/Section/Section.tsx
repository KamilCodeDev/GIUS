import styles from "./Section.module.scss"
import { motion } from 'framer-motion';
import img2 from "../../img/img2.png"
import img4 from "../../img/img4.png"
import img5 from "../../img/img5.png"
import img20 from "../../img/img20.png"
const Section = () => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.supportCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >

                <div className={styles.content}>
                    <h2>GWS — GIUS WORK SUPPORT</h2>
                    <p>Официальный офис поддержки словацких работодателей в Центральной Азии</p>
                    <button>Подробнее</button>
                </div>

                <div className={styles.image}>
                    <img
                        src={img2}
                    />
                </div>
            </motion.div>
            <motion.div
                className={styles.supportCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className={styles.image}>
                    <img
                        src={img4}
                    />
                </div>
                <div className={styles.content_id}>
                    <h2>ID SYSTEM</h2>
                    <p>Умная цифровая платформа для автоматизации подбора и верификации кандидатов</p>
                    <button>Подробнее</button>
                </div>


            </motion.div>
            <motion.div
                className={styles.supportCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >

                <div className={styles.content}>
                    <h2>CA DRIVERS</h2>
                    <p>Медиа-проект и цифровой профиль для водителей-дальнобойщиков</p>
                    <button>Подробнее</button>
                </div>

                <div className={styles.imag}>
                    <img src={img20} 
                    />
                </div>


            </motion.div>
            <motion.div
                className={styles.supportCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className={styles.image}>
                    <img
                        src={img5}
                    />
                </div>
                

                <div className={styles.content_id}>
                    <h2>GWS — GIUS WORK SUPPORT</h2>
                    <p>Официальный офис поддержки словацких работодателей в Центральной Азии</p>
                    <button>Подробнее</button>
                </div>


            </motion.div>
        </div>
    )
}


export default Section