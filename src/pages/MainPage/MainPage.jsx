import { Controller } from "react-scrollmagic";
import Hero from "./components/Hero";
import PlanYourVisit from "./components/PlanYourVisit";
import News from "./components/News";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact";
import Separator1 from "../../assets/img/attractions-separator1.png";
import Separator2 from "../../assets/img/attractions-separator2.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { activateNavItem } from "../../components/Navbar/NavbarDesktop";

export function scrollToSection(sectionRef) {
  window.scrollTo({
    top: sectionRef?.current?.offsetTop - 80,
    behavior: "smooth",
  });
}

export default function MainPage({ refs }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(refs[location.state.scrollTo]);
        location.state.scrollTo = null;
      }, 100);
    }
  }, [location.state, refs]);

  useEffect(() => activateNavItem(), []);

  return (
    <Controller>
      <div className="content">
        <Hero HeroRef={refs.hero} />
        <img className="separator" src={Separator1} alt="Separator" />
        <PlanYourVisit VisitRef={refs.visit} />
        <img className="separator" src={Separator2} alt="Separator" />
        <News NewsRef={refs.news} />
        <img className="separator" src={Separator1} alt="Separator" />
        <Reviews ReviewsRef={refs.reviews} />
        <img className="separator" src={Separator2} alt="Separator" />
        <Contact ContactRef={refs.contact} />
      </div>
    </Controller>
  );
}
