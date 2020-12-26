import React from "react";

const SearchPanel = () => {
  return (
    <div className="search">
      <form>
        <input placeholder="Search a movie title ..." type="text" />
        <button type="button">SEARCH</button>
      </form>
    </div>
  );
};

export default SearchPanel;
