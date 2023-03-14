import { Movie } from "../../type/movie.types";
import MovieCard from "./movieCard";

const trendingData: Movie[] = [
  {
    title: "Luther: The Fallen Sun",
    date: "2023-02-24",
    imgUrl: "/src/assets/logo.jpg",
  },
  {
    title: "Everything Everywhere All at Once",
    date: "2022-03-24",
    imgUrl: "/src/assets/logo.jpg",
  },
  {
    title: "Scream VI",
    date: "2023-03-08",
    imgUrl: "/src/assets/logo.jpg",
  },
];

const HomeTrending: React.FC = () => {
  return (
    <div className="homeTrending">
      <h2>Now Trending</h2>

      {trendingData.map((movie, key) => (
        <MovieCard key={key} movie={movie} />
      ))}
    </div>
  );
};

export default HomeTrending;
