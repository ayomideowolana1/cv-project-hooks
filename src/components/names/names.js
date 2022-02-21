import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNames } from "./namesSlice";

export default function Names() {
  const dispatch = useDispatch()
  const [firstName, setFirstname] = useState("John");
  const [middleNames, setMiddlenames] = useState("Michael");
  const [lastName, setLastname] = useState("Doe");

  const submit = () => {
    dispatch(setNames({ firstName, middleNames, lastName }));
    console.log(firstName, middleNames, lastName);
  };

  const handleChange = e => {
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
          value={firstName}
        />
        <input
          onChange={handleChange}
          id="middlenames"
          placeholder="Middle name(s)"
          value={middleNames}
        />
        <input
          onChange={handleChange}
          id="lastname"
          value={lastName}
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
