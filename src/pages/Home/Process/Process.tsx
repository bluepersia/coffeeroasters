import type { JSX } from "react/jsx-runtime";
import StepItem from "./StepItem/StepItem";
import clsx from "clsx";
import styles from "./Process.module.scss";
import ProgressionLine from "./ProgressionLine/ProgressionLine";
import { CREATE_PLAN_LINK } from "../../../core/linkCreation";
import Btn from "../../../components/Btn/Btn";

type StepItemData = {
  num: string;
  title: string;
  description: string;
};

const STEP_ITEMS: StepItemData[] = [
  {
    num: "01",
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    num: "02",
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    num: "03",
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

type ProcessProps = {
  showTitle?: boolean;
  showButton?: boolean;
  color?: "light" | "dark";
};
export default function Process({
  showTitle = true,
  showButton = true,
  color = "light",
}: ProcessProps): JSX.Element {
  return (
    <section
      aria-labelledby="process-title"
      className={clsx(styles.process, styles[`process--${color}`])}
    >
      <div className={clsx(styles.inner, "container", "innerContainer")}>
        {showTitle && (
          <h2 id="process-title" className={clsx(styles.title, "text4")}>
            How it works
          </h2>
        )}
        <ProgressionLine className={styles.progressionLine} />
        <ul className={clsx(styles.list, "resetList")}>
          {STEP_ITEMS.map((STEP_ITEM) => (
            <li key={STEP_ITEM.num} className={styles.item}>
              <StepItem stepItem={STEP_ITEM} />
            </li>
          ))}
        </ul>
        {showButton && (
          <Btn to={CREATE_PLAN_LINK} className={styles.btn}>
            Create your plan
          </Btn>
        )}
      </div>
    </section>
  );
}

export type { StepItemData };
