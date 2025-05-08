import styles from "./Work.module.scss";

const steps = [
  "Вы отправляете нам описание вакансии",
  "Мы рассылаем её в сеть проверенных партнёров через ID SYSTEM",
  "Агенты подбирают кандидатов ➜ мы проводим полную верификацию",
  "Вы получаете список отобранных кандидатов с видео-резюме",
  "Мы оформляем визы, билеты и сопровождаем сотрудника до места работы",
];

const Work = () => {
  return (
    <div className={styles.carouselWrapper}>
      <h1>Как это работает?</h1>
      <div className={styles.carousel}>
        {steps.map((text, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.circle}>{index + 1}</div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
