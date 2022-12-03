import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  initialValues: {
    name: "",
    email: "",
    channel: "",
  },
};

const onSubmit = (values) => {
  console.log("Form data: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Requred"),
  channel: Yup.string().required("Required"),
});

export const YtForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="name">Email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="name">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
