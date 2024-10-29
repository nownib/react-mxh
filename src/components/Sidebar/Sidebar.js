import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import iconGrid from "../../assets/icons/apps.svg";

import Logo from "../../assets/images/logoUIT.png";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <div className="logo">
        <Link to="/admin">
          <img src={Logo} alt="logo" width="190" height="150" />
        </Link>
      </div>
      <div className="link-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src={iconGrid} alt="" />
          <span>Chọn File Excel</span>
        </NavLink>
        <NavLink
          to="/xep-lop"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src={iconGrid} alt="" />
          <span>Xếp Lớp</span>
        </NavLink>
        <NavLink
          to="/tkb"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <img src={iconGrid} alt="" />
          <span>TKB và script</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
