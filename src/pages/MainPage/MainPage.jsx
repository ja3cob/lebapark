import { Controller } from "react-scrollmagic";
import Hero from "./components/Hero";
import PlanYourVisit from "./components/PlanYourVisit";
import News from "./components/News";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact";
import Separator1 from "../../assets/img/attractions-separator1.png";
import Separator2 from "../../assets/img/attractions-separator2.png";

export default function MainPage({ refs }) {
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
