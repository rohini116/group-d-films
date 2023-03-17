import { useState } from "react";
import GenreSelect from "./genreSelect";
import { useNavigate } from "react-router-dom";
import { Genre } from "../type/movie.types";

const SearchMovies: React.FC = () => {
  const [genre, setGenre] = useState<Genre>({ id: 0, name: "" });
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/movies/${genre.id}/${genre.name}`);
  };

  return (
    <div className="searchMovies">
      <form
        className="searchMovies__Form"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <GenreSelect setGenre={setGenre} />
        <button
          className="searchMovies__btn"
          type="submit"
          disabled={genre.id === 0}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
