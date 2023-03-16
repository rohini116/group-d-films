import { useEffect, useState } from "react";
import { Movie } from "../../type/movie.types";
import MovieCard from "./movieCard";
import { fetchMovies } from "./fetchMovies";
import Loading from "./loading";

const HomeTrending: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    try {
      const movies = await fetchMovies(
        "http://localhost:5000/film/trending/day",
        10
      );
      if (movies.length !== 0) {
        setTrendingMovies(movies);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="homeTrending">
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <h2 className="homeTrending__h2">Now Trending</h2>

          <div className="trendingContainer">
            {trendingMovies.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeTrending;
