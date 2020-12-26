import React from "react";
import Films from "./Films";

const T_1 = "/trending/movie/week";
const T_2 = "/movie/popular";
const T_3 = "/movie/top_rated";

const Home = ({ films, setFilmType }) => {
  return (
    <div>
      <div className="filmspage">
        <button onClick={() => setFilmType(T_1)}>Trending</button>
        <button onClick={() => setFilmType(T_2)}>Popular</button>
        <button onClick={() => setFilmType(T_3)}>Top Rated</button>
      </div>
      <Films films={films} />
    </div>
  );
};

export default Home;
