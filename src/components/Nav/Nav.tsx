import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";
import clsx from "clsx";

type Props = {
  className?: string;
};
export default function Nav({ className }: Props) {
  function activeNavLink({ isActive }: { isActive: boolean }) {
    return clsx(
      styles.navLink,
      "u-reset-link",
      "text-8",
      isActive ? styles["navLink--active"] : ""
    );
  }
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={clsx(styles.navList, "u-reset-list")}>
        <li className={styles.navLink}>
          <NavLink to="/" className={activeNavLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="about-us" className={activeNavLink}>
            About Us
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="create-plan" className={activeNavLink}>
            Create Your Plan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
