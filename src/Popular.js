import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Popular.css";
import Card from './Card';

const Popular = () => {
  const [ movieData, setMovieData ] = useState([]);
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res)=>res.json()).then((data)=>
      setMovieData(data.results));
  },[])
  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
      <div className='popularpageContainer'>
        {movieData.map((individualData)=>(
            <Card data={individualData} key={individualData.id} />
        ))}
      </div>
    </motion.div>
    </>
  )
}

export default Popular