import { Formik } from "formik";
import React from "react";
import Input from "./Input";

function FormikControl(props) {
  const { control } = props;

  switch (control) {
    case "input":
      return <Input {...props} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
