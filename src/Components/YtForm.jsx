import React from "react";
import { formik, useFormik } from "formik";
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Visited fields: ", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            /* onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name} */
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="name">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
