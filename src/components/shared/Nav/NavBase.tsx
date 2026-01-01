import { Link } from "react-router-dom";
import { NAV_LINKS } from "./constants";
import type { BaseProps } from "./types";
import clsx from "clsx";

export default function NavBase({ styles }: BaseProps) {
  return (
    <nav className={styles?.nav}>
      <ul className={clsx(styles?.list, "u-reset-list")}>
        {NAV_LINKS.map((item) => (
          <li className={styles?.item}>
            <Link to={item.to} className={clsx(styles?.link, "u-reset-link")}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
