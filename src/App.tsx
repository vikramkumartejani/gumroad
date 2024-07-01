import React from "react";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  );
};

export default App;
