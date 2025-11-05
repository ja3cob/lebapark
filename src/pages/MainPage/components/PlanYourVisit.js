import VisitHeader1 from "../../../assets/img/visit-header1.png";
import VisitHeader2 from "../../../assets/img/visit-header2.png";
import VisitHeader3 from "../../../assets/img/visit-header3.png";
import VisitLink2 from "../../../assets/img/visit-link2.png";
import { Scene } from "react-scrollmagic";
const PlanYourVisit = ({ VisitRef }) => {
  return (
    <div className="visit-container" ref={VisitRef}>
      <div className="visit-section">
        <Scene duration={1290} classToggle={[".nav-visit", "active"]}>
          <div className="visit-header">
            <img src={VisitHeader1} alt="Zaplanuj swoją wizytę." />
          </div>
        </Scene>
        <p className="visit-text">
          Nasze <span>elektryczne pojazdy</span> dowiozą Państwa do naszego
          parku za darmo. Parkujemy w centrum Łeby – ulica Wojska Polskiego
          (obok pizzerii Lider). Pierwszy przejazd wykonujemy o godzinie{" "}
          <span>9:00</span>, busy odjeżdżają <span>co 10 minut</span> (wg.
          zajętości pojazdów).
        </p>
      </div>
      <div className="visit-items">
        <div className="visit-item">
          <div className="visit-header">
            <img src={VisitHeader2} alt="Kalendarz" />
          </div>
          <h4>od 25 kwietnia do 26 kwietnia: 9:00 – 17:30</h4>
          <p>kasa czynna do 16:00</p>
          <h4>od 30 kwietnia do 3 maja: 9:00 – 18:30</h4>
          <p>kasa czynna do 17:00</p>
          <h4>od 4 maja do 29 maja: 9:00 – 17:30</h4>
          <p>kasa czynna do 16:00</p>
          <h4>od 30 maja do 26 czerwca: 9:00 – 18:30</h4>
          <p>kasa czynna do 17:00</p>
          <h4>od 27 czerwca do 23 sierpnia: 9:00 – 19:30</h4>
          <p>kasa czynna do 18:00</p>
          <h4>od 24 sierpnia do 6 września: 9:00 – 17:30</h4>
          <p>kasa czynna do 16:00</p>

          <h4>od 7 września do 9 września: park nieczynny</h4>
          <h4>od 10 września do 13 września: 9:00 – 16:30</h4>
          <p>kasa czynna do 15:00</p>
          <h4>od 14 września do 16 września: park nieczynny</h4>
          <h4>od 17 września do 20 września: 9:00 – 16:30</h4>
          <p>kasa czynna do 15:00</p>
          <h4>od 21 września do 23 września park nieczynny</h4>
          <h4>od 24 września do 27 września: 9:00 – 16:30</h4>
          <p>kasa czynna do 15:00</p>

          <h4>od 28 września park jest nieczynny</h4>

          <h4>PO ZAMKNIĘCIU KASY BILET MOŻNA KUPIĆ TYLKO ONLINE</h4>
        </div>
        <div className="visit-item">
          <div className="visit-header">
            <img src={VisitHeader3} alt="Cennik" />
          </div>
          <h4>
            DZIECI DO WZROSTU 100 cm WCHODZĄ <span>GRATIS</span>
          </h4>
          <p>Nie dotyczy grup szkolnych i przedszkolnych</p>

          <h4>Bilet normalny: 119 zł</h4>
          <h4>Bilet ulgowy: 99 zł</h4>
          <p>
            Emeryci, renciści, osoby niepełnosprawne, dzieci i młodzież do 15
            roku życia za okazaniem ważnej legitymacji uprawniającej do zniżki
          </p>

          <h4>Bilet grupowy szkolny: 69 zł</h4>
          <p>
            Tylko dla dzieci i młodzieży do 15 roku życia w zorganizowanych
            grupach szkolnych, zielonych szkół, koloniach powyżej 20 osób. Na
            każde 10 dzieci - 1 opiekun wchodzi gratis!
          </p>

          <h4>Bilet grupowy przedszkolny: 59 zł</h4>
          <p>
            Tylko dla dzieci z przedszkoli w grupach powyżej 15 osób. Na każde
            10 dzieci - 1 opiekun wchodzi gratis!
          </p>
        </div>
      </div>

      <div className="visit-links">
        <button className="visit-link open-modal">
          <img src={VisitLink2} alt="Kup bilety online!" />
        </button>
      </div>

      <div className="visit-item visit-item-additional">
        <h3 className="visit-additional">Informacje dodatkowe</h3>
        {/* <div className='visit-header'> */}
        {/* <img src={VisitHeader4} alt='Dodatkowe informacj, mapa parku' /> */}
        {/* </dnpm iv> */}
        <ul>
          <li>
            pracownicy Łeba Parku służą w każdej chwili informacją i pomocą,
            dbamy również o bezpieczeństwo wszystkich zwiedzających, dlatego
            każda osoba obsługi wyposażona jest w znakowany logo parku ubiór.
          </li>
          <li>na terenie Łeba Parku istnieje możliwość płatności kartą</li>
          <li>
            Łeba Park posiada wszelkie udogodnienia dla osób niepełnosprawnych,
          </li>
          <li>przed Łeba Parkiem czeka na Państwa bezpłatny parking,</li>
          <li>na terenie Łeba Parku obowiązuje zakaz wstępu ze zwierzętami.</li>
        </ul>
        {/* <a href={ParkMap} download='Mapa Parku Dinozaurów Łeba'> */}
        {/* Pobierz <span>mapę parku</span> */}
        {/* </a> */}
      </div>
    </div>
  );
};

export default PlanYourVisit;
