import React from "react";

export default function portfolioButton() {
  return (
    <div>
      <button
        className="button is-block is-outlined is-dark is-fullwidth is-light"
        id="portfolio"
        onClick={() => {
          this.setState({
            showPortfolio: !this.state.showPortfolio,
            showContact: false,
            showAbout: false,
          });
        }}>
        {this.state.show ? "Portfolio" : "Portfolio"}
      </button>
    </div>
  );
}
