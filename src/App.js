import React, { useState } from 'react'
import "./css/logo.css"
import supremeLogo from "./img/supreme-logo.svg"
import waveTop from "./img/wave-top.svg"
import waveBottom from "./img/wave-bottom.svg"
import picCigares from "./img/pic-cigares@3x.png"

function App() {

  const [buttonVisibility, setbuttonVisibility] = useState({
    visibility: "hidden"
    }); 

  return (
    <div className="body-style">
      <form className="form-sign-in-superadmin">
          <div className="form-logo">
            <img src={supremeLogo}  className="form-logo-supreme-logo supreme--logo"/>
            <img src={waveTop} className="wave-top"/>
            <img src={picCigares} className="pic-cigares"/>
            <img src={waveBottom} className="wave-bottom"/>
          </div>
          <div class="form-sign-in">
            <img src={supremeLogo}  className="form-sign-in-supreme-logo supreme--logo"/>
            <p className="sign-in-text">Sign in</p>
            <div className="sign-in-input">
              <div className="email-box sign-in-input-box--styles sign-in-input--text-styles"> 
                <label for="label-email" className="text-box">Email</label>
                <input id="label-email" className="email-input sign-in-input--style" type="text" placeholder="Email"/>
              </div> 
              <span id="email-error-message" className="error-message sign-in-input--text-styles"></span>
              <div className="passwod-box sign-in-input-box--styles sign-in-input--text-styles">
                  <label for="label-password" className="text-box">Password</label>
                  <div className="input-eye">
                    <input id="label-password" className="password-input sign-in-input--style" type="password" placeholder="********"/>
                    <div className="passwod-eye">
                      <button type="button" id="eye-button" onClick="isEyeOpen(event)" className="bi bi-close-eye bi--eye"></button>
                    </div>
                  </div>
              </div>
              <span id="password-error-message" className="error-message sign-in-input--text-styles"></span> 
            </div>
            <button type="button" style={buttonVisibility} className="button-sign-in" onClick="isDataValid(event)">Sign in</button>
          </div>
      </form>
    </div>
  );
}

export default App;
