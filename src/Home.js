import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Home.css";

const Home = () => {
  const [ moviedata, setMoviedata ] = useState({});
  const [ display, setDisplay ] = useState({display:"none"})
  const handleClick = () =>{
    fetch("https://api.themoviedb.org/3/movie/"+ Math.floor(Math.random()*100000).toString() + `?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
      if(data.success === false || data.poster_path === null || data.adult ===true){
        handleClick()
      } else {
        setMoviedata(data)
        setDisplay({display:"block"})
      }
    }
    )
  }

  return (
    <>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.1}}>
      <div className='homepageContainer'>
          <div className='generateButtonContainer'>
            <button onClick={handleClick}>Generate Random Movie</button>
          </div>
          <div className='homepageDisplayContainer' >
              <div className='homepageCardContainer' style={display}>
                <img src={"https://image.tmdb.org/t/p/w200"+moviedata.poster_path} alt={moviedata.title} />
              <div className='homepageTextContainer'>
                  <p>{moviedata.title}</p>
                  <p>Rating: {moviedata.vote_average}</p>
            </div>
              </div>
          </div>
      </div>
    </motion.div>
    </>
  )
}

export default Home