import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TextAdsForm = () => {
  const initialValues = { firstName: "" };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <div>
              <h5>Create Text and Media</h5>
            </div>
            <div>
              <label className="form-label" htmlFor="heading1">
                Heading 1
              </label>
              <Field
                className="form-control"
                name="heading1"
                type="text"
                placeholder="Add a heading that would make the user intrested "
              />
              <ErrorMessage name="heading1" />
            </div>
            <div>
              <label className="form-label" htmlFor="heading2">
                First Name
              </label>
              <Field
                className="form-control"
                name="heading2"
                type="text"
                placeholder="Add a heading that would make the user intrested "
              />
              <ErrorMessage name="heading2" />
            </div>
            <div>
              <label className="form-label" htmlFor="buisnessName">
                First Name
              </label>
              <Field
                className="form-control"
                name="buisnessName"
                type="text"
                placeholder="Add your buisness name"
              />
              <ErrorMessage name="buisnessName" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TextAdsForm;
