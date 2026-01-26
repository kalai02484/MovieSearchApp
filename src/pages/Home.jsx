import React, { useEffect, useState } from "react";
import { searchMovies } from "../api/omdb";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown.jsx";

const Home = () => {
  // State variables
  const [query, setQuery] = useState("Avengers"); 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch movies from OMDB API
  const fetchMovies = async () => {
    if (!query.trim()) {
      setError("Please enter a movie name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await searchMovies(query, page, type);

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
        setTotalResults(0);
      } else {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
      }
    } catch (err) {
      setError("Something went wrong while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  
  // Re-fetch when page or filter changes
  useEffect(() => {
    if (query) {
      fetchMovies();
    }
  }, [page, type]);

  return (
    <div className="p-6 mx-auto">
      {/* Search bar */}
      <SearchBar
        value={query}
        onChange={(value) => {
          setQuery(value);
          setPage(1);
        }}
        onSearch={fetchMovies}
      />

      {/* Filter dropdown */}
      <FilterDropdown
        value={type}
        onChange={(value) => {
          setType(value);
          setPage(1);
        }}
      />

      {/* Error message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Loading state */}
      {loading && (
        <p className="text-center text-gray-500 text-5xl my-5 mb-10">Loading movies...</p>
      )}

      {/* Movies grid */}
      {!loading && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {/* No results */}
      {!loading && !error && movies.length === 0 && query && (
        <p className="text-center text-gray-500 mt-6">No movies found.</p>
      )}

      {/* Pagination */}
      <Pagination
        page={page}
        totalResults={totalResults}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Home;
