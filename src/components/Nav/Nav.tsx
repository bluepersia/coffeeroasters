import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Nav.module.scss";
import clsx from "clsx";

type NavProps = {
  className?: string;
};
export default function Nav({ className }: NavProps): JSX.Element {
  return (
    <nav className={className}>
      <ul className={clsx(styles.list, "resetList")}>
        <li>
          <Link to="/" className={clsx(styles.link, "text8")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about-us" className={clsx(styles.link, "text8")}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="create-your-plan" className={clsx(styles.link, "text8")}>
            Create Your Plan
          </Link>
        </li>
      </ul>
    </nav>
  );
}
