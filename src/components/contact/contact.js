import React, { useState, useEffect } from "react";
import { setContact,selectContact } from "./contactSlice";
import { useDispatch,useSelector } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch()
  const contact = useSelector(selectContact);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const submit = () => {
   dispatch(setContact({ email, phone }));
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
