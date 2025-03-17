import { useFormik } from "formik";
import "../Components/SimpleForm.css";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) errors.name = "Name is Required";

//   if (!values.email) {
//     errors.email = "Email is Required";
//   }

//   if (!values.password) {
//     errors.password = "Password is Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log("Visited Fields : ", formik.touched);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name</label>
          {formik.errors.name && formik.touched.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
          <input
            style={{
              padding: "10px",
              color: "white",
              marginTop: "10px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
            }}
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            id="name"
            placeholder="Enter Name"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email</label>
          {formik.errors.email && formik.touched.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

          <input
            style={{
              padding: "10px",
              color: "white",
              marginTop: "10px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
            }}
            type="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            placeholder="Enter Email"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">Password</label>
          {formik.errors.password && formik.touched.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}

          <input
            style={{
              padding: "10px",
              color: "white",
              marginTop: "10px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "2px solid white",
            }}
            type="current-password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <button
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "18px",
              // textAlign:'left'
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;