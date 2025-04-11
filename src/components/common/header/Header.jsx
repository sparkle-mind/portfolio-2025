import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-row flex align-center justify-between">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="nav-right flex align-center">
              <nav className="nav">
                <ul className="flex align-center ">
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">product</a>
                  </li>
                  <li>
                    <a href="#">home</a>
                  </li>
                </ul>
              </nav>
              <a href="#" className="btn-primary">
                click me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
