const NavbarDesktop = ({ refs }) => {
  const [HeroRef, AttractionsRef, NewsRef, OffersRef, VisitRef, ContactRef] =
    refs;
  const handleScroll = item => {
    window.scrollTo({
      top: item.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="nav-1">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(HeroRef)}>
              Łeba Park
            </button>
          </li>
          <li className="nav-2">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(AttractionsRef)}>
              Atrakcje
            </button>
          </li>
          <li className="nav-3">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(NewsRef)}>
              Aktualności
            </button>
          </li>
          <li className="nav-4">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(OffersRef)}>
              Oferty specjalne
            </button>
          </li>
          <li className="nav-5">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(VisitRef)}>
              Zaplanuj wizytę
            </button>
          </li>

          <li className="nav-6">
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(ContactRef)}>
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
