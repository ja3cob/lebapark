import Lead from "../../assets/lead.png";
import Map from "../../assets/mapa-thumb.jpg";
const ParkMap = () => {
  return (
    <div className="map-container">
      <div className="hero-map">
        <h3>Plan parku</h3>
        <a href="/mapa.jpg">
          <img src={Map} alt="Mapa parku" />
        </a>
      </div>
      <div className="hero-lead">
        <p className="lead-info">
          Wizyta u nas to niezwykła, fantastyczna przygoda w przeszłość, aż do
          epoki kredy. Tylko w Łebie w Parku Dinozaurów spotkasz trójwymiarowe
          gady naturalnej wielkości.
        </p>
        <div className="lead-img">
          <img src={Lead} alt="Trasa pełna przygód!" />
        </div>
        <p className="lead-info">
          Pełna przygód i atrakcji trasa, niezapomniane widoki i przeżycia,
          które na zawsze pozostaną w pamięci małego człowieka. Fantastyczna
          przygoda edukacyjna dla małych i doskonała zabawa dla dużych
          miłośników największych gadów w historii.
        </p>
      </div>
    </div>
  );
};

export default ParkMap;
