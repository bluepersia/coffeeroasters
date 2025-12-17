import Steps from "../../../shared/Steps/Steps";
import styles from "./how-it-works.module.scss";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.title}>How it works</h2>
      <Steps
        steps={[
          {
            title: "Pick your coffee",
            desc: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
          },
          {
            title: "Choose the frequency",
            desc: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
          },
          {
            title: "Receive and enjoy!",
            desc: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
          },
        ]}
      />
    </section>
  );
}
