import React from "react";

const PapularFilms = ({ papularFilms }) => {
  return (
    <div className="films-select">
      <div className="films-group">
        {papularFilms &&
          papularFilms.map((film) => (
            <div className="films" key={film.id}>
              <img
                className="film-img"
                src={`https://image.tmdb.org/t/p/w185/${film.poster_path}
            `}
                alt="jpg"
              />
              <h6>{film.title}</h6>
              <h6>{film.release_date}</h6>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PapularFilms;
