import React, { useState } from "react";

export default function TextForm(prop) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Converted to uppercase",'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Converted to lowercase",'success')
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    prop.showAlert("Text cleared",'success')
  };

  const handlePunckClick = () => {
    let punclst = " !\"#$%&'()*+, -./:;<=>?@[\\]^_`{|}~ ";
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (!punclst.includes(text[i])) {
        result = result + text[i];
      }
    }
    setText(result);
    prop.showAlert("Puncs Removed",'success')

  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
        <h1 style={{ color: prop.mode === "light" ? "black" : "white" }}>
          {prop.heading}
        </h1>
        <div className="mb-3">
          <textarea
            style={{
              background: prop.mode === "light" ? "white" : "grey",
              color: prop.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlePunckClick}>
          Remove to puncs
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        style={{ color: prop.mode === "light" ? "black" : "white" }}
        className="container my-3"
      >
        <h2>Your text summary</h2>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters */}
          {text.split(" ").filter(word => word !== "").length} words and {text.replace(/\s/g, "").length} characters

        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something above to Preview"}</p>
      </div>
    </>
  );
}
