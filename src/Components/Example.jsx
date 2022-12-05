import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function Example() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    toggleModal(true);
    // alert(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Name"
                name="name"
              />

              <FormikControl
                control="input"
                type="text"
                label="Surname"
                name="surname"
              />

              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl control="textarea" label="Bio" name="bio" />
              <FormikControl
                control="select"
                label="Course"
                name="course"
                options={dropdownOptions}
              />
              <FormikControl
                control="checkbox"
                label="Your skillset"
                name="skills"
                options={checkboxOptions}
              />
              <FormikControl
                control="date"
                label="Course date"
                name="courseDate"
              />

              <button
                className="btn-modal"
                type="submit"
                disabled={!formik.isValid}
              >
                Submit
              </button>

              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content">
                    <h2>Details:</h2>
                    {/* <p>{formik.values.name}</p> */}
                    <h3>
                      Name: <span className="error">{formik.values.name}</span>
                    </h3>
                    <h3>
                      Surname:{" "}
                      <span className="error">{formik.values.surname}</span>
                    </h3>
                    <h3>
                      Email:{" "}
                      <span className="error">{formik.values.email}</span>
                    </h3>
                    <h3>
                      Biography:{" "}
                      <span className="error">{formik.values.bio}</span>
                    </h3>
                    <h3>
                      Courses:{" "}
                      <span className="error">{formik.values.course}</span>
                    </h3>
                    <h3>
                      Skills:{" "}
                      <span className="error">
                        {formik.values.skills.join(", ")}
                      </span>
                    </h3>
                    <h3>
                      Birth date:{" "}
                      <span className="error">
                        {formik.values.courseDate.toString()}
                      </span>
                    </h3>
                    <button className="close-modal" onClick={toggleModal}>
                      X
                    </button>
                  </div>
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Example;
