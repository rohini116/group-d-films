import HomeBg from "./homeBg";
import HomeSearch from "./homeSearch";
import HomeTrending from "./homeTrending";

const Home: React.FC = () => {
  return (
    <div data-testid="home" className="home">
      <HomeBg />
      <HomeSearch />
      <HomeTrending />
    </div>
  );
};

export default Home;
