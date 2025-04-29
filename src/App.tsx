import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section"
import Brend from "./Components/Brend/Brend"
import module from "./App.module.scss"
import Section2 from "./Components/Section2/Section2"
import Download from "./Components/Download/download"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <div className={module.app}>
        <Navbar />
        <Header />
      </div>
      <Section/>
      <Brend/>
      <Section2/>
      <Download/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App