import React, { useEffect } from "react";
import "./category-sort.styles.css";


function CategorySort({activeCategory, setActiveCategory, movieList, setFilteredList}) {
  useEffect(() =>{
      if(activeCategory === "all") {
        setFilteredList(movieList);
        return;
      }
      else if(activeCategory === "movie" ) {
        const fil = movieList.filter((movie) =>
         movie.Type.includes(activeCategory));
        setFilteredList(fil);
        
      }
      else if(activeCategory === "series" ) {
        const fil = movieList.filter((movie) =>
         movie.Type.includes(activeCategory));
        setFilteredList(fil);
        
      }
      else if(activeCategory === "game" ) {
        const fil = movieList.filter((movie) =>
         movie.Type.includes(activeCategory));
        setFilteredList(fil);
        
      }
  },[activeCategory]);
  
  return (
    <div className="sort-container">
        <button type="button" onClick={() => setActiveCategory("all")}>All</button>
        <button onClick={() => setActiveCategory("movie")}>Movies</button>
        <button onClick={() => setActiveCategory("series")}>Series</button>
        <button onClick={() => setActiveCategory("game")}>Games</button>
        </div>
  );
}

export default CategorySort;
