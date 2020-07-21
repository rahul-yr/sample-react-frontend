import React, { Component } from "react";
import AnonymousNavbar from "./Anonymous_Navbar";
import AnonymousHeader from "./Anonymous_Header";
import AnonymousFooter from "./Anonymous_Footer";

class Page_Not_Found extends Component {
  render() {
    return (
      <div>
        <AnonymousNavbar></AnonymousNavbar>
        <AnonymousHeader></AnonymousHeader>
        <h1 className='center'>oops! page not found</h1>
        <br/><br/>
        <AnonymousFooter></AnonymousFooter>
      </div>
    );
  }
}

export default Page_Not_Found;
