import React, { useState, useEffect } from "react";
import CertificationForm from "./certificationForm";
import {
  addCertification,
  selectCertification
} from "./certificationSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Certification() {
  const dispatch = useDispatch()
  const certificationList = useSelector(selectCertification);
  const addNewCertification = () => {
    dispatch(addCertification())
  };

  useEffect(() => {
    console.log(certificationList);
  });
  return (
    <div className="section">
      <h2>Certification</h2>
      <hr />
      {certificationList.map(e => {
        return (
          <CertificationForm
            key={e.id}
            id={e.id}
          />
        );
      })}

      <button onClick={addNewCertification}>Add new certification</button>
    </div>
  );
}
