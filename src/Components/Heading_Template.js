import React from "react";
import "../Styles_Css/Heading_Template.css";

// ============Heading ==============

const Heading_Template = (props) => {
  return (
    <div>
      <h2
        style={{ color: props.color }}
        className="professional-experience-heading">
        {props.title}
      </h2>
      <hr style={{ backgroundColor: props.color }} className="vertical-line" />
    </div>
  );
};

export default Heading_Template;
