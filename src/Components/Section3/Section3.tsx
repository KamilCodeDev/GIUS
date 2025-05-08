import styles from "./Section3.module.scss"
import img28 from "../../img/img28.png"
const Section = () => {
  return (
    <div>
        <div className={styles.card}>
            <div>
                <h4>Кто мы?</h4>
                <p>GIUS WORK SUPPORT (GWS) — международный аутсорсинговый проект, разработанный компанией GLOBAL ID UNITED SYSTEMS LLC. Мы выступаем как официальный представитель работодателей Европейского Союза в Центральной Азии, с юридическим офисом в Ташкенте. Наша миссия — обеспечить безопасный, легальный и эффективный найм работников через единую интеллектуальную платформу и персональное сопровождение на всех этапах.</p>
            </div>
            <img src={img28} alt="" />
        </div>
    </div>
  )
}

export default Section;