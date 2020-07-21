import React from "react";

class Anonymous_Category extends React.Component {
  render() {
    return (
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>
            Second
            <span className="new badge blue">1</span>
          </div>
          <div className="collapsible-body">
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="https://www.google.com">Click here</a>
          </div>
        </li>
      </ul>
    );
  }
}

export default Anonymous_Category;
