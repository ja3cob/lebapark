import Logo from "../assets/img/logo.png";
import Covid from "../assets/img/hero.png";
import Map from "../assets/img/mapa-thumb.jpg";
import { Scene } from "react-scrollmagic";
import Video from "../assets/img/hero.mp4";
import Poster from "../assets/img/hero-poster.jpg";

const Hero = ({ HeroRef }) => {
  return (
    <div className="hero-container" ref={HeroRef}>
      <Scene duration={853} classToggle={[".nav-1", "active"]}>
        <div className="hero-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </Scene>
      <div className="hero-covid">
        <img src={Covid} alt="Możliwość zakupienia biletu online" />

        <h2 className="covid-button">KUP BILET ONLINE</h2>
      </div>
      <div className="hero-video">
        <h3>Zobacz filmik</h3>
        <video
          className="hero-box"
          poster={Poster}
          preload="auto"
          autoPlay
          muted
          loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-lead">
        <h3>RODZINNY PARK ROZRYWKI ŁEBA PARK</h3>
        <h3>JESTEŚMY Z WAMI OD 2010 ROKU !!!</h3>
        <p className="lead-info">
          To Świat radości, emocji i wspólnych wspomnień do, którego będziecie
          chcieli wracać. To miejsce, gdzie rodziny spędzają czas razem, dzieci
          rozwijają swoją wyobraźnię a dorośli odnajdują w sobie dziecięcą
          radość. Różnorodność dostępnych atrakcji sprawia, że niezależnie od
          wieku i zainteresowań-w naszym Parku każdy znajdzie coś dla siebie. To
          nie tylko wizyta w parku-to emocje, rodzinne wspomnienia, które
          zostają w pamięci na lata. Przyjdźcie razem i przekonajcie się, że
          najpiękniejsze chwile to te, które spędzamy we wspólnym gronie. Pogoda
          nam nie straszna, czy świeci słońce, czy pada deszcz w Łeba Park super
          zabawa jest. Część naszych atrakcji znajduje się pod dachem.
        </p>
      </div>
      <div className="hero-map">
        <h3>Plan parku</h3>
        <a href="/mapa.jpg" target="blank">
          <img className="hero-box" src={Map} alt="Mapa parku" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
