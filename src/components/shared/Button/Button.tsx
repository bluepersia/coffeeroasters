import clsx from "clsx";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

type Props = React.PropsWithChildren & {
  to?: string;
  onClick?: () => void;
};
export default function Button({ children, to, onClick }: Props) {
  const classes = clsx(styles.button, "text-5");

  return onClick ? (
    <button className={classes}>{children}</button>
  ) : to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : null;
}
