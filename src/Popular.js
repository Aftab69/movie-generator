import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Popular.css";
import Card from './Card';

const Popular = () => {
  const [ movieData, setMovieData ] = useState([]);
  const [ page, setPage ] = useState(1);
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res)=>res.json()).then((data)=>
      setMovieData(data.results)
      )},[page])
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
      <div className='popularpageContainer'>
        {movieData.map((individualData)=>(
            <Card data={individualData} key={individualData.id} />
        ))}
      </div>
      <div className='popularpagebuttonsContainer'>
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

export default Popular