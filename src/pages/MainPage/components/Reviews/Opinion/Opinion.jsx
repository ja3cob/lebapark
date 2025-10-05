import "./Opinion.css";

export default function Opinion({
  author_name,
  rating,
  text,
  profile_photo_url,
  url,
}) {
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`star ${i <= rating ? "filled" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <a className="opinion-card" href={url} target="blank">
      <div className="opinion-header">
        <img
          src={profile_photo_url}
          alt={author_name}
          className="opinion-avatar"
        />
        <p className="opinion-author">{author_name}</p>
      </div>

      <div className="opinion-stars">{renderStars(rating)}</div>

      <p className="opinion-text">{text}</p>
    </a>
  );
}
