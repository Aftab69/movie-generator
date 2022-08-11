import React from 'react';
import "./Card.css";

const Card = (props) => {
  return (
    <>
        <div className='cardContainer'>
            <img src={"https://image.tmdb.org/t/p/w500"+props.data.poster_path} alt={props.data.title} />
            <div className='textContainer'>
                <p>{props.data.title}</p>
                <p>{props.data.vote_average}</p>
            </div>
        </div>
    </>
  )
}

export default Card