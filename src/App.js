import MovielistComponent from "./component/movie-list/movie-list.component";
import { useState } from "react";
import MovieInfo from "./component/movie-info/movie-info.component";
import TrendingList from "./component/trending-list/trending-list.component";
import CategorySort from "./component/category-sort/category-sort.component";

import axios from "axios";
import "./App.css";

const icon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeaTWNDuBu6TqVIyAwKe8-4AOzo1G-I6sbw&usqp=CAU";

const searchIcon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2UC2UVedIJdvrg8kDupwvPFW7VdMi2GP3g&usqp=CAU";

export const API_KEY = "1d16990e";

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [filteredList, setFilteredList] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");


  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    
    updateMovieList(response.data.Search);
    setFilteredList(response.data.Search);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <div className="container">
      <div className="header">
        <div className="app-name">
          <img
            className="movie-image"
            src={icon}
            alt="movie icon"
            onClick={() => {
              updateMovieList();
              onMovieSelect();
            }}
          />
          <div className="name">Movie App</div>
          
        </div>
        <div className="search-box">
          <img className="search-icon" src={searchIcon} alt="search icon" />
          <input
            className="search-input"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      <TrendingList />
      <CategorySort movieList= {movieList} setFilteredList={setFilteredList} activeCategory={activeCategory} setActiveCategory={setActiveCategory}  />
      
      <div className="info-container">
        {selectedMovie && (
          <MovieInfo
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        )}
      </div>
      <div className="movie-list-container">
        {filteredList?.length
          ? filteredList.map((movie, index) => (
              <MovielistComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          : (
          <div><img src={icon} alt="No Movies" /><h4>Search for Movies</h4></div>) }
      </div>
    </div>
  );
}

export default App;
