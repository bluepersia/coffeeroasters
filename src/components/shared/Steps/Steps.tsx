import styles from "./steps.module.scss";

type Props = {
  steps: Step[];
};

type Step = {
  title: string;
  desc: string;
};
export default function Steps({ steps }: Props) {
  return (
    <div className={styles.steps}>
      <div className={styles.line}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      <ul className={styles.list}>
        {steps.map((step) => (
          <li className={styles.step}>
            <span className={styles.stepNum}>01</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
