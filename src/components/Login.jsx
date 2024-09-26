import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTES } from "../services/apiService";
import GoogleButton from "react-google-button";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.LOGIN);

      const googleLoginUrl = response.data.data;
      console.log(googleLoginUrl);

      window.open(googleLoginUrl, "_self");
      setSignIn(true);
    } catch (error) {
      console.error("Failed to initiate Google login", error);
      toast.error(error.message || "Login failed");
      setSignIn(false);
    }
  };

  useEffect(() => {
    if (signIn) {
      // console.log(window.location.href);
    }
  }, [signIn]);

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login">
        <div className="login-with d-flex flex-column align-items-center gap-3 mb-5">
          <h5 className="mb-2">Log in with</h5>
          <GoogleButton onClick={(e) => handleGoogleLogin(e)} />
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
