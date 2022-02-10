import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/form";
import Nav from "./components/nav";
import Template from "./components/templates";
import FormRouter from "./components/formRouter";

function App() {
  const [names, setNames] = useState({
    firstname: "John",
    middlenames: "Michael",
    lastname: "Doe",
  });
  const [contact, setContact] = useState({
    phone: "08031211602",
    email: "JohnDoe@email.com",
  });
  const [skills, setSkills] = useState([]);
  const [experiences, setExpeirences] = useState([]);
  const [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  const [education, setEducation] = useState([
    {
      school: "XYZ Academy",
      course: "Biochemical Engineering",
      educationType: "BSC",
      year: "2023-02-02",
      id: "kyou9qn6",
    },
  ]);
  const [certification, setCertification] = useState([]);
  const [picture, setPicture] = useState("");
  const [languages, setLanguages] = useState([]);

  const updateSummary = (e) => {
    setSummary(e);
  };

  const updateExpeirences = (e) => {
    setExpeirences(e);
  };

  const updateEducation = (e) => {
    setEducation(e);
  };

  const updateCertification = (e) => {
    setCertification(e);
  };

  const updatePicture = (e) => {
    setPicture(e);
  };

  const updateSkills = (e) => {
    setSkills(e);
  };

  const updateLanguages = (e) => {
    setLanguages(e);
  };

  useEffect(() => {
    console.log(languages);
  });

  return (
    <div className="container-fluid">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Form
            setNames={setNames}
            setContact={setContact}
            updateSkills={updateSkills}
            updateExperiences={updateExpeirences}
            updateSummary={updateSummary}
            updateEducation={updateEducation}
            updateCertification={updateCertification}
            updatePicture={updatePicture}
            updateLanguages={updateLanguages}
          />
          <Template
            picture={picture}
            names={names}
            contact={contact}
            summary={summary}
            skills={skills}
            education={education}
            experiences={experiences}
            certification={certification}
            languages={languages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
