import MainNav from "../Nav/MainNav";
import SiteLogo from "../SiteLogo/SiteLogo";
import openNavMenuIcon from "../../../assets/shared/openNavMenu.png";
import closeNavMenuIcon from "../../../assets/shared/closeNavMenu.png";

export default function Header() {
  const isOpen = false;
  return (
    <header>
      <SiteLogo />
      <MainNav variant="header" />
      <button
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <img src={isOpen ? closeNavMenuIcon : openNavMenuIcon} />
      </button>
    </header>
  );
}
