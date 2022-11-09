import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSignup } from "../../../hooks/useSignup";
import Input from "../Input/Input";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, phone, university, password);
  };
  return (
    <Container>
      <div className="registrationFormMainDiv pt-5 mt-5">
        <div className="registrationFormDiv">
          <h2 className="registrationForm__title">Signup Form</h2>
          <form className="registrationForm" onSubmit={handleSubmit}>
            <Input
              isFloatingLabelInput={true}
              label="Enter your username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              isFloatingLabelInput={true}
              label="Enter your email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              isFloatingLabelInput={true}
              label="Enter your Mbile No"
              name="email"
              type="num"
              placeholder="Enter your Mbile No"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Input
              isFloatingLabelInput={true}
              label="Enter your University"
              name="email"
              type="text"
              placeholder="Enter your University"
              required
              onChange={(e) => setUniversity(e.target.value)}
              value={university}
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
            <small className="m-2"></small>
            <div className="mb-3">
              {/* <button className="btn btn-primary fs-5 w-100 bold ">
                  Signup
                </button> */}
              <button
                className="btn btn-primary fs-5 w-100 bold"
                disabled={isLoading}
                type="submit"
                value="Submit"
              >
                Signup
              </button>
              {error && <div className="text-red-500">{error}</div>}
            </div>
            {/* {user.email && <Navigate to="/"></Navigate>} */}
            <div className="text-center">
              <p>
                Already Registered? <Link to="/">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
