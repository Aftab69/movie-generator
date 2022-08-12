import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Search.css";
import Card from "./Card";

const Search = () => {
  const [title, setTitle] = useState("");
  const [movie,setMovie] = useState([]);
  const [ page, setPage ] = useState(1);
  const handleChange = (e) =>{
     setTitle(e.target.value);
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=${page}&include_adult=false`)
    .then((res)=>res.json()).then((data)=>{
      const newData = data.results.filter(eachMovie =>
        eachMovie.poster_path !== null);
      setMovie(newData);
    })
  },[page,title])
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=${page}&include_adult=false`)
    .then((res)=>res.json()).then((data)=>{
      const newData = data.results.filter(eachMovie =>
        eachMovie.poster_path !== null);
      setMovie(newData);
    })
  }

  const handleClick = (e) =>{
    e.preventDefault();
    setPage(e.target.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleNext = (e) =>{
    e.preventDefault();
    if(page<500){
      setPage(parseInt(page)+1);
    } else {
      setPage(parseInt(page));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handlePrevious = (e) =>{
    e.preventDefault();
    if(page>1){
      setPage(parseInt(page)-1);
    } else {
      setPage(parseInt(page));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleLast = (e) =>{
    e.preventDefault();
    setPage(500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
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
      <div className='searchpagebuttonsContainer'>
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleClick} value="4">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
          <button onClick={handleLast}>Last</button>
      </div>
      </motion.div>
    </>
  )
}

export default Search