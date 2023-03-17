import { useEffect, useState } from "react";
import { Movie } from "../type/movie.types";
import MovieCard from "./movieCard";
import { fetchMovies } from "./fetchMovies";
import Loading from "../component/home/loading";

export interface MovieListProps {
  listTitle: string;
  url: string;
  number?: number;
}

const MovieList: React.FC<MovieListProps> = ({ listTitle, url, number }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {
    try {
      const returnMovies = await fetchMovies(url, number);
      if (returnMovies.length !== 0) {
        setMovies(returnMovies);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, [url]);

  return (
    <div data-testid="movieList" className="movieList">
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <h2 className="title-style">{listTitle}</h2>

          <div className="movieList__container">
            {movies.map((movie, key) => (
              <MovieCard key={key} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;
