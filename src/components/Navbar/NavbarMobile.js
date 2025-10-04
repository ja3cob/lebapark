import MobileMenuScript from "./MobileMenuScript";
import Logo from "../../assets/img/logo.png";
const NavbarMobile = ({ refs }) => {
  const [HeroRef, NewsRef, VisitRef, ContactRef] = refs;
  const handleScroll = item => {
    window.scrollTo({
      top: item.current.offsetTop - 65,
      behavior: "smooth",
    });
  };
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
              onClick={() => handleScroll(HeroRef)}>
              Łeba Park
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(NewsRef)}>
              Aktualności
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(VisitRef)}>
              Zaplanuj wizytę
            </button>
          </li>

          <li>
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
        <div className="menu-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </div>
      <MobileMenuScript />
    </>
  );
};

export default NavbarMobile;
