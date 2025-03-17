import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {
    email: "",
    name: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
  });

  const onSubmit = (value, onSubmitProps) => {
    console.log("Form Data : ", value);
    onSubmitProps.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />

            <FormikControl
              control="input"
              type="name"
              name="name"
              label="Name"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
