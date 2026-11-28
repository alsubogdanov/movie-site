import "./Header.css";

function Header({ page, onPageChange }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__logo" href="/">
          <span className="header__logo-mark">▶</span>
          CinemaClub
        </a>
        <nav className="header__nav">
          <button
            className={page === "movies" ? "header__link--active" : "header__link"}
            onClick={() => onPageChange("movies")}
          >
            סרטים
          </button>
          <button
            className={page === "actors" ? "header__link header__link--active" : "header__link"}
            onClick={onPageChange("actors")}
          >
            שחקנים
          </button>
          <a className="header__link" href="/">הרשימה שלי</a>
          <a className="header__link" href="/">אודות</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
