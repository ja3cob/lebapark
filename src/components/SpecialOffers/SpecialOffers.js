import SpecialOffersHeader from '../../assets/specialOffers-header.png';
import { Scene } from 'react-scrollmagic';
const SpecialOffers = ({ OffersRef }) => {
  return (
    <div className="specialOffers-container" ref={OffersRef}>
      <Scene duration={1063} classToggle={['.nav-4', 'active']}>
      <div className="specialOffer-item">
        <h3>W CENIE NOCLEGU W GRAND ŁEBA wstęp do Parku GRATIS!*</h3>
        <p>
          Spędzasz wakacje w Łebie i jesteś gościem{' '}
          <a href="https://www.grandleba.pl/" target="blank">
            Grand Łeba
          </a>
          ? Wejście do naszego parku otrzymujesz GRATIS*! Grand Łeba to obiekt
          oddany do użytku w 2018 roku. Położony w centrum miasta tuż przy
          kanale Chełst jest idealnym miejscem dla osób chcących odpocząć w
          atmosferze ciszy i spokoju. Aby dowiedzieć się więcej zadzwoń –
          +48723724722 lub wejdź na{' '}
          <a href="https://www.grandleba.pl/" target="blank">
            www.grandleba.pl
          </a>
          <br />
          <br />
          *minimalny czas pobytu to 3 doby z wyżywieniem
        </p>
      </div>
      <div className="specialOffer-item">
        <h3>WSZYSTKIE ATRAKCJE W CENIE BILETU</h3>
        <ul>
          <li>Zadaszony plac zabaw 1200m<sup>2</sup></li>
          <li>Profesjonalny park trampolin</li>
          <li>Autodrom</li>
          <li>Ogromne zjeżdżalnie wodne (zjazd w ubraniu)</li>
          <li>Zamek strachu</li>
          <li>Eurobungee</li>
          <li>Dmuchawce</li>
          <li>Największe w Polsce pole Minigolfa</li>
          <li>Wstęp do galerii minerałów i skamielin</li>
          <li>Pojazdy Flinstonów</li>
          <li>Rowery wodne dla rodzin</li>
          <li>Strzelanie z wiatrówki</li>
          <li>Kopalnia złota</li>
          <li>Pojazdy wodne dla dzieci</li>
          <li>Przejazd pojazdem bajkowym</li>
          <li>Wstęp na Diabelski Młyn (koło młyńskie) wysoki na 27 metrów!</li>
          <li>Labirynt magicznych luster</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialOffers;
