import styles from "./Content.module.css";
import arrow from "./images/chevron right.png";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <h1 className={styles.title}>React</h1>
        <p className={styles.subTitle}>
          JavaScript-библиотека для создания пользовательских интерфейсов
        </p>
        <div className={styles.previewBottom}>
          <button className={styles.btn}>Начать работу</button>
          <a className={styles.link}>
            Перейти к введению
            <span>
              <img src={arrow} className={styles.arrow}></img>
            </span>
          </a>
        </div>
      </div>
      <main className={styles.cardsMain}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Декларативный</h3>
          <p className={styles.cardTxt}>
            Создавать интерактивные пользовательские интерфейсы на React —
            приятно и просто. Вам достаточно описать, как части интерфейса
            приложения выглядят в разных состояниях. React будет своевременно их
            обновлять, когда данные изменяются.
          </p>
          <br />
          <p className={styles.cardTxt}>
            Декларативные представления сделают код более предсказуемым и
            упростят отладку.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Основан на компонентах</h3>
          <p className={styles.cardTxt}>
            Создавайте инкапсулированные компоненты с собственным состоянием, а
            затем объединяйте их в сложные пользовательские интерфейсы.
          </p>
          <br />
          <p className={styles.cardTxt}>
            Поскольку логика компонента написана на JavaScript, а не содержится
            в шаблонах, можно с лёгкостью передавать самые разные данные по
            всему приложению и держать состояние вне DOM.
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            Научитесь однажды — пишите где угодно
          </h3>
          <p className={styles.cardTxt}>
            Нам не нужно ничего знать про остальную часть вашего
            технологического стека, поэтому вы можете разрабатывать новую
            функциональность на React, не изменяя существующий код.
          </p>
          <br />
          <p className={styles.cardTxt}>
            React также может работать на сервере, используя Node.js и на
            мобильных платформах, используя React Native.
          </p>
        </div>
      </main>
      <hr/>
    </div>
  );
}

export default Content;
