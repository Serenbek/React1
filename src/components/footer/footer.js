import logoFooter from "./images/logoFooter.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.firstColumn}>
          <img src={logoFooter} className={styles.logoFooter}></img>
          <p className={styles.logoTxt}>
            Copyright © 2023 Meta Platforms, Inc.
          </p>
        </div>
        <div className={styles.secondColumn}>
          <h3 className={styles.fooerTitle}>ДОКУМЕНТАЦИЯ</h3>
          <ul>
            <li>Установка</li>
            <li>Основные понятия</li>
            <li>Продвинутые темы</li>
            <li>Справочник API</li>
            <li>Хуки</li>
            <li>Тестирование</li>
            <li>Участие в проекте</li>
            <li>FAQ</li>
          </ul>
          <h3 className={styles.fooerTitle}>СООБЩЕСТВО</h3>
          <ul>
            <li>Code of Conduct <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Ресурсы сообщества</li>
          </ul>
        </div>
        <div className={styles.tirdColumn}>
          <h3 className={styles.fooerTitle}>КАНАЛЫ</h3>
          <ul>
            <li>GitHub <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Stack Overflow <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Дискуссионные форумы <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Чат Reactiflux <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Facebook <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Twitter <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
          </ul>
          <h3 className={styles.fooerTitle}>ДОПОЛНИТЕЛЬНО</h3>
          <ul>
            <li>Введение</li>
            <li>Блог</li>
            <li>Благодарности</li>
            <li>React Native <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Privacy <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
            <li>Terms <span className={styles.viewBox}>
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="css-83uoqv"
                >
                  <path
                    fill="currentColor"
                    d="
      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
    "
                  ></path>
                  <polygon
                    fill="currentColor"
                    points="
      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
      14.9 62.8,22.9 71.5,22.9
      "
                  ></polygon>
                </svg>
              </span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
