import SearchMovies from "../../search/searchMovies";
import MovieList from "../../search/movieList";

const Home: React.FC = () => {
  return (
    <div data-testid="home" className="home background-gradient">
      <HomeSearch />
      <HomeTrending />
    </div>
  );
};

export default Home;
