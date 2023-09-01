import { useParams } from "react-router-dom"

export default function MovieDetailPage({movies}) {

  let { movieName } = useParams();
  console.log('Movie Name:', movieName)

  let movie = movies.find(mov => mov.title === movieName)

  return (
    <div className="flex">
      <div>
        <h1>{movie.title}</h1>
        <h4>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
        <h3>Cast Members:</h3>
        <ul>
          {movie.cast.map(actor => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </div>
      <img src={`${movie.posterPath}`} alt="" />
    </div>
  );
}