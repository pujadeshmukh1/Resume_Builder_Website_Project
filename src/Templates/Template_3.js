import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles_Css/Templates.css";
import HeaderTemplate from "../Components/Header_Template";
import HeadingTemplate from "../Components/Heading_Template";
import OneExperienceTemplateComponent from "../Components/OneExperience_TemplateComponent";
import { data } from "../Data/data";
import EducationTemplateCompnent from "../Components/Education_Template_Compnent";
import TemplateSkillComponent from "../Components/Template_Skill_Component";

const Template_3 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;
  // console.log(props.index);
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <HeaderTemplate
        primaryColor={"#00c8aa"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <HeadingTemplate color={"#00c8aa"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <OneExperienceTemplateComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <HeadingTemplate color={"#00c8aa"} title={"Education"} />
        <EducationTemplateCompnent education={educationinfo} />
        <HeadingTemplate color={"#00c8aa"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateSkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template_3;
