import React, { useState } from "react";
import Email from "./Email";
import Name from "./Name";
import styles from "@/styles/Form.module.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState([
    { id: 0, message: "", active: false },
    { id: 1, message: "ERROR: Please provide a name.", active: false },
    { id: 2, message: "ERROR: Please provide an email.", active: false },
    { id: 3, message: "ERROR: Provide a valid email.", active: false },
  ]);

  const handleSubmit = (e) => {
    // prevent default submit
    e.preventDefault();
    if (!formValues.name) {
      updateError(1);
      setMessage("");
    } else if (!formValues.email) {
      updateError(2);
      setMessage("");
    } else if (!formValues.email.includes("@") || !formValues.email.includes(".")) {
      updateError(3);
      setMessage("");
    } else {
      setMessage("Form submitted successfully!");
      updateError(0);
    }
  };

  function updateError(id) {
    const updatedErrors = formErrors.map((error) => {
      if (error.id === id) {
        return { ...error, active: true };
      } else {
        return { ...error, active: false };
      }
    });
    setFormErrors(updatedErrors);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };
  const formStyle = {
    padding: "20px",
    font: "inherit",
  };
  const btnStyle = {
    borderRadius: 5,
    border: "1px solid grey",
    padding: 10,
    marginTop: 5,
    marginLeft: 0,
    fontFamily: "inherit",
  };
  const errorStyle = {
    color: "#ff8b8b",
    marginTop: 10,
    marginLeft: 10,
  };
  const messageStyle = {
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle} className={styles.form} noValidate>
        <Name value={formValues.name} onChange={handleChange} className={styles.form} />
        {formErrors.find((error) => error.id === 1 && error.active) && (
          <div style={errorStyle}>
            <p>{formErrors.find((error) => error.id === 1).message}</p>
          </div>
        )}

        <br />
        <Email value={formValues.email} onChange={handleChange} className={styles.form} />
        {formErrors.find((error) => error.id === 2 && error.active) && (
          <div style={errorStyle}>
            <p>{formErrors.find((error) => error.id === 2).message}</p>
          </div>
        )}
        {formErrors.find((error) => error.id === 3 && error.active) && (
          <div style={errorStyle}>
            <p>{formErrors.find((error) => error.id === 3).message}</p>
          </div>
        )}
        <br />
        <br />
        <button type="submit" style={btnStyle}>
          Submit
        </button>
        <div style={messageStyle}>{message && <p>{message}</p>}</div>
      </form>
    </>
  );
};

export default Form;
