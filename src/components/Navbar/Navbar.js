import { useLocation, useNavigate } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = ({ isMobile, refs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = sectionName => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: refs[sectionName]?.current?.offsetTop - 80,
        behavior: "smooth",
      });
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
