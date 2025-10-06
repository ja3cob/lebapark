import "./Booking.css";
import TextBox from "../../components/TextBox/TextBox";
import SelectBox from "../../components/SelectBox/SelectBox";
import { useEffect } from "react";
import { activateNavItem } from "../../components/Navbar/NavbarDesktop";

const voivodeShips = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
];

const foodTypes = [
  "Nuggetsy z polędwiczek z kurczaka z frytkami i surówką + napój",
  "Pierś z kurczaka panierowana z frytkami i surówką + napój",
];

const institutionTypes = ["szkole", "przedszkolu"];

export default function Booking() {
  useEffect(() => {
    activateNavItem("nav-booking");
  }, []);

  return (
    <form className="booking-container">
      <h1>REZERWACJA POBYTU GRUPY</h1>
      <h2 className="booking-title">
        Informacje o{" "}
        <SelectBox name="institutionType" options={institutionTypes} />
      </h2>
      <div className="booking-section">
        <div className="booking-fields-container">
          <TextBox caption="Nazwa" name="name" />
          <TextBox caption="Adres e-mail" name="email" type="email" />
          <TextBox caption="Ulica" name="street" />
          <TextBox caption="Miasto" name="city" />
        </div>
        <div className="booking-fields-container">
          <TextBox
            caption="NIP (tylko przy fakturach)"
            name="nip"
            type="number"
          />
          <TextBox caption="Numer telefonu" name="phone" type="tel" />
          <SelectBox
            caption="Województwo"
            name="voivodeShips"
            options={voivodeShips}
          />
          <TextBox caption="Kod pocztowy" name="zip" />
        </div>
      </div>

      <h2>Opiekun grupy/rezerwujący</h2>
      <div className="booking-section">
        <div className="booking-fields-container">
          <TextBox caption="Imię i nazwisko" name="teacherName" />
          <TextBox caption="Adres e-mail" name="teacherEmail" type="email" />
          <TextBox
            caption="Ilość dzieci"
            name="childrenQuantity"
            type="number"
          />
        </div>
        <div className="booking-fields-container">
          <TextBox caption="Numer telefonu" name="teacherPhone" type="tel" />
          <TextBox
            caption="Ilość opiekunów"
            name="teachersQuantity"
            type="number"
          />
        </div>
      </div>

      <SelectBox
        caption="Posiłek do wyboru"
        className="booking-input"
        name="foodType"
        options={foodTypes}
      />

      <TextBox
        caption="Dodatkowe informacje"
        className="booking-input"
        name="additionalInfo"
        rich={true}
      />

      <button className="btn-booking-submit">Rezerwuj</button>

      <div className="booking-group-quantities">
        <p>
          Grupa szkolna liczy <span>20 osób</span>
        </p>
        <p>
          Grupa przedszkolna liczy <span>15 osób</span>
        </p>
      </div>
    </form>
  );
}
