import HomeBg from "./homeBg";
import HomeSearch from "./homeSearch";
import HomeTrending from "./homeTrending";

const Home: React.FC = () => {
  return (
    <div className="home">
      <HomeBg />
      <HomeSearch />
      <HomeTrending />
    </div>
  );
};

export default Home;
