import React from "react";

class Anonymous_Navbar extends React.Component {
  render() {
    return (
      <nav className="black z-depth-0" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container " href="#!" className="brand-logo">
            Logo
          </a>

          <ul id="slide-out" className="sidenav">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">All Posts</a>
            </li>
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <li>
                  <a href='#!' className="collapsible-header">
                    Category<i className="material-icons">arrow_drop_down</i>
                  </a>
                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <a href="#!">First</a>
                      </li>
                      <li>
                        <a href="#!">Second</a>
                      </li>
                      <li>
                        <a href="#!">Third</a>
                      </li>
                      <li>
                        <a href="#!">Fourth</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">All Posts</a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Category
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <ul id="dropdown1" className="dropdown-content">
              <li>
                <a href="#!">First</a>
              </li>
              <li>
                <a href="#!">Second</a>
              </li>
              <li>
                <a href="#!">Third</a>
              </li>
              <li>
                <a href="#!">Fourth</a>
              </li>
            </ul>
          </ul>
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Anonymous_Navbar;
