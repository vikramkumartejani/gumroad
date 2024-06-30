import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header-main-container">
      <div className="header-container">
        <div className="header">
            <h3>Checkout</h3>
            <button>Continue shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
