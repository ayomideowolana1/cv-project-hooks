import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCertification, updateCertification } from "./certificationSlice";
export default function CertificationForm({ id }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    title && date ? setDisabled(false) : setDisabled(true);
  });

  const handleDelete = () => {
    dispatch(deleteCertification(id));
  };

  const handleUpdate = () => {
    dispatch(updateCertification({id,title,date}))
  };

  return (
    <div className="section">
      <div className="inputs">
        <input
          type="text"
          placeholder="Certification Title"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="date"
          onChange={e => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button disabled={disabled} onClick={handleUpdate}>
          Update
        </button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}
