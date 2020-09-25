import React from "react";

import "./Header.scss";
import logo from "../../src/logo.jpg";
import "./_nulled.scss";

import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__row">
          <div className="header__col">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="header__col">
            <nav className="header__menu">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
