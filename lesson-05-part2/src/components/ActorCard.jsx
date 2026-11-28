import "./ActorCard.css";

function ActorCard({ name, birthYear, country, popularity, oscars, photo }) {
  return (
    <article className="actor-card">
      <img className="actor-card__photo" src="photo" alt={name} />
      <div className="actor-card__body">
        <h3 className="actor-card__name">{name}</h3>
        <p className="actor-card__meta">
          {country} · נולד/ה ב־{birthYear}
        </p>
        <div className="actor-card__footer">
          <span className="actor-card__popularity">פופולריות {popularity}</span>
          {oscars && <span className="actor-card__oscar">🏆 {oscars}</span>}
        </div>
      </div>
    </article>
  );
}

export default ActorCard;
