import React from "react";
import AnonymousNavbar from "./Anonymous_Navbar";
import AnonymousHeader from "./Anonymous_Header";
import AnonymousFooter from "./Anonymous_Footer";
import AnonymousSidebar from "./Anonymous_Sidebar";
import AnonymousMainCard from "./Anonymous_Main_Card";
import axios from "axios";
import constants from "./Constants";

class Anonymous_Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      list_of_posts: {},
      isLoaded: false,
    };
  }

  onClickChipCallbackfunction = (event) => {
    this.setState(
      {
        error: null,
        list_of_posts: {},
        isLoaded: false,
      },
      () => {
        if (event !== "all") {
          this.request_posts(
            event,
            constants.ALL_POSTS_BY_CATEGORY_API + event
          );
        } else {
          this.request_posts(event, constants.ALL_POSTS_API);
        }
      }
    );
  };

  request_posts(event, api) {
    axios
      .get(api)
      .then((result) => {
        if ("error" in result.data) {
          this.setState({
            error: result.data.error,
            list_of_posts: {},
            isLoaded: false,
          });
        } else {
          this.setState({
            error: null,
            list_of_posts: result.data,
            isLoaded: true,
          });
        }
      })
      .catch((error) =>
        this.setState({
          error: error,
          list_of_posts: {},
          isLoaded: false,
        })
      );
  }

  render() {
    var { isLoaded, list_of_posts, error } = this.state;

    return (
      <div>
        <AnonymousNavbar></AnonymousNavbar>
        <AnonymousHeader
          onClickChipParentCallbackFunction={this.onClickChipCallbackfunction}
        ></AnonymousHeader>

        <div className="row">
          <div className="section col s12 m12 l8 xl9">
            {isLoaded ? (

              <div className="col s12 m6 l6 xl4">
                <AnonymousMainCard></AnonymousMainCard>
              </div>
              
            ) : (
              <div>
                <h5 className="center">Loading</h5>
              </div>
            )}
          </div>

          <div className="section col s12 m6 offset-m3 l4 xl3 mysidebar-sticky ">
            <AnonymousSidebar></AnonymousSidebar>
          </div>
        </div>

        <AnonymousFooter></AnonymousFooter>
      </div>
    );
  }
}

export default Anonymous_Home;
