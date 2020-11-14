import React from "react";
import "../../index.css";

function Header() {
  return (
    <div>
      <header>
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Employee Directory</h1>
              <p className="lead mb-0">Search For An Employee</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
