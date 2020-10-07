import React from "react";

export default function GithubButton() {
  return (
    <div>
      <button
        className="button is-block is-outlined is-dark is-fullwidth is-light fab fa-github"
        id="github"
        onClick={() => window.open("https://github.com/mbone1")}></button>
    </div>
  );
}
