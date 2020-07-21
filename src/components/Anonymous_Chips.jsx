import React from "react";
import axios from "axios";
import constants from './Constants'


class Anonymous_Chips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(constants.ALL_CATEGORIES_API)
      .then((result) =>
        this.setState({
          categories: result.data.categories,
          isLoaded: true,
        })
      )
      .catch((error) =>
        this.setState({
          error,
          isLoaded: false,
        })
      );
  }

  render() {
    var { isLoaded, categories } = this.state;

    if (isLoaded) {
      return (
        <div className="row">
          {categories.map((value, index) => {
            return (
              <div className="chip blue-text waves-effect" key={index} onClick={() => this.props.onClickChipParentCallbackFunction(value)}>
                {value}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="row">
          <h5 className="center">Loading</h5>
        </div>
      );
    }
  }
}

export default Anonymous_Chips;
