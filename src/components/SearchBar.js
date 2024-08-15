import React, { useState } from 'react';
import './SearchBar.css'; // Ensure to import the CSS file

const SearchBar = ({ workouts }) => {
  const [search, setSearch] = useState("");

  const searchResult = workouts.filter(item => {
    if (search === "") {
      return false;
    } else {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const workout = searchResult.map((item, index) => (
    <section key={index} className="search-result-item">
      <h2 className="result-title">{item.name}</h2>
      <img src={item.gifUrl} alt={item.name} className="result-image" />
      <p className="result-text"><strong>Target muscle:</strong> {item.target}</p>
      <p className="result-text"><strong>Equipment:</strong> {item.equipment}</p>
    </section>
  ));

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="Search for workout..."
        className="search-input"
        onChange={handleSearch}
      />
      <div className="search-results">
        {workout}
      </div>
    </div>
  );
};

export default SearchBar;
