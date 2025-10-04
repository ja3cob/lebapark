import ContactHeader from "../../assets/img/contact-header.png";
import Pfr from "../../assets/img/pfr.png";
import { Scene } from "react-scrollmagic";
import Facebook from "../../assets/img/facebook-logo.png";
import Instagram from "../../assets/img/instagram-logo.png";
import TikTok from "../../assets/img/tiktok-logo.png";

const Contact = ({ ContactRef }) => {
  return (
    <div className="contact-container" ref={ContactRef}>
      <div className="contact-text">
        <Scene duration={875} classToggle={[".nav-6", "active"]}>
          <div className="contact-header">
            <img src={ContactHeader} alt="Kontakt" />
          </div>
        </Scene>
        <div className="contact-info">
          <div className="contact-socialmedia">
            <a href="https://facebook.com/LebaPark">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com/leba_park">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://tiktok.com/@leba_park">
              <img src={TikTok} alt="TikTok" />
            </a>
          </div>
          <p>
            <strong>W razie pytań prosimy o kontakt telefoniczny:</strong>{" "}
            <a href="tel: 600 145 300">
              <span>600 145 300</span>
            </a>
            <br />
            lub o zapytanie mailowe wysłane na adres:
            <br />
            <span>e-mail: lebapark@lebapark.pl</span>
            <br />
            ul. Kolonijna 24A, Nowęcin k. Łeby
          </p>
          <p>
            <strong>Rezerwacja pobytu</strong> w hotelu{" "}
            <strong>Grand Łeba</strong> przez telefon:
            <br />
            <a href="tel: 723 724 722">
              <span>723 724 722</span>
            </a>
            <br />
            lub o zapytanie mailowe wysłane na adres e-mail:
            <br />
            <span>recepcja@grandleba.pl</span>
            <br />
            ul. Nad Ujściem 6, Łeba
          </p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Mapa Parku"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5477.59462849501!2d17.569985150005824!3d54.74401406392874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75fec43ac8da9ff!2s%C5%81eba%20Park!5e0!3m2!1spl!2spl!4v1591784480915!5m2!1spl!2spl"
          frameBorder={"0"}
          width={"100%"}
          height={"100%"}></iframe>
      </div>
      <p className="contact-reason">
        ** Dyrekcja Parku dokłada wszelkich starań, aby utrzymać w ciągłej pracy
        całą infrastrukturę. Informujemy, iż z przyczyn technicznych i/lub
        pogodowych niektóre z atrakcji mogą być niedostępne. Bezpieczeństwo
        przede wszystkim! W razie braku dostępności niektórych z atrakcji, nie
        przysługuje zwrot lub obniżenie ceny biletu.
      </p>
      <div className="voucher">
        <img src={Pfr} alt="PFR" />
      </div>
    </div>
  );
};

export default Contact;
