import "./Booking.css";
import TextBox from "../../components/TextBox/TextBox";
import SelectBox from "../../components/SelectBox/SelectBox";
import { useEffect, useState } from "react";
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

  const [status, setStatus] = useState({ type: "", message: "" });
  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ type: "success", message: "Wysłano formularz!" });
        form.reset();
      } else {
        let resultStatus = "";
        if (result.errors) {
          resultStatus = result.errors.join("\n");
        } else {
          resultStatus = "Błąd wysyłania formularza";
        }

        setStatus({ type: "error", message: resultStatus });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Błąd sieci" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-container">
      <h1>REZERWACJA POBYTU GRUPY</h1>
      <h2 className="booking-title">
        Informacje o{" "}
        <SelectBox name="institutionType" options={institutionTypes} />
      </h2>
      <div className="booking-section">
        <div className="booking-fields-container">
          <TextBox caption="Nazwa" name="name" required />
          <TextBox caption="Adres e-mail" name="email" type="email" required />
          <TextBox caption="Ulica" name="street" required />
          <TextBox caption="Miasto" name="city" required />
        </div>
        <div className="booking-fields-container">
          <TextBox caption="NIP (tylko przy fakturach)" name="nip" />
          <TextBox caption="Numer telefonu" name="phone" type="tel" required />
          <SelectBox
            caption="Województwo"
            name="voivodeShip"
            options={voivodeShips}
          />
          <TextBox caption="Kod pocztowy" name="zip" required />
        </div>
      </div>

      <h2>Opiekun grupy/rezerwujący</h2>

      <TextBox caption="Imię i nazwisko" name="teacherName" required />
      <div className="booking-section">
        <div className="booking-fields-container">
          <TextBox
            caption="Adres e-mail"
            name="teacherEmail"
            type="email"
            required
          />
          <TextBox
            caption="Ilość dzieci"
            name="childrenQuantity"
            type="number"
            min={1}
            required
          />
        </div>
        <div className="booking-fields-container">
          <TextBox
            caption="Numer telefonu"
            name="teacherPhone"
            type="tel"
            required
          />
          <TextBox
            caption="Ilość opiekunów"
            name="teachersQuantity"
            type="number"
            min={1}
            required
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

      {status.message && (
        <pre
          className="status-message"
          style={
            status.type === "error" ? { color: "red" } : { color: "green" }
          }>
          {status.message}
        </pre>
      )}
      <button type="submit" className="btn-booking-submit">
        Rezerwuj
      </button>

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
