import React, { useState } from 'react';
import "./Search.css";
import Card from "./Card";

const Search = () => {
  const [title, setTitle] = useState("");
  const [movie,setMovie] = useState([]);
  const handleChange = (e) =>{
     setTitle(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
    .then((res)=>res.json()).then((data)=>{
      const newData = data.results.filter(eachMovie =>
        eachMovie.poster_path !== null);
      setMovie(newData);
    })
  }
  return (
    <>
      <div className='searchpageContainer'>
        <form onSubmit={handleSubmit} className='searchitemsContainer'>
            <input type="text" value={title} onChange={handleChange} className='searchElements'/>
            <button type='submit' className='searchElements'>Search</button>
        </form>
        <div className='resultsContainer'>
      {movie.map((individualMovieData)=>(
            <Card data={individualMovieData} key={individualMovieData.id} />  
      ))}
    </div>
      </div>
    </>
  )
}

export default Search