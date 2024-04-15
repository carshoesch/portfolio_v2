import React from "react";
import "./styles.scss";

const Chip = ({ labelList }) => {
    return (
        <div className="items">
            {labelList.map((label, index) => (
                <div className="item" key={index}>
                    {label.label}
                </div>
            ))}
        </div>
    );
};

export default Chip;
