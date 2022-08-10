import React from 'react';
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className='searchpageContainer'>
        <div className='searchitemsContainer'>
            <input className='searchElements'/>
            <button className='searchElements'>Search</button>
        </div>
      </div>
    </>
  )
}

export default Search