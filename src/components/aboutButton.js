import React, { Component } from "react";

class aboutButton extends Component {
  constructor() {
    super();
    this.state = {
      showAbout: false,
      showContact: false,
      showPortfolio: false,
    };
  }
  render() {
    return (
      <div>
        <button
          className="button is-block is-outlined is-dark is-fullwidth is-light"
          id="about"
          onClick={() => {
            this.setState({
              showAbout: !this.state.showAbout,
              showContact: false,
              showPortfolio: false,
            });
          }}>
          {this.state.show ? "About" : "About"}
        </button>
      </div>
    );
  }
}
export default aboutButton;
