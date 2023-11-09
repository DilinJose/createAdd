import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useNavigate } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const TextAdsForm = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    heading1: "",
    heading2: "",
    buisnessName: "",
    description: "",
    buttonLabel: "",
    websiteurl: "",
  };
  const validationSchema = Yup.object({
    heading1: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    heading2: Yup.string().required("Required"),
    buisnessName: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    buttonLabel: Yup.string().required("Required"),
    websiteurl: Yup.string().required("Required"),
  });

  const handleSubmit = (event) => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setOpen(true);
          setSubmitting(false);
          setTimeout(() => {
            navigate("/createads");
          }, 600);
        }}
      >
        <Form>
          <div style={{}} className="mx-3 mb-3 text-media-card">
            <div className="m-3">
              <h5>Create Text and Media</h5>
            </div>
            <div className="d-flex ">
              <div style={{ flex: 1 }} className="m-3">
                <div className="mb-3">
                  <label className="form-label" htmlFor="heading1">
                    Heading 01
                  </label>
                  <Field
                    className="form-control"
                    name="heading1"
                    type="text"
                    placeholder="Add a heading that would make the user intrested "
                  />
                  <ErrorMessage
                    name="heading1"
                    component="div"
                    className="err-msg"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="heading2">
                    Heading 02
                  </label>
                  <Field
                    className="form-control"
                    name="heading2"
                    type="text"
                    placeholder="Add a heading that would make the user intrested "
                  />
                  <ErrorMessage
                    name="heading2"
                    component="div"
                    className="err-msg"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="buisnessName">
                    Buisness Name
                  </label>
                  <Field
                    className="form-control"
                    name="buisnessName"
                    type="text"
                    placeholder="Add your buisness name"
                  />
                  <ErrorMessage
                    name="buisnessName"
                    component="div"
                    className="err-msg"
                  />
                </div>
              </div>
              <div style={{ flex: 1 }} className="m-3">
                <div className="mb-3">
                  <label className="form-label" htmlFor="description">
                    Description 01
                  </label>
                  <Field
                    className="form-control"
                    name="description"
                    // type="textarea"
                    component="textarea"
                    rows="4"
                    placeholder="Add primary text to help user understand more about your products, services or offer"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="err-msg"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="buttonLabel">
                    Button Label
                  </label>
                  <Field
                    name="buttonLabel"
                    as="select"
                    className="form-control"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a label that best suits your ads
                    </option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <ErrorMessage
                    name="buttonLabel"
                    component="div"
                    className="err-msg"
                  />
                </div>
              </div>
            </div>
            <div className="m-3">
              <label className="form-label" htmlFor="websiteurl">
                Website URL
              </label>
              <Field
                className="form-control"
                name="websiteurl"
                type="text"
                placeholder="Add the url of the landing page you want to redirect user to"
              />
              <ErrorMessage
                name="websiteurl"
                component="div"
                className="err-msg"
              />
            </div>
            <div className="d-flex justify-content-end mt-5">
              <Button
                className="m-3 customButton"
                variant="outlined"
                onClick={() => navigate("/createads")}
              >
                Back
              </Button>

              <React.Fragment>
                <Button
                  className="m-3 customButton"
                  variant="contained"
                  // onClick={handleClickOpen}
                  type="submit"
                >
                  Submit
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  maxWidth="xs"
                  fullWidth={true}
                  PaperProps={{
                    style: {
                      backdropFilter: "blur(200px)",
                    },
                  }}
                >
                  <DialogTitle
                    id="alert-dialog-title"
                    className=" d-flex justify-content-center align-items-center p-3"
                  >
                    <CheckCircleRoundedIcon color="primary" />
                  </DialogTitle>
                  <DialogContent className=" d-flex justify-content-center align-items-center p-3">
                    <DialogContentText id="alert-dialog-description">
                      <h5>Submitted</h5>
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </React.Fragment>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TextAdsForm;
