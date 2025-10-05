const NavbarDesktop = ({ handleItemClick }) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="nav-1">
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("hero")}>
              Łeba Park
            </button>
          </li>
          <li className="nav-3">
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("news")}>
              Aktualności
            </button>
          </li>
          <li className="nav-5">
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("visit")}>
              Zaplanuj wizytę
            </button>
          </li>
          <li className="nav-4">
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("reviews")}>
              Opinie
            </button>
          </li>

          <li className="nav-6">
            <button
              className="mobile-menu-link"
              onClick={() => handleItemClick("contact")}>
              Kontakt
            </button>
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
    </>
  );
};

export default NavbarDesktop;
