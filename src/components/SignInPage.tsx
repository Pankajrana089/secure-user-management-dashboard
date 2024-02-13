import React, { useState, ChangeEvent, FormEvent } from "react";
import DashboardPage from "./DashboardPage";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically call your authentication service
    var data = JSON.stringify({ email: email, password: password });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onload = function () {
      if (xhr.status.toString()[0] === "2") {
        setLoginStatus(true);
      }
    };
  };

  return (
    <>
      <div className={loginStatus ? "" : "display"}>
        <DashboardPage userName={email.toString()} />
      </div>
      <div className={loginStatus ? "display" : ""}>
        <h2>Sign In</h2>
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
