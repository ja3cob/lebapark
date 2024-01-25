import AttractionsStart from '../../assets/attractions_start.png';
import AttractionsHeader from '../../assets/attractions_header.png';
import AttractionsSeparator1 from '../../assets/attractions-separator1.png';
import AttractionsSeparator2 from '../../assets/attractions-separator2.png';
import Attraction1 from './../../assets/attraction1.png';
import Attraction3 from './../../assets/attraction3.png';
import Attraction4 from './../../assets/attraction4.png';
import Attraction5 from './../../assets/attraction5.png';
import Attraction6 from './../../assets/attraction6.png';
import Attraction10 from './../../assets/attraction10.png';
import Attraction11 from './../../assets/attraction11.png';
import Attraction12 from './../../assets/attraction12.png';
import Attraction13 from './../../assets/attraction13.png';
import Attraction16 from './../../assets/attraction16.png';
import Attraction17 from './../../assets/attraction17.png';
import Attraction18 from './../../assets/attraction18.png';
import Attraction19 from './../../assets/attraction19.png';
import AttractionsEnd from '../../assets/attractions_end.png';

const AttractionsMobile = ({ AttractionsRef }) => {
  return (
    <div className="attractions-container">
      <div className="attractions-start">
        <img src={AttractionsStart} alt="Spotkaj dinozaury w skali 1:1!" />
      </div>
      <div className="attractions-header" ref={AttractionsRef}>
        <img src={AttractionsHeader} alt="Atrakcje" />
      </div>
      <div className='attraction'>
        <h3 className='attraction-name'>Park trampolin</h3>
        <div className="attraction-img">
          <img src={Attraction18} alt="Park trampolin" />
        </div>
        <div className='attraction-info'>
          Ogromna przestrzeń, wypełniona
          parkourem, trampolinami, koszykówką, a także miejscem do robienia
          salt, fiflaków po, których bezpiecznie wylądujesz na poduchę.
          To miejsce pełne energii, rozrywki i adrenaliny, stworzone zarówno dla
          dzieci i dorosłych, lubiących aktywnie spędzać czas z rodziną i
          przyjaciółmi.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className='attraction'>
        <h3 className='attraction-name'>Plac zabaw</h3>
        <div className="attraction-img">
          <img src={Attraction17} alt="Plac zabaw" />
        </div>
        <div className='attraction-info'>
            Mega duży, zadaszony plac zabaw o powierzchni 1200m<sup>2</sup>, w którym
            znajduje się  mnóstwo rozmaitych atrakcji m.in. zjeżdżalnie, tory
            przeszkód czy tor ninja. To wszystko w połączeniu z dobrym humorem
            sprawi, że spędzisz tu niesamowity czas i niestraszna Ci będzie nawet
            deszczowa pogoda.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className='attraction'>
        <h3 className='attraction-name'>Autodrom</h3>
        <div className="attraction-img">
          <img src={Attraction19} alt="Autodrom" />
        </div>
        <div className='attraction-info'>
            Atrakcja którą zna niemal każdy! To
            must-have każdego parku rozrywki. Samochodowe szaleństwo, które od
            ponad stu lat zachwyca dzieci i dorosłych na całym świecie. Dreszczyk
            emocji i znakomita zabawa gwarantowana!
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Zamek strachu</h3>
        <div className="attraction-img">
          <img src={Attraction1} alt="Zamek strachu" />
        </div>
        <div className="attraction-info">
          Niesamowity, mrożący krew w żyłach zamek strachu zaprasza do swoich
          komnat wszystkich odwiedzających nasz Park. Takie show trzeba przeżyć!
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Minigolf</h3>
        <div className="attraction-img">
          <img src={Attraction3} alt="Minigolf" />
        </div>
        <div className="attraction-info">
          Gra w mini golfa jest doskonałą rozrywką dla całej rodziny. Przejście
          pola do minigolfa jest atrakcyjnym sposobem spędzenia wolnego czasu na
          świeżym powietrzu wraz z rodziną lub znajomymi, rywalizacja sportowa
          na pewno dostarczy wielu emocji. 
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Pojazdy Flinstonów</h3>
        <div className="attraction-img">
          <img src={Attraction4} alt="Pojazdy Flinstonów" />
        </div>
        <div className="attraction-info">
          Z epoki Kredy prosto do epoki kamienia łupanego!
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Kopalnia złota</h3>
        <div className="attraction-img">
          <img src={Attraction5} alt="Kopalnia złota" />
        </div>
        <div className="attraction-info">
          Wstąp w szeregi młodych zdobywców i zdobądź własny złoty piasek!
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator1} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Rowery wodne</h3>
        <div className="attraction-img">
          <img src={Attraction6} alt="Rowery wodne" />
        </div>
        <div className="attraction-info">
          Z dinozaurami i gadami w tle. Niezwykła zabawa dla całej rodziny,
          takich atrakcji trudno szukać gdzie indziej.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Zjeżdżalnia Boomerang</h3>
        <div className="attraction-img">
          <img src={Attraction11} alt="Zjeżdżalnia Boomerang" />
        </div>
        <div className="attraction-info">
          Zjeżdżalnia Boomerang to gwarancja dobrej zabawy
          podczas długich wakacyjnych wypadów. Zjazd na pontonach bez potrzeby
          przebierania się w stroje kąpielowe !!! Idealny sposób na ochłodę w
          gorące dni! Wysokość ślizgu – 10 metrów, pontony jednoosobowe lub
          zjazd dzieci pod opieką dorosłego (do 10 roku życia).
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Zjeżdżalnia 4 w 1</h3>
        <div className="attraction-img">
          <img src={Attraction10} alt="Zjeżdżalnia 4 w 1" />
        </div>
        <div className="attraction-info">
          KAMIKAZE! – doskonała zabawa dla najodważniejszych, zjeżdżalnia rodzinna, rura i speed to nasze sprawdzone pontonowe klasyki.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name attraction-name-noimg">
          Ścieżka edukacyjna
        </h3>
        <div className="attraction-info">
          Podróż w czasie, fascynująca
          przygoda edukacyjna podczas spaceru ścieżką
          edukacyjną, ze specjalnych tablic będziesz mógł poznać rodzaje drzew i
          roślinności lasu, a także dowiesz się, jak powstało życie na ziemi.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Koło młyńskie</h3>
        <div className="attraction-img">
          <img src={Attraction12} alt="Koło młyńskie" />
        </div>
        <div className="attraction-info">
          Diabelski Młyn, wysoki na 27 metrów wyposażony w 20 gondoli stoi
          nieopodal naszych zjeżdżalni. Widok z góry zapiera dech w piersiach.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name">Pojazd Bajkowy</h3>
        <div className="attraction-img">
          <img src={Attraction13} alt="Kolejka Czerwonego Kapturka" />
        </div>
        <div className="attraction-info">
          Wybierz się z nami w podróż do krainy bajek.
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction">
        <h3 className="attraction-name attraction-name-noimg">
          Labirynt magicznych luster
        </h3>
        <div className="attraction-info">
          Labirynt Magicznych Luster (nie mylić z gabinetem krzywych
          zwierciadeł) to kolejna po “Szlaku Latarni Morskich” propozycja,
          wprowadzona do Naszego Parku w 2018 roku! Wejdź i przekonaj się sam,
          czym jest “złudzenie nieskończonego lustra”!
        </div>
      </div>
      <div className="attractions-separator">
        <img src={AttractionsSeparator2} alt="" />
      </div>
      <div className="attraction-last">
        <h3 className="attraction-name">Szlak latarni morskich</h3>
        <div className="attraction-img">
          <img src={Attraction16} alt="Szlak latarni morskich" />
        </div>
        <div className="attraction-info">
          Czy możliwym jest opłynięcie wszystkich latarni morskich znajdujących
          się u wybrzeża polskiej części Bałtyku w jeden dzień? TAK! Tylko w
          Łeba Park wybierzesz się w podróż w koło miniatur latarni morskich
          znajdujących się na terenie Naszego Parku. Szlak latarni to 16
          miniatur rozmieszczonych w koło basenów wodnych naszego parku do
          których dopłyniesz dostępnymi na miejscu rowerami wodnymi. Szlak
          dostępny jest również z poziomu wytyczonej ścieżki na lądzie.
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

export default AttractionsMobile;
