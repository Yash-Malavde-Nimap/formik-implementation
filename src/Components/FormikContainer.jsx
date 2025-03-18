import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {
    email: "",
    name: "",
    first: "",
    second: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    first: Yup.string().required("Name is Required"),
    second: Yup.string().required("Name is Required"),
  });

  const onSubmit = (value, onSubmitProps) => {
    console.log("Form Data : ", value);
    onSubmitProps.resetForm();
  };

  return (
    <div>
      <h2>Formik Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <div
            style={{
              minHeight: "100vh",
              background: "#a1917b",
            }}
          >
            <Form
              style={{
                height:'100%',
                // height:'100%',
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                border:"2px solid black"
              }}
            >
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="Email"
                autoComplete="off"
                style={{
                  color: "white",
                }}
              />

              <FormikControl
                control="input"
                type="text"
                name="name"
                label="Name"
                autoComplete="off"
                style={{
                  color: "white",
                }}
              />

              <FormikControl
                control="input"
                type="text"
                name="first"
                label="First Name"
                autoComplete="off"
                style={{
                  color: "white",
                }}
              />

              <FormikControl
                control="input"
                type="text"
                name="second"
                label="Second Name"
                autoComplete="off"
                style={{
                  color: "white",
                }}
              />
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
