import { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" style={{ color: 'white' }}>Главная</Link>
        <Link to="/about" style={{ color: 'white' }}>О нас</Link>
        <Link to="/sistem" style={{ color: 'white' }}>Услуги</Link>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;
