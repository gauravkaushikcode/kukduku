import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { AuthContext } from "../context/auth";

import css from "../App.css";
import logo from "../images/channels4_profile.jpg";

export default function MenuBar() {
  const pathname = window.location.pathname;
  const { user, logout } = useContext(AuthContext);
  const path = pathname === "/" ? "home" : pathname.substring(1);

  const [activeItem, setItem] = useState(path);
  const handleItemClick = (e, { name }) => setItem(name);

  return (
    <div>
      {user ? (
        <Menu pointing secondary size="massive" color="teal">
          <Image floated="left" size="tiny" src={logo} as={Link} to="/" />
          <Menu.Item name={user?.username} active={true} as={Link} to="/" />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={logout}
              as={Link}
              to="/login"
            />
          </Menu.Menu>
        </Menu>
      ) : (
        <Menu pointing secondary size="massive" color="teal">
          <Image
            floated="left"
            size="tiny"
            src={logo}
            alt="Kukduku Logo"
            as={Link}
            to="/"
          />
          <Menu.Item
            name="kukduku home"
            className={css.Title}
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </Menu.Menu>
        </Menu>
      )}
    </div>
  );
}
