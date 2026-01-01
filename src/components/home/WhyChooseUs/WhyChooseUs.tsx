import Benefit from "./Benefit";

export default function WhyChooseUs() {
  return (
    <section>
      <h2>Why choose us?</h2>
      <p>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <div>
        <Benefit
          title="Best quality"
          desc="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
        />
        <Benefit
          title="Exclusive benefits"
          desc="Special offers and swag when you subscribe, including 30% off your first shipment."
        />
        <Benefit
          title="Free shipping"
          desc="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
        />
      </div>
    </section>
  );
}
