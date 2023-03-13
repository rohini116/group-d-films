import bgImage from "../../assets/bg.jpg";

const HomeBg: React.FC = () => {
  return (
    <>
      <img data-testid="home-bg" className="home__bg" src={bgImage} />
    </>
  );
};

export default HomeBg;
