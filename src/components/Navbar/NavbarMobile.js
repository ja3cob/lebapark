import MobileMenuScript from "./MobileMenuScript";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
const NavbarMobile = ({ handleItemClick }) => {
  return (
    <>
      <nav className="navbar-mobile">
        <div className="mobile__hamburger">
          <div className="hamburger__line hamburger__line-top"></div>
          <div className="hamburger__line hamburger__line-mid"></div>
          <div className="hamburger__line hamburger__line-bottom"></div>
        </div>
        <input type="checkbox" className="navbar__checkbox" />
      </nav>
      <div className="mobile-menu">
        <ul>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("hero")}>
              Łeba Park
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("visit")}>
              Zaplanuj wizytę
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("news")}>
              Aktualności
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("reviews")}>
              Opinie
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("contact")}>
              Kontakt
            </button>
          </li>
          <li>
            <Link className="mobile-menu-link" to="/rezerwacje">
              Rezerwacje
            </Link>
          </li>
          <li>
            <Link className="mobile-menu-link" to="/galeria">
              Galeria
            </Link>
          </li>
          <li>
            <button className="mobile-menu-link open-modal">Kup bilet</button>
          </li>
          <li>
            <a className="mobile-menu-link" href="/menu.jpg" target="blank">
              Menu
            </a>
          </li>
        </ul>
        <div className="menu-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </div>
      <MobileMenuScript />
    </>
  );
};

export default NavbarMobile;
