import { useEffect, useState } from "react";
import { Genre } from "../type/movie.types";

export interface GenreSelectProps {
  setGenre: (genre: Genre) => void;
}

const GenreSelect: React.FC<GenreSelectProps> = ({ setGenre }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const getGenres = async () => {
    const response = await fetch("http://localhost:5000/genre");
    const json = await response.json();
    setGenres(json.genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <select
      className="genreSelect"
      name="genreSelect"
      onChange={(e) => {
        setGenre({
          id: +e.target.value,
          name: e.target.selectedOptions[0].text,
        } as Genre);
      }}
    >
      <option value="0">- Select a genre -</option>

      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreSelect;
