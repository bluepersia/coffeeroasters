import type { JSX } from "react/jsx-runtime";
import styles from "./ErrorDisplay.module.scss";
import Btn from "../Btn/Btn";

type ErrorDisplayProps = {
  message: string;
  refetch: () => unknown;
};
export default function ErrorDisplay({
  message,
  refetch,
}: ErrorDisplayProps): JSX.Element {
  return (
    <div className={styles.errorDisplay}>
      <p className={styles.errorText}>{message}</p>
      <Btn onClick={refetch} className={styles.btn}>
        Retry
      </Btn>
    </div>
  );
}
