import React from "react";
import Cardsdata from "../Data/LocalSupportsData";
import Card from "../Cards/LocalCard";

const LocalSupports = () => {
  return (
    <div
      className="cardContainer"
      style={{
        backgroundColor: "rgb(216, 233, 248)",
        marginTop: "5px",
        borderRadius: "10px",
      }}
    >
      <Card data={Cardsdata} />
    </div>
  );
};

export default LocalSupports;
