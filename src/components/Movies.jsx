import React from 'react'
import '../App.css'
import { useEffect, useState } from 'react'

function Movies ({searchTitle}) {
    console.log("searchTitle",searchTitle)
    const [data, setData] = useState([]);
    if(searchTitle === ''){
        searchTitle = 'spongebob';
    }
    const fetchString = 'https://www.omdbapi.com/?apikey=2e1e970c&s='+searchTitle;
    console.log("fetchString",fetchString)
    useEffect(()=>{
        fetch(fetchString).then(res => res.json())
        .then(data => setData(data.Search))
    }, [fetchString])

  return (
    <div className='flex-container'>
        {
            data === undefined ? <h1><font color="white">Movie title not found</font></h1>
            : (data.map((datamovie, index)=>{
                return(
                    <div className='img-container'>
                        <img src={datamovie.Poster} alt={datamovie.Title}></img>
                        <div className='text-block'>
                            <span><b>{datamovie.Title.substring(0,40)}</b></span>
                        </div>
                    </div>
                )
            }))
        }
    </div>
  );
}

export default Movies