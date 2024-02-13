import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [signIn, setSignIn] = useState(false);
  function reg() {
    return setSignIn(true);
  }

  return (
    <div className="App">
      {signIn ? <SignInPage /> : <SignUpPage register={reg} />}
    </div>
  );
}

export default App;
