import React from "react";
import { Link } from "react-router-dom";

const Films = ({ films }) => {
  return (
    <div className="films-select">
      <div className="films-group">
        {films !== [] ? (
          films.map((film) => (
            <div className="films" key={film.id}>
              <img
                className="film-img"
                src={`https://image.tmdb.org/t/p/w185/${film.poster_path}
            `}
                alt="jpg"
              />
              <Link to={`/movie/${film.id}`}>
                <h6>{film.title}</h6>
              </Link>

              <h6>{film.release_date}</h6>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Films;
