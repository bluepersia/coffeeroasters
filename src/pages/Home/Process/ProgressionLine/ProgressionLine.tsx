import type { JSX } from "react/jsx-runtime";
import styles from "./ProgressionLine.module.scss";
import clsx from "clsx";

type ProgressionLineProps = {
  color?: "light" | "dark";
  className?: string;
};
export default function ProgressionLine({
  color = "light",
  className,
}: ProgressionLineProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles.progressionLine,
        styles[`progressionLine--${color}`],
        className,
      )}
    >
      <div className={clsx(styles.circle, styles.circle1)}></div>
      <div className={clsx(styles.circle, styles.circle2)}></div>
      <div className={clsx(styles.circle, styles.circle3)}></div>
    </div>
  );
}
