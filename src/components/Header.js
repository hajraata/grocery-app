import React from "react";
import "../styles/Header.css";

function Header({ heading }) {
  return (
    <div className="header">
      <h1>{heading}</h1>
    </div>
  );
}

export default Header;
