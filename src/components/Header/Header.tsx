import type { JSX } from "react/jsx-runtime";
import styles from "./Header.module.scss";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MenuBtn from "./MenuBtn/MenuBtn";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, "container")}>
        <Logo className={styles.logo} />
        <Nav className={styles.nav} />
        <MenuBtn className={styles.menuBtn} />
      </div>
    </header>
  );
}
