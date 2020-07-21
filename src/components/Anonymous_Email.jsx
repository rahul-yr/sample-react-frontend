import React from "react";

class Anonymous_Email extends React.Component {

  handleEmailSubmit = (event) =>{
    event.preventDefault()
    console.log('Event Submitted')
  }


  render() {
    return (
      <div className="card-panel email-border z-depth-0">
        <span className="black-text">Subscribe for more</span>
        <br />
        <br />
        <form onSubmit={this.handleEmailSubmit}>
          <div className="row">
            <div className="input-field">
              <select multiple>
                <option value="" disabled>
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Interests</label>
            </div>
            <div className="input-field ">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Helper text
              </span>
            </div>
            <div className="input-field">
              <input
                type="submit"
                value="Submit"
                className="btn-flat black white-text z-depth-0"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Anonymous_Email;
