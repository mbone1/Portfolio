import React from "react";

export default function LinkedInButton() {
  return (
    <div>
      <button
        className="button is-block is-outlined is-dark is-fullwidth is-light fab fa-linkedin-in"
        id="linkedin"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/matthew-bonneville-944a431a9/"
          )
        }></button>
    </div>
  );
}
