import AttractionsStart from '../../assets/attractions_start.png';
import AttractionsPath from '../../assets/attractions_path.png';
import AttractionsArrow from '../../assets/attractions_arrow.png';
import AttractionsEnd from '../../assets/attractions_end.png';
import { Scene } from 'react-scrollmagic';

const AttractionsDesktop = ({ AttractionsRef }) => {
  return (
    <div className="attractions-container" ref={AttractionsRef}>
      <Scene duration={3888} classToggle={['.nav-2', 'active']}>
        <div className="attractions-start">
          <img src={AttractionsStart} alt="Spotkaj dinozaury w skali 1:1!" />
          <img
            className="attractions-arrow"
            src={AttractionsArrow}
            alt="Przejdź przez całą ścieżkę!"
          />
        </div>
      </Scene>
      <div className="attractions-content">
        <img
          src={AttractionsPath}
          alt="Poznaj ścieżkę, która prowadzi do każdej atrakcji Parku!"
        />
        <div className="attraction">
          <h3>Park trampolin</h3>
          <p>
            Ogromna przestrzeń, wypełniona
            parkourem, trampolinami, koszykówką, a także miejscem do robienia
            salt, fiflaków po, których bezpiecznie wylądujesz na poduchę.
            To miejsce pełne energii, rozrywki i adrenaliny, stworzone zarówno dla
            dzieci i dorosłych, lubiących aktywnie spędzać czas z rodziną i
            przyjaciółmi.
          </p>
        </div>
        <div className="attraction">
          <h3>Plac zabaw</h3>
          <p>
            Mega duży, zadaszony plac zabaw o powierzchni 1200m<sup>2</sup>, w którym
            znajduje się  mnóstwo rozmaitych atrakcji m.in. zjeżdżalnie, tory
            przeszkód czy tor ninja. To wszystko w połączeniu z dobrym humorem
            sprawi, że spędzisz tu niesamowity czas i niestraszna Ci będzie nawet
            deszczowa pogoda.
          </p>
        </div>
        <div className="attraction">
          <h3>Autodrom</h3>
          <p>
            Atrakcja którą zna niemal każdy! To
            must-have każdego parku rozrywki. Samochodowe szaleństwo, które od
            ponad stu lat zachwyca dzieci i dorosłych na całym świecie. Dreszczyk
            emocji i znakomita zabawa gwarantowana!
          </p>
        </div>
        <div className="attraction">
          <h3>Zamek strachu</h3>
          <p>
            Niesamowity, mrożący krew w żyłach zamek strachu zaprasza do swoich
            komnat wszystkich odwiedzających nasz Park. Takie show trzeba
            przeżyć!
          </p>
        </div>
        <div className="attraction">
          <h3>Minigolf w ŁebaPark</h3>
          <p>
            Gra w mini golfa jest doskonałą rozrywką dla całej rodziny.
            Przejście pola do minigolfa jest atrakcyjnym sposobem spędzenia
            wolnego czasu na świeżym powietrzu wraz z rodziną lub znajomymi,
            rywalizacja sportowa na pewno dostarczy wielu emocji. 
          </p>
        </div>
        <div className="attraction">
          <h3>Pojazdy Flinstonów</h3>
          <p>Z epoki Kredy prosto do epoki kamienia łupanego!</p>
        </div>
        <div className="attraction">
          <h3>Kopalnia złota</h3>
          <p>
            Wstąp w szeregi młodych zdobywców i zdobądź własny złoty piasek!
          </p>
        </div>
        <div className="attraction">
          <h3>Rowery wodne</h3>
          <p>
            Z dinozaurami i gadami w tle. Niezwykła zabawa dla całej rodziny,
            takich atrakcji trudno szukać gdzie indziej.
          </p>
        </div>
        <div className="attraction">
          <h3>Zjeżdżalnia Boomerang</h3>
          <p>
            Zjeżdżalnia Boomerang to gwarancja dobrej
            zabawy podczas długich wakacyjnych wypadów. Zjazd na pontonach bez
            potrzeby przebierania się w stroje kąpielowe! Idealny sposób na
            ochłodę w gorące dni! Wysokość ślizgu – 10 metrów, pontony
            jednoosobowe lub zjazd dzieci pod opieką dorosłego (do 10 roku
            życia).
          </p>
        </div>
        <div className="attraction">
          <h3>Zjeżdżalnia 4 w 1</h3>
          <p>
            KAMIKAZE! – doskonała zabawa dla najodważniejszych, zjeżdżalnia
            rodzinna, rura i speed to nasze sprawdzone pontonowe klasyki.
          </p>
        </div>
        <div className="attraction">
          <h3>Ścieżka edukacyjna</h3>
          <p>
            Podróż w czasie, fascynująca
            przygoda edukacyjna podczas spaceru ścieżką
            edukacyjną, ze specjalnych tablic będziesz mógł poznać rodzaje drzew
            i roślinności lasu, a także dowiesz się, jak powstało życie na
            ziemi.
          </p>
        </div>
        <div className="attraction">
          <h3>Koło młyńskie</h3>
          <p>
            Diabelski Młyn, wysoki na 27 metrów wyposażony w 20 gondoli stoi
            nieopodal naszych zjeżdżalni. Widok z góry zapiera dech w piersiach.
          </p>
        </div>
        <div className="attraction">
          <h3>Pojazd bajkowy</h3>
          <p>
            Wybierz się z nami w podróż do krainy bajek. 
          </p>
        </div>
        <div className="attraction">
          <h3>Labirynt magicznych luster</h3>
          <p>
            Labirynt Magicznych Luster (nie mylić z gabinetem krzywych
            zwierciadeł) to kolejna po “Szlaku Latarni Morskich” propozycja,
            wprowadzona do Naszego Parku w 2018 roku! Wejdź i przekonaj się sam,
            czym jest “złudzenie nieskończonego lustra”!
          </p>
        </div>
        <div className="attraction">
          <h3>Szlak latarni morskich</h3>
          <p>
            Czy możliwym jest opłynięcie wszystkich latarni morskich
            znajdujących się u wybrzeża polskiej części Bałtyku w jeden dzień?
            TAK! Tylko w Łeba Park wybierzesz się w podróż w koło miniatur
            latarni morskich znajdujących się na terenie Naszego Parku. Szlak
            latarni to 16 miniatur rozmieszczonych w koło basenów wodnych
            naszego parku do których dopłyniesz dostępnymi na miejscu rowerami
            wodnymi. Szlak dostępny jest również z poziomu wytyczonej ścieżki na
            lądzie.
          </p>
        </div>
      </div>
      <div className="attractions-end">
        <div className="end-img">
          <img
            src={AttractionsEnd}
            alt="Gwarantujemy nowe odkrycia przy każdej wizycie w Łeba Parku!"
          />
        </div>
      </div>
    </div>
  );
};

export default AttractionsDesktop;
