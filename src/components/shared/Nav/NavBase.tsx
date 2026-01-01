import { Link } from "react-router-dom";
import { NAV_LINKS } from "./constants";

export default function NavBase() {
  return (
    <nav>
      <ul>
        {NAV_LINKS.map((item) => (
          <li>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
