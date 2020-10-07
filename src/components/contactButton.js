import React from "react";

export default function contactButton() {
  return (
    <div>
      <button
        className="button is-block is-outlined is-dark is-fullwidth is-light"
        id="contact"
        onClick={() => {
          this.setState({
            showContact: !this.state.showContact,
            showAbout: false,
            showPortfolio: false,
          });
        }}>
        {this.state.showContact ? "Contact" : "Contact"}
      </button>
    </div>
  );
}
