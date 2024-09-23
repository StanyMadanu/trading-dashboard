import React from "react";
import { FcGoogle } from "react-icons/fc";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login p-5">
        <div className="login-with d-flex flex-column align-items-center gap-3 mb-5">
          <h5 className="mb-2">Log in with</h5>
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>

        <form>
          <div className="mb-4">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="mb-4">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-3 text-end">
            <button className="btn btn-primary text-uppercase ">Log in</button>
          </div>

          <p className="text-center">
            Don't have an account ?{" "}
            <Link to="#" className="text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
