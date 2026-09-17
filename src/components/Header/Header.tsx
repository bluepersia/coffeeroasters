import type { JSX } from "react/jsx-runtime";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import clsx from "clsx";
import MenuBtn from "./MenuBtn/MenuBtn";
import Nav from "../Nav/Nav";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, "container")}>
        <Logo className={styles.logo} />
        <MenuBtn className={styles.menuBtn} />
        <Nav className={styles.nav} />
      </div>
    </header>
  );
}
