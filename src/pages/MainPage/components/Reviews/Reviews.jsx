import { Scene } from "react-scrollmagic";
import reviews from "../../../../assets/reviews.json";
import Opinion from "./Opinion/Opinion";
import "./Reviews.css";

export default function Reviews({ ReviewsRef }) {
  let index = 0;

  return (
    <div ref={ReviewsRef}>
      <Scene duration={562} classToggle={[".nav-reviews", "active"]}>
        <h2 style={{ textAlign: "center", marginTop: 0 }}>
          ⭐ Nasze opinie ⭐
        </h2>
      </Scene>
      <div className="reviews-container">
        {reviews.slice(0, 3).map(review => (
          <Opinion {...review} key={index++} />
        ))}
      </div>
      <div className="reviews-container">
        {reviews.slice(3, 6).map(review => (
          <Opinion {...review} key={index++} />
        ))}
      </div>
    </div>
  );
}
