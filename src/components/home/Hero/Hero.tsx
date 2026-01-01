import { Link } from "react-router-dom";
import mainImg from "../../../assets/home/Hero.jpg";

export default function Hero() {
  return (
    <section>
      <h1>Great coffee made simple.</h1>
      <p>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <Link to="/create-plan">Create your plan</Link>
      <img src={mainImg} alt="Shimmering golden coffee pot and beans" />
    </section>
  );
}
