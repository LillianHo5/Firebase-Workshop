import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "../App.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // TODO: set auth variable here
  const auth = getAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      // TODO: call Firebase createUserWithEmailAndPassword function here.
      // Remember to import and set the auth variable following documentation!
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          navigate("/login"); // navigate to login page after successfully signed up, , think where to put this!
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage.includes("email-already-in-use")) {
            setErrorMsg("Email already registered to an account.");
          }
        });
    } else {
      setErrorMsg("Please enter both email and password.");
    }
  };

  return (
    <div className="FormContainer">
      <form>
        <h3 className="TextCenter">Sign Up</h3>
        <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /> <br />
        <label htmlFor="pwd">Password: </label>
        <br />
        <input
          type="password"
          id="pwd"
          name="pwd"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <p className="ErrorMsg">{errorMsg}</p>
        <button onClick={onSubmit} className="SubmitBtn">
          Submit
        </button>
        <br />
        <p>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
