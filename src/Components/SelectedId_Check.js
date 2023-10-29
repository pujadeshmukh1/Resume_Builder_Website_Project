import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

//==== Selected ID =====
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SelectedId_Check = (props) => {
  const selectedId = props.selectedTemplateId;
  return selectedId ? props.children : <Navigate to={"/"} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedId_Check);
