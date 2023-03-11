import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to={`/`} className="logo">
      <img src={logo} width="60" height="51" />
    </Link>
  );
};

export default Logo;
