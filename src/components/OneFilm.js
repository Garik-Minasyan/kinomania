import React from "react";
import { Link } from "react-router-dom";

const OneFilm = ({ films }) => {
  console.log(films);
  return (
    <div>
      <Link to="/">
        <button className="btn-back"> Back to Search</button>
      </Link>

      <div className="film-info">
        <img
          // src={`https://image.tmdb.org/t/p/w185/${film.poster_path}
          // `}
          alt="jpg"
        />
        <div className="info">
          <h4>{films.title}</h4>
          {/* <p>{tagline}</p> */}
          {/* <p>Release Date: {release_date}</p> */}
          {/* <p>{overview}</p> */}
          {/* <p>Rate: {vote_average}/10</p> */}
          <p>Genres: </p>
        </div>
      </div>
    </div>
  );
};

export default OneFilm;

// { title,  poster_path, vote_average, release_date, overview, genres = [], tagline,
