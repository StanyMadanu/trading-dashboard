import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const loginWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://192.168.0.105:3400/user/login");
      console.log(response.data, "respose");

      window.open(response.data.data, "_blank");
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login p-5">
        <div className="login-with d-flex flex-column align-items-center gap-3 mb-5">
          <h5 className="mb-2">Log in with</h5>
          <GoogleButton onClick={(e) => loginWithGoogle(e)} />
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
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
            <label htmlFor="password" className="form-label">
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
            Don't have an account ?
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
