import React from "react";
import "../assets/styles/Life.scss";

const Life = (props) => {
  const { life } = props;
  
  return (
    <div className="life">
      <div>
        <p>{life}</p>
      </div>
    </div>
  );
};

export default Life;
