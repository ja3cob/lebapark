import { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Gallery from "./pages/Gallery/Gallery";
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
  const [cookies, setCookie] = useCookies(["CookiesParkLeba"]);
  const handleCookie = () => {
    setCookie("CookiesParkLeba", "CookiesAccepted", { path: "/" });
  };

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

  // cookies
  useEffect(() => {
    if (!cookies.CookiesParkLeba) {
      const cookiesBtn = document.querySelector(".cookies button");
      cookiesBtn.addEventListener("click", () => {
        cookiesBtn.parentElement.style.display = "none";
      });
    }
  });

  // references - scroll to section after navbar clicked
  const refs = {
    hero: useRef(),
    news: useRef(),
    visit: useRef(),
    reviews: useRef(),
    contact: useRef(),
  };

  return (
    <Router>
      <Navbar isMobile={isMobile} refs={refs} />
      {!cookies.CookiesParkLeba && (
        <div className="cookies">
          <p>Ta strona wykorzystuje pliki cookies.</p>{" "}
          <button onClick={handleCookie}>X</button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<MainPage refs={refs} />} />
        <Route path="/galeria" element={<Gallery />} />
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
