import styles from "./download.module.scss"
import img10 from "../../img/img10.png"
const download = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.text}>
                <h1>Хотите узнать больше о наших проектах и подходах? </h1>
                <p>Скачайте презентацию и получите подробную информацию о том, как мы можем помочь вам достичь целей.</p>
                <button>Скачать презентацию</button>
            </div>
            <img src={img10} alt="" />
        </div>
    </div>
  )
}

export default download