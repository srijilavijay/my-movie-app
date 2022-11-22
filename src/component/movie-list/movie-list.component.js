import React from "react";
import "./movie-list.styles.css";

function MovielistComponent({ movie, onMovieSelect }) {
  const { Title, Poster, Type, imdbID, Year } = movie;
  return (
    <div className="movie-container" onClick={() => onMovieSelect(imdbID)}>
      <img src={Poster} className="poster" alt={Title} />
      <div className="movie-body-container">
        <span className="movie-name">
          <h5>{Title}</h5>
        </span>
        <div className="info-column">
          <span>Year: {Year}</span>
          <span>Type: {Type}</span>
        </div>
      </div>
    </div>
  );
}

export default MovielistComponent;
