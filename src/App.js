import { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Gallery from "./pages/Gallery/Gallery";
import Booking from "./pages/Booking/Booking";
import BlackFriday from "./assets/img/popup-black-friday.png";

// function which limits resize event occurrence
function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
const App = () => {
  //cookies
  const [cookies, setCookie] = useCookies(["Popup"]);

  // handling resize to put good components on mobile or desktop devices

  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);
    if (width > 1000) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [width]);

  // references - scroll to section after navbar clicked
  const refs = {
    hero: useRef(),
    news: useRef(),
    visit: useRef(),
    reviews: useRef(),
    contact: useRef(),
  };

  // black friday popup
  const now = new Date();
  const blackFridayStart = new Date(2025, 11 - 1, 27);
  const blackFridayEnd = new Date(2025, 12 - 1, 5);

  const [showPopup, setShowPopup] = useState(
    !cookies.PopupClosed && now >= blackFridayStart && now <= blackFridayEnd
  );
  const handlePopupClose = () => {
    setShowPopup(false);
    setCookie("PopupClosed", true, { path: "/" });
  };

  return (
    <Router>
      <Navbar isMobile={isMobile} refs={refs} />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <i className="fa fa-xmark" onClick={handlePopupClose} />
            <img
              src={BlackFriday}
              alt="-20% na Black Friday z kodem promocyjnym BLACKFRIDAY2025"
            />
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<MainPage refs={refs} />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/rezerwacje" element={<Booking />} />
      </Routes>
      <footer>
        <a href="standardy_ochrony_malotenich.pdf">
          Standardy Ochrony Małoletnich
        </a>
        <p>Wszystkie prawa zastrzeżone.</p>
        <p>Copyright by Łeba Park © 2008-2025.</p>
      </footer>
    </Router>
  );
};

export default App;
