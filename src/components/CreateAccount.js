import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <>
      <div className="CAIn">
        <h1 className="CAheader">Welcome</h1>
        <div className="CAIn1">
          <p className="CApara">Create an account</p>
          <div className="inputParent1">
            <input className="input" type="text" placeholder="Full Name" />
            <input className="input" type="email" placeholder="Email Address" />
            <input className="input" type="text" placeholder="Username" />
            <input className="input" type="password" placeholder="Password" />
          </div>
          <Link to="/Signin">
            <button className="CAbutton">Create Account</button>
          </Link>

          <p className="CApara1">
            Already have an account?{" "}
            <Link className="CAlink" to="/Signin">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
