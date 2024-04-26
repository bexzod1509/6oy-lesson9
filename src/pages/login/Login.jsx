import React, { useRef } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api";
import { toast } from "react-toastify";
function Login() {
  let navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome");
        navigate("/admin");
      })
      .catch(() => {
        toast.error("Username or Password is incorrect");
      });
  };
  let username = useRef("atuny0");
  let password = useRef("9uQFF1Lh");
  return (
    <>
      <div className="login">
        <div className="containe">
          <div className="navsection">
            <h1>Login</h1>
            <h1>Home - Login</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="register">
          <img src={logo} alt="" />
          <form onSubmit={submit}>
            <p>Email Address*</p>
            <input
              defaultValue={"atuny0"}
              ref={username}
              required
              type="text"
              name=""
              id="input"
              placeholder="Enter Your Email"
            />
            <p>Password*</p>
            <input
              defaultValue={"9uQFF1Lh"}
              ref={password}
              type="password"
              name=""
              id="input"
              required
              placeholder="Enter Your password"
            />
            <div className="check">
              <div>
                <label htmlFor="check">
                  <input type="checkbox" name="check" id="check" />
                  <h4>Remember Me</h4>
                </label>
              </div>
              <h4>Forgot Password?</h4>
            </div>
            <div className="submit">
              <button type="submit">Login</button>
              <h4>Signup?</h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
