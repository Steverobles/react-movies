import React from "react"
import MovieCard from "../MovieCard/MovieCard";

export default function MoviesListPage(props) {
    return (
      <div className="container">
        {
          props.movies.map(movie => {
            return <MovieCard key={movie.title} movie={movie} />
          })
        }
      </div>
    )
  }