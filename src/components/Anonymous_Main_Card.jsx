import React from "react";
import {
  Link,
} from "react-router-dom";


class Anonymous_Main_Card extends React.Component {

  render() {
    return (
      <div className="card hoverable ">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="https://materializecss.com/images/office.jpg"
            alt="sample_pic"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Card Title<i className="material-icons right">more_vert</i>
          </span>
          <p>
            {/* <a href="#!/">more</a> */}
            <Link to ='/post'>Click here</Link>
            
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Card Title<i className="material-icons right">close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>
    );
  }
}

export default Anonymous_Main_Card;
