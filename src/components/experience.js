import React, { useState, useEffect } from "react";
import ExperienceForm from "./experienceForm";
import uniqid from "uniqid";

export default function Experiences({ updateExperiences }) {
  const [experiences, setExpeirences] = useState([]);
  const addNewExperience = () => {
    let arr = [...experiences];
    setExpeirences([
      ...arr,
      {
        ID: uniqid(),
        position: "",
        company: "",
        dateFrom: "",
        dateTo: "",
      },
    ]);
  };
  const updateExperienceList = (e) => {
    let arr = experiences;
    let itemArr = experiences.filter((i) => {
      return i.ID == e.ID;
    });
    let index = experiences.indexOf(itemArr[0]);
    arr[index] = e;

    // console.log(arr);
    setExpeirences(arr);
    updateExperiences(arr);
  };

  const removeExpeirence = (id) => {
    let arr = experiences.filter((e) => {
      return e.ID != id;
    });
    setExpeirences(arr);
    updateExperiences(arr);
  };

  useEffect(() => {
    console.log(experiences);
  });
  return (
    <div className="col section">
      <h2>Experiences</h2>
      <hr />
      {experiences.map((e) => {
        return (
          <ExperienceForm
            key={e.ID}
            ID={e.ID}
            position={e.position}
            company={e.company}
            dateFrom={e.dateFrom}
            dateTo={e.dateTo}
            updateExperienceList={updateExperienceList}
            removeExpeirence={removeExpeirence}
          />
        );
      })}
      <button onClick={addNewExperience}>Add new experience</button>
    </div>
  );
}
