import clsx from "clsx";
import type { JSX } from "react/jsx-runtime";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SocialMedia from "./SocialMedia/SocialMedia";
import styles from "./Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={clsx(styles.footer, "container")}>
      <Logo color="light" className={styles.logo} />
      <Nav color="light" className={styles.nav} gap="tight" />
      <SocialMedia />
    </footer>
  );
}
