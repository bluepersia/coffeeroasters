import { useState } from "react";
import SiteLogo from "../SiteLogo/SiteLogo";
import styles from "./header.module.scss";
import menuIcon from "/src/assets/MenuBtn.png";
import closeMenuIcon from "/src/assets/CloseMenuBtn.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Nav from "../../Nav/Nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function activeLink({ isActive }: { isActive: boolean }) {
    return clsx(
      "text-4",
      styles.mobileNavLink,
      "u-reset-link",
      isActive ? styles["mobileNavLink--active"] : ""
    );
  }

  return (
    <header className={clsx(styles.header, "u-container")}>
      <SiteLogo />
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={styles.menuBtn}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <img className={styles.closeMenuIcon} alt="" src={closeMenuIcon} />
        ) : (
          <img className={styles.menuIcon} alt="" src={menuIcon} />
        )}
      </button>
      <Nav className={styles.nav} />
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={clsx(styles.mobileNavList, "u-reset-list")}>
            <li className={styles.mobileNavItem}>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.mobileNavItem}>
              <NavLink to="about-us" className={activeLink}>
                About Us
              </NavLink>
            </li>
            <li className={styles.mobileNavItem}>
              <NavLink to="create-plan" className={activeLink}>
                Create Your Plan
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
