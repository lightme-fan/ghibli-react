import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Movies() {
    const [movies, setMovies] = useState([])
    async function fetchMovies() {
        const response = await axios('https://ghibliapi.herokuapp.com/films')
        setMovies(response.data)
    }

    useEffect (() => {
        fetchMovies()
    }, [])

    return (
        <div>
            {movies
                .sort((a, b) => b.rt_score - a.rt_score)
                .map(movie =>                    
                    <article key={movie.id}>
                        <h3>{movie.title} <small>{movie.release_date}</small></h3>
                        <p className='rt_score'><b>Rt-score</b>: {movie.rt_score}</p>
                        <p>{movie.description}</p>
                        <p>{movie.director}</p>
                        <p>{movie.producer}</p>
                    </article>
            )}            
        </div>
    )
}

export default Movies