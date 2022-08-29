import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import Movies from './Movies';

function Search () {
    const inputSearch = useRef(null);
    const [keyword, setKeyword] = useState('');

    function handleClick(){
        setKeyword(inputSearch.current.value)
    }

  return (
    <div className='search'>
        <input ref={inputSearch} type="text" placeholder='movie title...'></input>
        <button onClick={()=> handleClick()}>Search</button>
        <br></br>
        <br></br>
        <Movies searchTitle={keyword}></Movies>
    </div>
  )
}

export default Search