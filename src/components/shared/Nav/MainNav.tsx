import type { MainNavProps } from "./types";
import NavBase from "./NavBase";
import styles from "./main-nav.module.css";
import clsx from "clsx";

export default function MainNav(props: MainNavProps) {
  const style: Record<string, string> = {
    ...styles,
    nav: clsx(styles.nav, styles[`nav--${props.variant}`]),
    link: clsx(styles.link, "text-8", "radius-4"),
  };
  return <NavBase styles={style} />;
}
