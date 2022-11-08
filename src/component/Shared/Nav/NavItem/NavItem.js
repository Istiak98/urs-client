import React from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import shallow from "zustand/shallow";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useLogout } from "../../../../hooks/useLogout.jsx";
import useProfileStore from "../../../../store/useProfileStore";
import Button from "../../../Button";

const NavItem = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [userProfile] = useProfileStore(
    (state) => [state.userProfile],
    shallow
  );

  const activeStyle = "activeStyle";
  const navLinkClass = `nav-link navItemTitle`;
  const getNavLinkActiveClass = ({ isActive }) =>
    [navLinkClass, isActive && activeStyle].filter(Boolean).join(" ");
  return (
    <Nav className="navItem ms-auto my-2 my-lg-0">
      <NavLink to="/" className={getNavLinkActiveClass}>
        Home
      </NavLink>
     

      <NavLink to="/urs" className={getNavLinkActiveClass}>
        Recommend
      </NavLink>

      
      {user  && (
        <Button className="btn btn-default text-primary ps-3 fw-bolder h2">
          Hi, {user.name}
        </Button>
      )}
      {user ? (
        <Link to="/" className={getNavLinkActiveClass}>
          <Button  onClick={() => logout()} btnClass="btn-danger">
            Logout
          </Button>
        </Link>
      ) : (
        <NavLink to="/login" className={getNavLinkActiveClass}>
          Login
        </NavLink>
      )}
    </Nav>
  );
};

export default NavItem;
