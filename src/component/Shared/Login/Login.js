import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin.jsx";
import Input from "../Input/Input";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      <Container>
        <div className="loginFormMainDiv mt-5">
          <div className="loginFormDiv">
            <h2 className="loginForm__title">Login Form</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <Input
                isFloatingLabelInput={true}
                label="Enter Email"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                isFloatingLabelInput={true}
                label="Enter your password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <small className="m-2 text-danger"></small>
              <div className="mb-1">
                {/* {user.email && <Navigate to="/"></Navigate>} */}
                {/* <button className="btn btn-primary fs-5 w-100 bold "  disabled={isLoading}>
                
                  Login
                </button> */}
                <button
                  disabled={isLoading}
                  type="submit"
                  value="Submit"
                  className="btn btn-primary fs-5 w-100 bold "
                >
                  Login
                </button>
                {error && <div className="text-red-500">{error}</div>}
                <p className="text-center mt-2">
                  Want to Create an Accout?{" "}
                  <Link to="/signup">
                    <span className="text">Signup</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
