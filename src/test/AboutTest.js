import React from "react";

export default function AboutTest({ match }) {
  const name = match.params.name;

  return name === "1" ? <div>About 1</div> : <div>About {name}</div>;
}
