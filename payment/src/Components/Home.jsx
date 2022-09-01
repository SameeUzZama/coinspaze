import React from "react";
import Payment from "./Payment";
import "./Style/Home.css";

export const Home = () => {
  return (
    <div className="main_container">
      <div className="container1">
        <h1>CoinSpaze</h1>
        <Payment />
      </div>
    </div>
  );
};

export default Home;
