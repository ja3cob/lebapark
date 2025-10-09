import { useLocation, useNavigate } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { scrollToSection } from "../../pages/MainPage/MainPage";

const Navbar = ({ isMobile, refs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = sectionName => {
    if (location.pathname === "/") {
      scrollToSection(refs[sectionName]);
      if (location.state?.scrollTo) {
        location.state.scrollTo = sectionName;
      }
    } else {
      navigate("/", { state: { scrollTo: sectionName } });
    }
  };

  return (
    <>
      {isMobile ? (
        <NavbarMobile handleItemClick={handleItemClick} />
      ) : (
        <NavbarDesktop handleItemClick={handleItemClick} />
      )}
    </>
  );
};

export default Navbar;
