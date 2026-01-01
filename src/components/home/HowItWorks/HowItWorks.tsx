import clsx from "clsx";
import Steps from "../../shared/Main/Steps/Steps";
import styles from "./how-it-works.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={clsx(styles.title, "text-4")}>How it works</h2>
      <Steps />
      <button className={clsx("btn", styles.btn)}>Create your plan</button>
    </section>
  );
}
