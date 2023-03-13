import Logo from "./logo";
import Nav from "./nav";

const Header: React.FC = () => {
  return (
    <header>
      <Nav />
      <Logo />
    </header>
  );
};

export default Header;
