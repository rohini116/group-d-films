import { useParams } from "react-router-dom";
import SearchMovies from "../../search/searchMovies";
import MovieList from "../../search/movieList";

const Movies: React.FC = () => {
  let { genreId, genreName = "All" } = useParams();

  const fetchUrl = `http://localhost:5000/film/by_genre?genre_ids=${genreId}`;
  const listTitleText = `${genreName} films`;

  return (
    <div data-testid="movies" className="movies">
      <SearchMovies />
      <MovieList listTitle={listTitleText} url={fetchUrl} />
    </div>
  );
};

export default Movies;
