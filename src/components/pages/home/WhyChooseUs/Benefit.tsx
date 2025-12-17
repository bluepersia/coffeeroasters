import clsx from "clsx";
import styles from "./benefit.module.scss";

type Props = React.PropsWithChildren & {
  img: string;
  title: string;
};

export default function Benefit({ img, title, children }: Props) {
  return (
    <li className={clsx(styles.benefit, "u-margin-center")}>
      <img className={styles.img} alt="" src={img} />
      <div className={styles.content}>
        <h3 className={clsx(styles.title, "text-4")}>{title}</h3>
        <p className={clsx(styles.desc, "text-6")}>{children}</p>
      </div>
    </li>
  );
}
