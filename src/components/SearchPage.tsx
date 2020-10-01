import React from 'react'

export default function SearchPage(props?: { data?: any }) {
    const movies = props?.data
    return (
        <div>
            This is the search page and here are the results:
            {movies.map((movie: any) => {
                console.log(movie);
                return (<div>
                    <li key={movie.id} >{movie.title}</li>
                    <li key={movie.id} >{movie.overview}</li>
                    <li key={movie.id} >{movie.release_date}</li>
                </div>)
            })}
        </div>
    )
}
