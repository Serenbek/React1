import styles from "./Header.module.css";
import logo from "./logo192.png";

function Header() {
  return (
    <div className={styles.headerBody}>
      <div className={styles.headerMain}>
        <div className={styles.headerContainer}>
          <img src={logo} className={styles.logo}></img>
          <ul className={styles.desc}>
            <li>Документация</li>
            <li>Введение</li>
            <li>Блог</li>
            <li>Сообщество</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
