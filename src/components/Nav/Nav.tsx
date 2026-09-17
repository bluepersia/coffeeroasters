import clsx from "clsx";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Nav.module.scss";
import { CREATE_PLAN_LINK } from "../../core/linkCreation";

const LINKS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
  {
    label: "Create Your Plan",
    to: CREATE_PLAN_LINK,
  },
];

type NavProps = {
  className?: string;
};
export default function Nav({ className }: NavProps): JSX.Element {
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={clsx(styles.list, "resetList")}>
        {LINKS.map((LINK) => (
          <li key={LINK.label} className={styles.item}>
            <Link to={LINK.to} className={clsx(styles.link, "text8")}>
              {LINK.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
