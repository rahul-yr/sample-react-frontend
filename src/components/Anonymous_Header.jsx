import React from "react";
import AnonymousChips from './Anonymous_Chips'

class Anonymous_Header extends React.Component {
  render() {
    return (
      <div className="section col s12 center-align flow-text">
        <div className="container">
          <AnonymousMainTitle></AnonymousMainTitle>
          <AnonymousChips onClickChipParentCallbackFunction={this.props.onClickChipParentCallbackFunction}></AnonymousChips>
      
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}

class AnonymousMainTitle extends React.Component{
  render(){
    return(
      <div>
          <h1 className="header black-text">It's time to live smart.</h1>
          <div className="row">
            <h5 className="header dark">
              Select what you're into. We'll help you find great things.
            </h5>
          </div>
      </div>
    )
  }
}


export default Anonymous_Header;
