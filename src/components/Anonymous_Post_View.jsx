import React from "react";
import AnonymousNavbar from "./Anonymous_Navbar";
import AnonymousHeader from "./Anonymous_Header";
import AnonymousFooter from "./Anonymous_Footer";
import AnonymousSidebar from "./Anonymous_Sidebar";
import AnonymousDetailPost from "./Anonymous_Detail_Post";


class Anonymous_Post_View extends React.Component {
    render(){
        return(
            <div>
        <AnonymousNavbar></AnonymousNavbar>
        <AnonymousHeader></AnonymousHeader>

        <div className="row">
          <div className="section col s12 m12 l8 xl9">

            <AnonymousDetailPost></AnonymousDetailPost>

          </div>

          <div className="section col s12 m6 offset-m3 l4 xl3 mysidebar-sticky ">
            <AnonymousSidebar></AnonymousSidebar>
          </div>
        </div>

        <AnonymousFooter></AnonymousFooter>
            </div>
        )
    }
}

export default Anonymous_Post_View;