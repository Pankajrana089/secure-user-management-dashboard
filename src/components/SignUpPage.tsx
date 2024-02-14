import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import DashboardPage from "./DashboardPage";

interface SignUpPageProps {
  login: () => void; // Define the type of the register prop
}
const SignUpPage: React.FC<SignUpPageProps> = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginFailStatus, setLoginFailStatus] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically call your authentication service
    var data = JSON.stringify({ email: email, password: password });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/register", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onload = function () {
      if (password === confirmPassword) {
        if (xhr.status.toString()[0] === "2") {
          setLoginStatus(true);
        } else if (xhr.status.toString()[0] !== "2") {
          setLoginFailStatus(true);
        }
      } else {
        setLoginFailStatus(true);
      }
    };
  };
  const Back = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <div className={loginStatus ? "" : "display"}>
        <DashboardPage userName={email.toString()} />
      </div>
      <div className={loginStatus ? "display" : ""}>
        <h2>Register</h2>
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
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Register Account</button>
          <button onClick={Back}>Back</button>
        </form>
        <p className={loginFailStatus ? "" : "display"}>
          Try Again! Password mismatch or email id is not valid.
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
