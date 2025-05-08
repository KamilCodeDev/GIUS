import { useState } from "react";
import styles from "./Navbar2.module.scss";
import img34 from "../../img/img34.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
      <img src={img34} alt="logo" className={styles.logo} />

      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" style={{ color: 'black' }}>Главная</Link>
        <Link to="/about" style={{ color: 'black' }}>О нас</Link>
        <Link to="/sistem" style={{ color: 'black' }}>Услуги</Link>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;