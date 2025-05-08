import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import Section from "../../Components/Section/Section"
import Section2 from "../../Components/Section2/Section2"
import Brend from "../../Components/Brend/Brend"
import Download from "../../Components/Download/download"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import styles from "./Home.module.scss"
const Home = () => {
    return (
        <div>
            <div className={styles.app}>
                <Navbar />
                <Header />
            </div>
            <Section />
            <Brend/>
            <Section2 />
            <Download/>
            <Contact/> 
            <Footer/>
        </div>
    )
}

export default Home