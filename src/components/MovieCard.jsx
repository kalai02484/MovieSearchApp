import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

    console.log(movie);
    
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="rounded-xl shadow-xl border-fuchsia-800 bg-white ">
        <img
          src={movie.Poster}
          className="rounded-t-xl justify-center h-56 grid object-cover w-full"
          alt={movie.title}
        />
        <div className="group px-5 py-2 grid z-10">
          <p
            className="text-cyan-700 font-bold md:text-2xl truncate"
          >
            {movie.Title}
          </p>
          <span className="text-slate-400 pt-2 font-semibold">
            {movie.Year}
          </span>
          <span className="text-cyan-700 py-2 text-sm">
            Type : {movie.Type}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
