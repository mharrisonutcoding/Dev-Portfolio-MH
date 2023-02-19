import "../App.css";

import React from "react";

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Michael-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Michael-Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="container" id="resume-page">
        <center>
          <h1>Thank you for visiting my portfolio!!</h1>
          <h3>Click on button below to download PDF file of my Resume</h3>
          <button onClick={onButtonClick}>Download PDF</button>
        </center>
      </div>
    </>
  );
};

export default Resume;
