import { Movie } from "../../type/movie.types";
import { BASE_URL, POSTER_SIZE } from "../../configs/moviesImg";

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, release_date, poster_path } = movie;
  const imgUrl = BASE_URL + POSTER_SIZE + poster_path;

  return (
    <div className="movieCard card__skin">
      <div className="movieCard__title subtitle-style" title={title}>
        {title}
      </div>
      <p className="movieCard__date field-style">{release_date}</p>
      <img className="movieCard__img" title={title} src={imgUrl} />
    </div>
  );      
};

export default MovieCard;
