import { Container } from "@mui/system";
import React from "react";
import "../Styles_Css/Template_Skill_Component.css";


// ======Template Skill========
const Template_Skill_Component = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default Template_Skill_Component;
