import "./SearchBar.css";

function ActorsToolbar() {
  return (
    <div className="search-bar">
      <label className="search-bar__field search-bar__field--grow">
        <span className="search-bar__label">חיפוש</span>
        <input className="search-bar__input" type="text" placeholder="שם השחקן..." />
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">מדינה</span>
        <select className="search-bar__input">
          <option value="all">כל המדינות</option>
        </select>
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">מיון</span>
        <select className="search-bar__input">
          <option value="name">לפי שם</option>
          <option value="age">לפי גיל</option>
          <option value="popularity">לפי פופולריות</option>
          <option value="movies">לפי מספר סרטים</option>
        </select>
      </label>
    </div>
  );
}

export default ActorsToolbar;
