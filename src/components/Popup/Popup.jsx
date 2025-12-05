import { useCookies } from "react-cookie";
import "./Popup.css";
import { useState } from "react";

export default function Popup({ name, img, dateStart, dateEnd }) {
  const [cookies, setCookie] = useCookies([name]);

  const now = new Date();

  const [showPopup, setShowPopup] = useState(
    !cookies[name] && now >= dateStart && now <= dateEnd
  );

  const handlePopupClose = () => {
    setShowPopup(false);
    setCookie(name, true, { path: "/" });
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <i className="fa fa-xmark" onClick={handlePopupClose} />
            <img src={img} alt={name} />
          </div>
        </div>
      )}
    </>
  );
}
