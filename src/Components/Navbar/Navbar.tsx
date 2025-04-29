import module from "./Navbar.module.scss"
import logo from "../../img/logo.png"
const Navbar = () => {
    return (
        <div>
            <div className={module.container}>
                <nav className={module.navbar}>
                     <img src={logo} alt="" />
                    <ul>
                        <li>
                            Главная
                        </li>
                        <li>
                            О нас
                        </li>
                        <li>
                            Услуги
                        </li>
                        <li>
                            Контакты
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar