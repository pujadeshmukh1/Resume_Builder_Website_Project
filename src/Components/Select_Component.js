import { FormControl, FormHelperText } from "@mui/material";
import React from "react";
import "../Styles_Css/Select_Component.css";

// =======Select Props========

const Select_Component = (props) => {
  return (
    <div className="select-component">
      <p className="select-title">{props.title}</p>
      <FormControl fullWidth error={props.error}>
        {props.children}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Select_Component;
