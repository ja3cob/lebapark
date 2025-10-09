import { useEffect, useState, useCallback } from "react";
import "./Gallery.css";
import { activateNavItem } from "../../components/Navbar/NavbarDesktop";

export default function Gallery() {
  const importAll = r => r.keys().map(r);
  let images = [];
  try {
    const req = require.context(
      "../../assets/gallery",
      false,
      /\.(png|jpe?g|webp|gif|avif)$/i
    );
    images = importAll(req).map(m => m.default || m);
  } catch (e) {
    images = [];
  }

  images.sort((a, b) => {
    const an = a.split("/").pop().toLowerCase();
    const bn = b.split("/").pop().toLowerCase();
    return an.localeCompare(bn, undefined, { numeric: true });
  });

  const [openIndex, setOpenIndex] = useState(null);

  const open = i => setOpenIndex(i);
  const close = () => setOpenIndex(null);
  const showPrev = useCallback(() => {
    setOpenIndex(i =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex(i => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = e => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, showNext, showPrev]);

  useEffect(() => {
    activateNavItem("nav-gallery");
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galeria</h1>

      {images.length === 0 ? (
        <h3 className="gallery-empty">Brak zdjęć</h3>
      ) : (
        <div className="gallery-grid">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => open(i)}
              className="gallery-item"
              aria-label={`Otwórz obraz ${i + 1}`}>
              <img src={src} alt={src.split("/").pop()} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <div className="lightbox-overlay" onClick={close}>
          <div className="lightbox" onClick={e => e.stopPropagation()}>
            <button className="lightbox-prev" onClick={showPrev}>
              <i className="fa-solid fa-chevron-left" />
            </button>
            <img
              src={images[openIndex]}
              alt={images[openIndex].split("/").pop()}
              className="lightbox-image"
            />
            <button className="lightbox-next" onClick={showNext}>
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
