import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-white.jpg";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const activeClassName = "nav__a nav__a--active";
  const inactiveClassName = "nav__a";

  return (
    <nav>
      <ul className="nav emphatic">
        <li className="nav__a">
          <Link to={`/`}>
            <img data-testid="logo-img" src={logo} className="logo" />
          </Link>
        </li>

        <li className="nav__a">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Home
          </NavLink>
        </li>

        <li className="nav__a">
          <NavLink
            to={"/movies"}
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Search
          </NavLink>
        </li>

        <li className="nav__a">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            About
          </NavLink>
        </li>

        <li className="nav__a">
          <NavLink
            to={"/health"}
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Health
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
