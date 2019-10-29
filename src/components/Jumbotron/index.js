import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <div className="container">
      {children}
      </div>
    </div>
  );
}

export default Jumbotron;
