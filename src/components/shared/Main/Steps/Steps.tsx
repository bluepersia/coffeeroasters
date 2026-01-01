import clsx from "clsx";
import Step from "./Step";
import styles from "./steps.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ol className={clsx(styles.list, "u-reset-list")}>
        <Step
          num={1}
          title="Pick your coffee"
          desc="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        />
        <Step
          num={2}
          title="Choose the frequency"
          desc="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <Step
          num={3}
          title="Receive and enjoy!"
          desc="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
        />
      </ol>
    </div>
  );
}
