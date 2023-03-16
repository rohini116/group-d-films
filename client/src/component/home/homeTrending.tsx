import { useEffect, useState } from "react";
import { Movie } from "../../type/movie.types";
import MovieCard from "./movieCard";
import { fetchMovies } from "./fetchMovies";

const HomeTrending: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const movies = await fetchMovies(
        "http://localhost:5000/film/trending/day",
        5
      );
      setTrendingMovies(movies);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="homeTrending">
      <h2>Now Trending</h2>

      {trendingMovies.map((movie, key) => (
        <MovieCard key={key} movie={movie} />
      ))}
    </div>
  );
};

export default HomeTrending;
