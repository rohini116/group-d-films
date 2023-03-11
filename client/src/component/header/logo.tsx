import logo from "../../assets/bg.jpg";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to={`/`} className="logo">
      <img src={logo} width="60" height="45" />
    </Link>
  );
};

export default Logo;
