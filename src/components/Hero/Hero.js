import Logo from "../../assets/logo.png";
import Covid from "../../assets/hero.png";
import Video from "../../assets/hero.mp4";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const Hero = ({ HeroRef }) => {
  const videoRef = useRef(null);
  const [logoYPositionValue, setLogoYPositionValue] = useState(9999);
  const {ref, entry} = useInView({threshold: Array.from(Array(101).keys()).map(i => i / 100)});
  const [shouldUpdateBrightness, setShouldUpdateBrightness] = useState(true);

  useEffect(() => {
    setShouldUpdateBrightness(logoYPositionValue > 0);
  }, [logoYPositionValue]);

  useEffect(() => {
    if (!entry || !shouldUpdateBrightness) {
      return;
    }

    videoRef.current.style.filter = `brightness(${Math.max((1 - entry.intersectionRatio) * 100, 30)}%)`;
  }, [entry, shouldUpdateBrightness]);
  return (
    <div className="hero-container">
        <div className="hero-video" ref={videoRef}>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="hero-before-logo" ref={HeroRef}></div>
        <div className="hero-logo" ref={element => {ref(element); setLogoYPositionValue(element?.getBoundingClientRect().top);}}>
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
