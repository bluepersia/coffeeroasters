import type { JSX } from "react/jsx-runtime";
import styles from "./MenuBtn.module.scss";
import clsx from "clsx";

type MenuBtnProps = {
  className?: string;
};
export default function MenuBtn({ className }: MenuBtnProps): JSX.Element {
  return (
    <button className={clsx(styles.menuBtn, className)}>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
          fill="#333D4B"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}
