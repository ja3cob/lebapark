import { Link } from "react-router-dom";

export function activateNavItem(itemClassName) {
  document.querySelectorAll(".nav-item").forEach(navItem => {
    navItem.classList.remove("active");
  });

  if (itemClassName) {
    document
      .querySelector(`.nav-item.${itemClassName}`)
      ?.classList.add("active");
  }
}

const NavbarDesktop = ({ handleItemClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item nav-hero">
          <button
            className="mobile-menu-link"
            onClick={() => handleItemClick("hero")}>
            Łeba Park
          </button>
        </li>
        <li className="nav-item nav-visit">
          <button
            className="mobile-menu-link"
            onClick={() => handleItemClick("visit")}>
            Zaplanuj wizytę
          </button>
        </li>
        <li className="nav-item nav-news">
          <button
            className="mobile-menu-link"
            onClick={() => handleItemClick("news")}>
            Aktualności
          </button>
        </li>
        <li className="nav-item nav-reviews">
          <button
            className="mobile-menu-link"
            onClick={() => handleItemClick("reviews")}>
            Opinie
          </button>
        </li>

        <li className="nav-item nav-contact">
          <button
            className="mobile-menu-link"
            onClick={() => handleItemClick("contact")}>
            Kontakt
          </button>
        </li>
        <li className="nav-item nav-booking">
          <Link className="mobile-menu-link" to="/rezerwacje">
            Rezerwacje
          </Link>
        </li>
        <li className="nav-item nav-gallery">
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
    </nav>
  );
};

export default NavbarDesktop;
