import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border rounded shadow hover:shadow-lg">
        <img src={movie.Poster} className="h-64 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-bold">{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
