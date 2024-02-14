import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import DashboardPage from "./DashboardPage";

interface SignInPageProps {
  register: () => void; // Define the type of the register prop
}

const SignInPage: React.FC<SignInPageProps> = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginFailStatus, setLoginFailStatus] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onload = function () {
      if (xhr.status.toString()[0] === "2") {
        setLoginStatus(true);
      } else if (xhr.status.toString()[0] !== "2") {
        setLoginFailStatus(true);
      }
    };
  };
  const userRegister = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    register();
  };

  return (
    <>
      <div className={loginStatus ? "" : "display"}>
        <DashboardPage userName={email.toString()} />
      </div>
      <div className={loginStatus ? "display" : ""}>
        <h2>Login In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <button onClick={userRegister}>Register</button>
        </form>
        <p className={loginFailStatus ? "" : "display"}>
          Try Again! use email id with @reqres.in
        </p>
      </div>
    </>
  );
};

export default SignInPage;
