import React from "react";
import "./samp.css";

const Checklist = () => {
  return (
    <div id="checklist">
      <input
        defaultChecked
        value="1"
        name="r"
        type="checkbox"
        id="01"
      />
      <label htmlFor="01">Bread</label>

      <input
        value="2"
        name="r"
        type="checkbox"
        id="02"
      />
      <label htmlFor="02">Cheese</label>

      <input
        value="3"
        name="r"
        type="checkbox"
        id="03"
      />
      <label htmlFor="03">Coffee</label>
    </div>
  );
};

export default Checklist;
