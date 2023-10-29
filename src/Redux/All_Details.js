import * as Types_action from "./Types_action";

export const selectTemplate = (id) => ({
  type: Types_action.SELECTTEMPLATE,
  payload: id,
});

export const selectResume = (id) => ({
  type: Types_action.SELECTRESUME,
  payload: id,
});

export const addPersonalInfo = (details) => ({
  type: Types_action.ADDPERSONALINFO,
  payload: details,
});

export const addExperience = (experience) => ({
  type: Types_action.ADDEXPERIENCE,
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: Types_action.ADDALLEXPERIENCE,
  payload: experiences,
});

export const addNewSkills = () => ({
  type: Types_action.ADDNEWSKILLS,
  payload: null,
});

export const editSkill = (skills) => ({
  type: Types_action.EDITSKILL,
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: Types_action.DELETESKILL,
  payload: id,
});

export const addEducation = (details) => ({
  type: Types_action.ADDEDUCATION,
  payload: details,
});
