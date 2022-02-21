import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEducation, selectEducation } from "./educationSlice";
import EducationForm from "./educationForm";
import uniqid from "uniqid";

export default function Education() {
  const dispatch = useDispatch();
  const education = useSelector(selectEducation);

  return (
    <div className="col section">
      <h2>Educaiton</h2>
      <hr />
      {education.map(e => {
        return <EducationForm key={e.id} id={e.id} />;
      })}
      <button onClick={()=>{dispatch(addEducation())}}>Add new education</button>
    </div>
  );
}
