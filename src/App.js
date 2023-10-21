import React, { useEffect, useState, useRef }  from "react";
import supremeLogo from "./img/supreme-logo.svg"
import waveTop from "./img/wave-top.svg"
import waveBottom from "./img/wave-bottom.svg"
import picCigares from "./img/pic-cigares@3x.png"
import "./css/logo.css"
import Modal from "./Modal";


function App() {
  
  const ref = useRef(null);
  const [inputValueEmail, setInputValueEmail] = useState('');
  const [isInputEmailFocused, setIsInputEmailFocused] = useState(false);
  const [isInputEmailFirstFocus, setIsInputEmailFirstFocus] = useState(0)

  const [inputValuePassword, setInputValuePassword] = useState('');
  const [isInputPasswordFocused, setIsInputPasswordFocused] = useState(false);
  const [isInputPasswordFirstFocus, setIsInputPasswordFirstFocus] = useState(0);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  const [buttonVisibility, setbuttonVisibility] = useState({
    visibility: "hidden"
    }); 
  const [eyeClass, setEyeClass] = useState("bi-closed-eye");
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [isEyeClicked, setIsEyeClicked] = useState(0);
  const [isEyeFirstClicked, setIsEyeFirstClicked] = useState(0);


  const [emailErrorMessageStyle, setEmailErrorMessageStyle] = useState({});
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [passwodErrorMessageStyle, setPasswordErrorMessageStyle] = useState({});
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();


  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [modalWindow, setModalWindow] = useState(false)

  useEffect (() => {
    setIsInputEmailFirstFocus(isInputEmailFirstFocus +1)
    if (inputValueEmail){
      if (emailPattern.test(inputValueEmail) === true){
        setEmailErrorMessageStyle({display: "none"});
        setIsEmailValid(true);
      }
      else{
        setEmailErrorMessage("Невірний формат пошти");
        setEmailErrorMessageStyle({display: "block"});
        setIsEmailValid(false);
      }
    }
    else {
      if (isInputEmailFirstFocus >= 2){
      setEmailErrorMessage("Це поле пусте !");
      setEmailErrorMessageStyle({display: "block"});
      setIsEmailValid(false);
    }
  }
  }, [isInputEmailFocused])


  useEffect (() => {
    setIsInputPasswordFirstFocus(isInputPasswordFirstFocus +1)
    if (inputValuePassword) {
      if (inputValuePassword.length >= 6 && inputValuePassword.length <= 20){
        setPasswordErrorMessageStyle({display: "none"}); 
        setIsPasswordValid(true);
      }
      else if (inputValuePassword.length > 20){
        setPasswordErrorMessageStyle({display: "block"}); 
        setPasswordErrorMessage("Довжина рядка не повинна бути більшою 20 символів");
        setIsPasswordValid(false);
      }
      else{
        setPasswordErrorMessageStyle({display: "block"}); 
        setPasswordErrorMessage("Довжина рядка не повинна бути меньша 6 символів");
        setIsPasswordValid(false);
      }
    }
    else {
      if (isInputPasswordFirstFocus >= 2){
      setPasswordErrorMessageStyle({display: "block"}); 
      setPasswordErrorMessage("Це поле пусте !");
      setIsPasswordValid(false);
    }}
  
  }, [isInputPasswordFocused, inputValuePassword])


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

useEffect(() => {
  if (isEmailValid && isPasswordValid){
    setbuttonVisibility({visibility: "visible"})
  }
}, [isPasswordValid, isEmailValid])

  return (
    <div className="body-style">
    <form className="form-sign-in-superadmin">
        <div className="form-logo">
          <img src={supremeLogo}  className="form-logo-supreme-logo supreme--logo"/>
          <img src={waveTop} className="wave-top"/>
          <img src={picCigares} className="pic-cigares"/>
          <img src={waveBottom} className="wave-bottom"/>
        </div>
        <div className="form-sign-in">
          <img src={supremeLogo}  className="form-sign-in-supreme-logo supreme--logo"/>
          <p className="sign-in-text">Sign in</p>
          <div className="sign-in-input">
            <div className="email-box sign-in-input-box--styles sign-in-input--text-styles"> 
              <label htmlFor="label-email" className="text-box">Email</label>
              <input id="label-email" className="email-input sign-in-input--style" type="text" placeholder="Email"  
              ref={ref}
              onFocus={() => setIsInputEmailFocused(true)}
              onBlur={() => setIsInputEmailFocused(false)}
              onChange={(event) => setInputValueEmail(event.target.value)}
                />
            </div> 
            <span id="email-error-message" className="error-message sign-in-input--text-styles" style={emailErrorMessageStyle}>{emailErrorMessage}</span>
            <div className="passwod-box sign-in-input-box--styles sign-in-input--text-styles">
                <label htmlFor="label-password" className="text-box">Password</label>
                <div className="input-eye">
                  <input id="label-password" className="password-input sign-in-input--style" type={passwordInputType} placeholder="********"
                   ref={ref}
                   onFocus={() => setIsInputPasswordFocused(true)}
                   onBlur={() => setIsInputPasswordFocused(false)}
                   onChange={(event) => setInputValuePassword(event.target.value)}
                   />
                  <div className="passwod-eye">
                    <button type="button" id="eye-button" className={`bi bi--eye ${eyeClass}`} onClick={() => setIsEyeClicked(isEyeClicked +1)}></button>
                  </div>
                </div>
            </div>
            <span id="password-error-message" className="error-message sign-in-input--text-styles" style={passwodErrorMessageStyle}>{passwordErrorMessage}</span> 
          </div>
          <button type="button" style={buttonVisibility} className="button-sign-in" onClick={() => setModalWindow(true)}>Sign in</button>
          {modalWindow && <Modal setModalWindow={setModalWindow} email={inputValueEmail} password={inputValuePassword} />}
        </div>
    </form>
  </div>
  );
}

export default App;
