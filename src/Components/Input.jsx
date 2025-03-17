import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
      }}
    >
      <label htmlFor="">{label}</label>
      <Field
        style={{
          padding: "10px",
          //   background: "gray",
          color: "black",
          border: "2px solid black",
          borderRadius: "10px",

        }}
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
