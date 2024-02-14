import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";

function App() {
  const [signIn, setSignIn] = useState(false);
  function reg() {
    return setSignIn(!signIn);
  }

  return (
    <div className="App">
      {signIn ? <SignUpPage login={reg} /> : <SignInPage register={reg} />}
    </div>
  );
}

export default App;
