import { Movie } from "../../type/movie.types";

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, date, imgUrl } = movie;

  return (
    <div className="movieCard">
      <h3>Title: {title}</h3>
      <p>Release date: {date}</p>
      <img title={title} src={imgUrl} width="200" height="200" />
    </div>
  );
};

export default MovieCard;
