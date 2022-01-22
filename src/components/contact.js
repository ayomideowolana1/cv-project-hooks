import React, { useState, useEffect } from "react";

export default function Contact({ setContact }) {
  const [phone, setPhone] = useState("08031211602");
  const [email, setEmail] = useState("JohnDoe@email.com");

  const submit = () => {
    setContact({ email, phone });
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
    }
  };
  return (
    <div className="col section">
      <h2>Contact</h2>
      <hr />
      <div className="inputs">
        <input
          id="phone"
          value={phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
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
