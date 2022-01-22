import React, { Component, useState, useEffect } from "react";

export default function Names({ setNames }) {
  const [firstname, setFirstname] = useState("John");
  const [middlenames, setMiddlenames] = useState("Michael");
  const [lastname, setLastname] = useState("Doe");

  const submit = () => {
    setNames({
      firstname,
      middlenames,
      lastname,
    });
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "firstname":
        setFirstname(e.target.value);
        break;
      case "middlenames":
        setMiddlenames(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
    }
  };

  return (
    <div className="col section" id="names">
      <h2>Names</h2>
      <hr />
      <div className="inputs">
        <input
          onChange={handleChange}
          id="firstname"
          placeholder="First name"
          value={firstname}
        />
        <input
          onChange={handleChange}
          id="middlenames"
          placeholder="Middle name(s)"
          value={middlenames}
        />
        <input
          onChange={handleChange}
          id="lastname"
          value={lastname}
          placeholder="Last name"
        />
      </div>
      <div className="buttons">
        <button onClick={submit} id="submitNames">
          Update
        </button>
      </div>
    </div>
  );
}
