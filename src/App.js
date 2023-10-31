import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import supremeLogo from "./img/supreme-logo.svg"
import waveTop from "./img/wave-top.svg"
import waveBottom from "./img/wave-bottom.svg"
import picCigares from "./img/pic-cigares@3x.png"
import "./css/logo.css"
import Modal from "./Modal";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Невірний формат пошти')
    .required('Це поле пусте!'),
  password: Yup.string()
    .min(6, 'Довжина рядка не повинна бути менша 6 символів')
    .max(20, 'Довжина рядка не повинна бути більшою 20 символів')
    .required('Це поле пусте!'),
});


function App() {

  const handleSubmit = (values, { setSubmitting }) => {
    setModalWindow(true);
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  const [buttonVisibility, setButtonVisibility] = useState('hidden');
  const [eyeClass, setEyeClass] = useState("bi-closed-eye");
  const [isEyeClicked, setIsEyeClicked] = useState(0);
  const [isEyeFirstClicked, setIsEyeFirstClicked] = useState(0);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [modalWindow, setModalWindow] = useState(false);
  const [isFormFirstRun, setIsFormFirstRun] = useState(0);

  useEffect(() => {
    setIsFormFirstRun(isFormFirstRun +1);
    if (isFormFirstRun >= 2){
      setButtonVisibility(formik.isValid ? 'visible' : 'hidden');
    }
    console.log(formik.touched.email)
    console.log(formik.isValid)
    console.log(isFormFirstRun)

  }, [formik.values.email, formik.values.password, formik.touched.email, formik.touched.password]);

  useEffect (() => {
    setIsEyeFirstClicked(isEyeFirstClicked +1)
    if (isEyeFirstClicked >= 1){
      if (eyeClass === "bi-closed-eye"){
        setEyeClass("bi-open-eye");
        setPasswordInputType("text");
      }
      else{
        setEyeClass("bi-closed-eye");
        setPasswordInputType("password");
    }}
  }, [isEyeClicked])

  return (
    <div className="body-style">
      <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="form-sign-in-superadmin">
          <div className="form-logo">
            <img src={supremeLogo} className="form-logo-supreme-logo supreme--logo" alt="Supreme Logo" />
            <img src={waveTop} className="wave-top" alt="Wave Top" />
            <img src={picCigares} className="pic-cigares" alt="Cigares" />
            <img src={waveBottom} className="wave-bottom" alt="Wave Bottom" />
          </div>
          <div className="form-sign-in">
            <img src={supremeLogo} className="form-sign-in-supreme-logo supreme--logo" alt="Supreme Logo" />
            <p className="sign-in-text">Sign in</p>
            <div className="sign-in-input">
              <div className="email-box sign-in-input-box--styles sign-in-input--text-styles">
                <label htmlFor="label-email" className="text-box">Email</label>
                <Field
                  id="label-email"
                  name="email"
                  className="email-input sign-in-input--style"
                  type="text"
                  placeholder="Email"
                  // onChange={formik.handleChange}
                  //value={formik.values.email}
                />
              </div>
              <ErrorMessage name="email" id="email-error-message" className="error-message sign-in-input--text-styles" component="span">
                {formik.touched.email && formik.errors.email}
              </ErrorMessage>
              <div className="passwod-box sign-in-input-box--styles sign-in-input--text-styles">
                <label htmlFor="label-password" className="text-box">Password</label>
                <div className="input-eye">
                  <Field
                    id="label-password"
                    name="password"
                    className="password-input sign-in-input--style"
                    type={passwordInputType}
                    placeholder="********"
                    // onChange={formik.handleChange}
                    //value={formik.values.password}
                  />
                  <div className="passwod-eye">
                    <button type="button" id="eye-button" className={`bi bi--eye ${eyeClass}`} onClick={() => setIsEyeClicked(isEyeClicked +1)}></button>
                  </div>
                </div>
              </div>
            <ErrorMessage name="password" id="password-error-message" className="error-message sign-in-input--text-styles" component="span">
              {formik.touched.password && formik.errors.password}
            </ErrorMessage>
            </div>
            <button type="submit" style={{ visibility: buttonVisibility }} className="button-sign-in">Sign in</button>
            {modalWindow && <Modal setModalWindow={setModalWindow} email={formik.values.email} password={formik.values.password} />}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
