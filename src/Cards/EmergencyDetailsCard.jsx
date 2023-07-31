import React from "react";

const EmergencyDetailsCard = (props) => {
  return (
    <div>
      {props.data.map((data) => {
        return (
          <div>
            <div> {data.name}</div>
            <div> {data.email}</div>
            <div> {data.contact}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EmergencyDetailsCard;
