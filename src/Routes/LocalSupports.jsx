import React from "react";
import Cardsdata from "../Data/LocalSupportsData";
import Card from "../Cards/LocalCard";

const LocalSupports = () => {
  return (
    <div
      className="cardContainer"
      style={{
        backgroundColor: "#ffb8b1",
        marginTop: "5px",
        borderRadius: "10px",
        boxShadow: "0 0 2px 0 red"
      }}
    >
      <Card data={Cardsdata} />
    </div>
  );
};

export default LocalSupports;
