import clsx from "clsx";
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
      <ul className={clsx(styles.list, "u-reset-list")}>
        {steps.map((step, index) => (
          <li className={styles.step}>
            <span className={clsx(styles.stepNum, "text-1")}>0{index + 1}</span>
            <h3 className={clsx(styles.stepTitle, "text-3")}>{step.title}</h3>
            <p className={clsx(styles.stepDesc, "text-6")}>{step.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
