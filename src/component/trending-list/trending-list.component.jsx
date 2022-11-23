import axios from "axios";
import React, { useEffect, useState } from "react";
import './trending-list.styles.css';

function TrendingList() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetchD();
  }, []);

  const fetchD = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=Batman&apikey=1d16990e`
    );

    setTrending(response.data.Search);
    console.log(response.data.Search);
  };
  return (
    <div className="trending-list-container">
      
      {trending.map((movie) => (
        <div className="trending-container">
         <img className="trending-image" src={movie.Poster} alt={movie.Title}/>
         
         </div>
        
      ))}
    </div>
  );
}

export default TrendingList;
