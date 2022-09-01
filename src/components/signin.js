import React from "react";
import "./signin.css";

function signin() {
  return (
    <>
      <div className="container">
        <div className="container-item">
          <h1>Sign In</h1>
        </div>
        <div className="container-item">
          <input className="input" type="email" />
        </div>
        <div className="container-item">
          <input type="text" className="input" />
        </div>
        <div className="container-item">
          <input type="submit" className="submit" />
        </div>
      </div>
    </>
  );
}

export default signin;
