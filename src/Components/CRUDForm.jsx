import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import { useState } from "react";
import "../Components/CRUDForm.css";

function CRUDForm() {
  const initialValues = {
    username: "",
    email: "",
    age: "",
  };

  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(initialValues);

  const validationSchema = Yup.object({
    username: Yup.string().required("*Username is Required"),
    email: Yup.string().email("Invalid Email").required("*Email is Required"),
    age: Yup.number()
      .required("*Age is Required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer"),
  });

  //
  const onSubmit = (values, { resetForm }) => {
    if (editIndex !== null) {
      const updatedData = [...formData];
      updatedData[editIndex] = values;
      setFormData(updatedData);
      setEditIndex(null);
    } else {
      setFormData([...formData, values]);
    }
    resetForm();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(formData[index]);
  };

  const handleDelete = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
  };

  return (
    <div className="form-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Formik CRUD Operations</h2>

        <Formik
          initialValues={editIndex != null ? editData : initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          {() => (
            <div className="form-wrapper">
              <Form className="form">
                <FormikControl
                  control="input"
                  type="text"
                  name="username"
                  label="Username"
                  autoComplete="off"
                />

                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  label="Email"
                  autoComplete="off"
                />

                <FormikControl
                  control="input"
                  type="number"
                  name="age"
                  label="Age"
                  autoComplete="off"
                />

                <button type="submit" className="submit-button">
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>

      <div className="data-list">
        <h2>List of Users</h2>
        {formData.length > 0 ? (
          <ul
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              // marginTop: "20px",
            }}
          >
            {formData.map((data, index) => (
              <li key={index} className="data-item">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>{`Username : ${data.username}`}</p>
                  <p>{`Email : ${data.email}`}</p>
                  <p>{`Age : ${data.age}`}</p>
                </div>
                <div className="action-buttons">
                  <button
                    onClick={() => handleEdit(index)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default CRUDForm;
