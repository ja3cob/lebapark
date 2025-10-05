import News1 from "../../../assets/img/news-1.png";
import News2 from "../../../assets/img/news-2.png";
import News3 from "../../../assets/img/news-3.png";
import News4 from "../../../assets/img/news-4.png";
import { Scene } from "react-scrollmagic";
const News = ({ NewsRef }) => {
  return (
    <div className="news-container" ref={NewsRef}>
      <Scene duration={630} classToggle={[".nav-3", "active"]}>
        <div className="news-item">
          <img src={News1} alt="Aktualności" />
          <h2>AKTUALNOŚCI</h2>
          <h5>Wszystkie atrakcje w cenie biletu!</h5>
          <p>
            + bezpłatny przejazd z Łeby DINOBUSEM! Busy odjeżdżają z ul.Wojska
            Polskiego w Łebie każdego dnia wakacji od godz. 9:00
            <br />+ niestrzeżony parking dla zwiedzających, otwarty w godzinach
            pracy parku GRATIS!
          </p>
        </div>
      </Scene>
      <div className="news-item">
        <img src={News2} alt="Restauracje" />
        <h2>Przystanek na małe co nieco...</h2>
        <p>
          Chcesz zrobić sobie krótką przerwę w zabawie lub nabrać sił na kolejną
          dawkę emocji? Skorzystaj z naszej nowej strefy gastronomicznej.
          Specjalnie dla Was stworzyliśmy zróżnicowane menu, aby nikt nie
          wyszedł od nas głodny.
        </p>
        <p>
          Znajdziecie tu zestaw obiadowy, tradycyjne polskie pierogi, naleśniki
          czy pizzę.
          <br />
          Ci bardziej niecierpliwi mogą liczyć na klasyczne hamburgery, frytki i
          hot-dogi.
          <br />
          Wisienką na torcie są przepyszne lody i gofry, których jak wiadomo –
          nad morzem zabraknąć nie może.
        </p>
      </div>
      <div className="news-item">
        <img src={News3} alt="Sklepy" />
        <h2>SKLEPY</h2>
        <p>Koszulka, puzzle czy kubek z dinozaurem ?</p>
        <p>
          Nasz sklep z pamiątkami pozwoli na dłużej zachować wspomnienia z
          wizyty w Dino świecie. Poświęć chwilę i odwiedź nasz sklep z
          pamiątkami inspirowanymi Łeba Park – możesz być zaskoczony tym, co
          znajdziesz! Weź kawałek Łeba Park do domu.
        </p>
      </div>
      <div className="news-item">
        <img src={News4} alt="Nocleg" />
        <h2>NOCLEG</h2>
        <p>Chcesz zostać na dłużej?</p>
        <p>
          <a href="https://lebaparkresort.pl/">ŁEBA PARK RESORT</a> to obiekt,
          który jest położony bezpośrednio przy naszym parku!
        </p>
        <p>
          <a href="https://grandleba.pl/">GRAND ŁEBA</a> położony jest w centrum
          miasta tuż przy kanale Chełst. Ten obiekt to idealne miejsce dla osób
          chcących odpocząć w atmosferze ciszy i spokoju.
        </p>
      </div>

      <div className="news-additional">
        <h3>W CENIE NOCLEGU W GRAND ŁEBA wstęp do Parku GRATIS!*</h3>
        <p>
          Spędzasz wakacje w Łebie i jesteś gościem{" "}
          <a href="https://www.grandleba.pl/" target="blank">
            Grand Łeba
          </a>
          ? Wejście do naszego parku otrzymujesz GRATIS*! Położony w centrum
          miasta tuż przy kanale Chełst jest idealnym miejscem dla osób chcących
          odpocząć w atmosferze ciszy i spokoju. Aby dowiedzieć się więcej
          zadzwoń – +48723724722 lub wejdź na{" "}
          <a href="https://www.grandleba.pl/" target="blank">
            www.grandleba.pl
          </a>
          <br />
          <br />
          *minimalny czas pobytu to 3 doby z wyżywieniem
        </p>
      </div>
    </div>
  );
};

export default News;
