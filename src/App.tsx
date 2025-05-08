import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Sistem from "./Pages/Sistem/Sistem"
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Sistem/>} path="/sistem"/>
      </Routes>
    </div>

  )
}

export default App