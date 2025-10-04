import { Scene } from "react-scrollmagic";
import reviews from "../../assets/reviews.json";
import Opinion from "../Opinion/Opinion";
import "./Reviews.css";

export default function Reviews({ ReviewsRef }) {
  return (
    <div ref={ReviewsRef}>
      <Scene duration={562} classToggle={[".nav-4", "active"]}>
        <h2 style={{ textAlign: "center", marginTop: 0 }}>
          ⭐ Nasze opinie ⭐
        </h2>
      </Scene>
      <div className="reviews-container">
        {reviews.map(review => (
          <Opinion {...review} />
        ))}
      </div>
    </div>
  );
}
