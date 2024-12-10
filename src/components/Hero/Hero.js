import Logo from "../../assets/logo.png";
import Covid from "../../assets/hero.png";
import Video from "../../assets/hero.mp4";
import { Scene } from "react-scrollmagic";

const Hero = ({ HeroRef }) => {
  return (
    <div className="hero-container">
        <div className="hero-video">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="hero-before-logo" ref={HeroRef}></div>
        <div className="hero-logo">
          <Scene duration={853} classToggle={[".nav-1", "active"]}>
            <img src={Logo} alt="Logo parku dinozaurów Łeba" />
          </Scene>
          <div className="hero-covid">
            <img
              src={Covid}
              alt="Możliwość zakupienia biletu online"
            />
            <h2 className="covid-button">KUP BILET ONLINE</h2>
          </div>
        </div>
    </div>
  );
};

export default Hero;
