import React, { useContext } from 'react';
import { SigninContext } from '../context/SigninContext';

function SignIn() {
  const { setUsername, setShowProfile } = useContext(SigninContext);
  return (
    <>
      <div className="SignIn">
        <h1 className="Signinheader">We have missed you!</h1>
        <div className="SignIn1">
          <p className="Signinpara">Enter your username and password</p>
          <div className="inputParent">
            <input
              className="input"
              type="text"
              placeholder="Username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input className="input" type="password" placeholder="Password" />
          </div>

          <button
            className="Signinbutton"
            onClick={() => {
              setShowProfile(true);
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
