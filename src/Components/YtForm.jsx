import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError } from "./TextError";
// https://github.com/gopinav/React-Formik-Tutorials
const initialValues = {
  initialValues: {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
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
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="text" name="email" id="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" name="channel" id="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address" id="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log("Render props: ", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="class-control">
          <label htmlFor="facebook">Facebook profil</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="class-control">
          <label htmlFor="twitter">Twitter profil</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="class-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primaryPh" name="phoneNumber[0]" />
        </div>

        <div className="class-control">
          <label htmlFor="secondaryPh">Secondary phone number</label>
          <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
