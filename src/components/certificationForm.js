import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

export default function CertificationForm({
  updateCertificationList,
  id,
  deleteCertification,
}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    title && date ? setDisabled(false) : setDisabled(true);
  });

  const handleDelete = () => {
    deleteCertification(id);
  };

  return (
    <div className="section">
      <div className="inputs">
        <input
          type="text"
          placeholder="Certification Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button
          disabled={disabled}
          onClick={() => {
            updateCertificationList({ title, id, date });
          }}
        >
          Update
        </button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}
