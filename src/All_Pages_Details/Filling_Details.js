import React, { useState } from "react";
import Navbar from "../Components/Head_Part/Navbar";
import DetailFillingSidebar from "../Components/Detail_Filling_Sidebar";
import EducationComponent from "../Components/Education_Component";
import SkillsComponent from "../Components/Skills_Component";
import PersonalInfoComponent from "../Components/Personal_Info_Component";
import PreviewComponent from "../Components/Preview_Component";
import WorkExperienceComponent from "../Components/Work_Experience_Component";
import "../Styles_Css/DetailsFilling.css";

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <SkillsComponent setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
