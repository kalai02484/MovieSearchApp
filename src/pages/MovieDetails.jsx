import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../api/omdb";

const MovieDetails = () => {
  // -----------------------------
  // Get movie ID from URL
  // -----------------------------
  const { id } = useParams();

  // -----------------------------
  // State variables
  // -----------------------------
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // -----------------------------
  // Fetch movie details from OMDB
  // -----------------------------
  const fetchMovieDetails = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getMovieDetails(id);

      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Failed to load movie details.");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Fetch data on component mount
  // -----------------------------
  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  // -----------------------------
  // Loading state
  // -----------------------------
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading movie details...
      </div>
    );
  }

  // -----------------------------
  // Error state
  // -----------------------------
  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Link to="/" className="text-blue-600 underline">
          Go back to search
        </Link>
      </div>
    );
  }

  // -----------------------------
  // Safety check
  // -----------------------------
  if (!movie) return null;

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Search
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-64 rounded shadow"
        />

        {/* Movie Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {movie.Title} ({movie.Year})
          </h1>

          <p className="mb-1">
            <strong>Genre:</strong> {movie.Genre}
          </p>

          <p className="mb-1">
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p className="mb-1">
            <strong>Director:</strong> {movie.Director}
          </p>

          <p className="mb-1">
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p className="mb-1">
            <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}
          </p>

          <p className="mt-4 text-gray-700">
            {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
