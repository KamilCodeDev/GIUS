import { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../img/logo.png";

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
        <li>Главная</li>
        <li>О нас</li>
        <li>Услуги</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;
