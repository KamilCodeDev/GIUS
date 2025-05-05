import Navbar from "./Components/Navbar/Navbar"
import Header from "./Components/Header/Header"
import Section from "./Components/Section/Section"
import Brend from "./Components/Brend/Brend"
import module from "./App.module.scss"
import Section2 from "./Components/Section2/Section2"
import Download from "./Components/Download/download"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Map from "./Components/Map/Map"
// import Karusel from "./Components/Karusel/Karusel"
// import Work from "./Components/Work/Work"
const App = () => {
  return (
    <div>
      <div className={module.app}>
        <Navbar />
        <Header />
      </div>
      <Section/>
      <Brend/>
      {/* <Karusel/>
      <Work/> */}
      <Section2/>
      <Download/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>

  )
}

export default App