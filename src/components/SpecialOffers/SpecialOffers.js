import { Scene } from "react-scrollmagic";

const SpecialOffers = ({ OffersRef }) => {
  return (
    <div className="specialOffers-container" ref={OffersRef}>
      <Scene duration={1063} classToggle={[".nav-4", "active"]}>
        <div className="specialOffer-item">
          <h3>W CENIE NOCLEGU W GRAND ŁEBA wstęp do Parku GRATIS!*</h3>
          <p>
            Spędzasz wakacje w Łebie i jesteś gościem{" "}
            <a href="https://www.grandleba.pl/" target="blank">
              Grand Łeba
            </a>
            ? Wejście do naszego parku otrzymujesz GRATIS*! Grand Łeba to obiekt
            oddany do użytku w 2018 roku. Położony w centrum miasta tuż przy
            kanale Chełst jest idealnym miejscem dla osób chcących odpocząć w
            atmosferze ciszy i spokoju. Aby dowiedzieć się więcej zadzwoń –
            +48723724722 lub wejdź na{" "}
            <a href="https://www.grandleba.pl/" target="blank">
              www.grandleba.pl
            </a>
            <br />
            <br />
            *minimalny czas pobytu to 3 doby z wyżywieniem
          </p>
        </div>
      </Scene>
    </div>
  );
};

export default SpecialOffers;
