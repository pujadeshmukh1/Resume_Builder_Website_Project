import { TextField } from "@mui/material";
import React from "react";
import "../Styles_Css/Input_Component.css";
import { input_Checks } from "../Check_Input/input_Checks";

// ===========Input Parts============

const Input_Component = (props) => {
  return (
    <div className="input-component">
      <p className="input-title">{props.title}</p>

      <TextField
        variant="outlined"
        type={props.type}
        name={props.name}

        {...props.register(props.name, input_Checks(props.type, props.name))}
        multiline={props.multiline}
        
        rows={5}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value.toString())}
        error={props.error}
        helperText={props.errorMessage ? props.errorMessage : null}

      />
    </div>
  );
};

export default Input_Component;
