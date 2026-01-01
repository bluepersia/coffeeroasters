import type { BenefitProps } from "./type";
import styles from "./benefit.module.css";
import clsx from "clsx";

export default function Benefit(props: BenefitProps) {
  return (
    <div className={clsx(styles.benefit, "radius-6")}>
      <img src={props.icon} alt="" className={styles.icon} />
      <div className={styles.content}>
        <h3 className={clsx(styles.title, "text-4")}>{props.title}</h3>
        <p className={clsx(styles.desc, "text-6")}>{props.desc}</p>
      </div>
    </div>
  );
}
