import React from "react";
import AnonymousEmail from "./Anonymous_Email";
import AnonymousCategory from "./Anonymous_Category";

class Anonymous_Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="col s12 m12 l12 xl12">
          <AnonymousEmail></AnonymousEmail>
        </div>

        <div className="col s12 m12 l12 xl12">
          <AnonymousCategory></AnonymousCategory>
        </div>
      </div>
    );
  }
}

export default Anonymous_Sidebar;
