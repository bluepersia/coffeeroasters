import clsx from "clsx";
import type { StepProps } from "./types";
import styles from "./step.module.css";

export default function Step(props: StepProps) {
  return (
    <li>
      <span className={clsx(styles.num, "text-1")}>0{props.num}</span>
      <h3 className={clsx(styles.title, "text-3")}>{props.title}</h3>
      <p className={clsx(styles.desc, "text-6")}>{props.desc}</p>
    </li>
  );
}
