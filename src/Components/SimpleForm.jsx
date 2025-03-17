import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
import "../Components/SimpleForm.css";
import * as Yup from "yup";

const initialValues = {
  name: "yash",
  email: "yash@gmail.com",
  password: "12341234",
  social: {
    facebook: "",
    instagram: "",
  },
  phNumbers: [""],
  phoneNumbers: ["", ""],
};

const onSubmit = (values, onSubmitProps) => {
  // debugger
  console.log("Form Data", values);
  // console.log(onSubmitProps)
  onSubmitProps.resetForm()

};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const SimpleForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className="form-container">
          <div className="input-container">
            <label className="label" htmlFor="name">Name</label>
            <ErrorMessage id="error" className="error" name="name" />
            <FastField
              className={`input-field ${
                touched.name && errors.name ? "error-input" : ""
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <ErrorMessage className="error" name="email" />
            <Field
              className={`input-field ${
                touched.email && errors.email ? "error-input" : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <ErrorMessage className="error" name="password" />
            <Field
              className={`input-field ${
                touched.password && errors.password ? "error-input" : ""
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="input-container">
            <label htmlFor="facebook">Facebook</label>
            <ErrorMessage className="error" name="facebook" />
            <Field
              className={`input-field ${
                touched.social?.facebook && errors.social?.facebook
                  ? "error-input"
                  : ""
              }`}
              type="text"
              id="facebook"
              name="social.facebook"
              placeholder="Enter Facebook ID"
            />
          </div>

          <div className="input-container">
            <label htmlFor="instagram">Instagram</label>
            <ErrorMessage className="error" name="instagram" />
            <Field
              className={`input-field ${
                touched.social?.instagram && errors.social?.instagram
                  ? "error-input"
                  : ""
              }`}
              type="text"
              id="instagram"
              name="social.instagram"
              placeholder="Enter Instagram ID"
            />
          </div>

          <div className="input-container">
            <label htmlFor="primary">phoneNumber</label>
            <ErrorMessage className="error" name="phoneNumbers" />
            <Field
              className={`input-field ${
                touched.phoneNumbers?.[0] && errors.phoneNumbers?.[0]
                  ? "error-input"
                  : ""
              }`}
              type="text"
              id="primary"
              name="phoneNumbers[0]"
              placeholder="Enter Phone 1"
            />
          </div>

          <div className="input-container">
            <label htmlFor="secondary">phoneNumber</label>
            <ErrorMessage className="error" name="phoneNumbers" />
            <Field
              className={`input-field ${
                touched.phoneNumbers?.[1] && errors.phoneNumbers?.[1]
                  ? "error-input"
                  : ""
              }`}
              type="text"
              id="secondary"
              name="phoneNumbers[1]"
              placeholder="Enter Phone 2"
            />
          </div>

          <div>
            <FieldArray name="phNumbers">
              {(fieldProps) => {
                const { push, remove, form } = fieldProps;
                const { values } = form;
                const { phNumbers } = values;

                return (
                  <>
                    {phNumbers.map((item, index) => (
                      <div className="input-phNumbers" key={index}>
                        <Field
                          className={`input-field ${
                            touched.phNumbers?.[index] &&
                            errors.phNumbers?.[index]
                              ? "error-input"
                              : ""
                          }`}
                          type="text"
                          name={`phNumbers[${index}]`}
                          placeholder="Enter Phone Number"
                        />

                        <div>
                          {index > 0 && (
                            <button className="ph-button" type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button className="ph-button" type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                );
              }}
            </FieldArray>
          </div>
          <div>
            <button className="submit" type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;
