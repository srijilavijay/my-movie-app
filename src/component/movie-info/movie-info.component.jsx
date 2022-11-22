import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../App"
import './movie-info.styles.css'

function MovieInfo({ selectedMovie, onMovieSelect }) {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => {
        setMovieDetails(response.data);      
      }
      );
      
  }, [selectedMovie]);

  const {Title, Type, Poster, imdbRating, Language, Released, Genre, Director, Writer, Actors, Plot} = movieDetails;
  return (
  <div className="info-card-container">
  <div className="card-container">
    <div className="image-container">
      <img src={Poster} className="poster" alt={Title}/>
    </div>        
      <div className="card-body-container">
        <h5 className="card-title"><b>Movie:</b> {Title}</h5>
        <p className="card-text" ><b>IMDB Rating:</b> <span>{imdbRating}</span></p>
        <p className="card-text"><b>Language:</b> <span>{Language}</span></p>
        <p className="card-text"><b>Released:</b> <span>{Released}</span></p>
        <p className="card-text"><b>Genre:</b> <span>{Genre}</span></p>
        <p className="card-text"><b>Director:</b> <span>{Director}</span></p>
        <p className="card-text"><b>Writer:</b> <span>{Writer}</span></p>
        <p className="card-text"><b>Actors:</b> <span>{Actors}</span></p>
        <p className="card-text"><b>Type:</b> <span>{Type}</span></p>
        <p className="card-text"><b>Plot:</b> <span>{Plot}</span></p>
      </div>   
   
    <div className="button-container">
    <button type="button" className="btn-close" onClick={() => {onMovieSelect()}}/>
    </div>
  </div>
</div>
  )
}

export default MovieInfo;
