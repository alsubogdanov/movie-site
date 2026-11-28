import ActorList from "./ActorList.jsx";
import ActorsToolbar from "./ActorsToolbar.jsx";
import { actors } from "../data/actors.js";

function ActorsPage() {
  return (
    <>
      <section className="page__intro">
        <h1>השחקנים</h1>
        <p>מי משחק בסרטים שבקטלוג שלנו.</p>
      </section>

      <div className="toolbar">
        <ActorsToolbar />
        <button className="btn">רק זוכי אוסקר</button>
      </div>

      <ActorList title="כל השחקנים" actors={actors} />
    </>
  );
}

export default ActorsPage;
