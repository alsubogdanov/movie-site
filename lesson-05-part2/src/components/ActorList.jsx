import ActorCard from "./ActorCard.jsx";
import "./ActorList.css";

function ActorList({ title, actors }) {
  return (
    <section className="actor-list">
      <h2 className="actor-list__title">{title}</h2>
      <div className="actor-list__grid">
        {actors.map(actor => (
          <ActorCard
            fullName={actor.name}
            birthYear={actor.birthYear}
            country={actor.country}
            popularity={actor.popularity}
            oscars={actor.oscars}
            photo={actor.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default ActorList;
