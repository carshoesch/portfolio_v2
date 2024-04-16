import React, { useEffect } from "react";
import "./styles.scss";

const Chip = ({ labelList }) => {
  return (
    <div className="items">
      {labelList?.map((label, index) => (
        <div className="item" key={index}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default Chip;
