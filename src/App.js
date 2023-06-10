import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleSwitchDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1c1a1a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleSwitchGreen = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "#668d66";
      showAlert("Green mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleSwitchBlue = () => {
    if (mode === "light") {
      setMode("blue");
      document.body.style.backgroundColor = "rgb(26 23 71)";
      showAlert("Green mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          mode={mode}
          toggleSwitchDark={toggleSwitchDark}
          toggleSwitchGreen={toggleSwitchGreen}
          toggleSwitchBlue={toggleSwitchBlue}
          title="TextUtils"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter the text to analyze: "
              />
            {/* </Route>
          </Switch> */}

          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
