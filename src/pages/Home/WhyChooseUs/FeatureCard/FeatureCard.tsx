import type { JSX } from "react/jsx-runtime";
import styles from "./FeatureCard.module.scss";
import clsx from "clsx";
import type { FeatureData } from "../WhyChooseUs";

type FeatureCardProps = {
  feature: FeatureData;
};
export default function FeatureCard({
  feature: { image, title, description },
}: FeatureCardProps): JSX.Element {
  return (
    <div className={styles.featureCard}>
      <div className={styles.content}>
        <h3 className={clsx(styles.title, "text4")}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
      <img src={image} alt="" className={styles.img} />
    </div>
  );
}
