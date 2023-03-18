import { useState } from "react";
import GenreSelect from "./genreSelect";
import { useNavigate } from "react-router-dom";
import { Genre } from "../../type/movie.types";

const SearchMovies: React.FC = () => {
  const [genre, setGenre] = useState<Genre>({ id: 0, name: "" });
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/movies/${genre.id}/${genre.name}`);
  };

  return (
    <div className=''>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className='search-container'>
          <GenreSelect setGenre={setGenre} />
          <button 
            className='container__button button--active'
            type="submit">
            Search
          </button>   
        </div>
      

      </form>
    </div>
  );
};

//A form className : className="searchMovies__Form"
//The whole section: className="searchMovies"

export default SearchMovies;
