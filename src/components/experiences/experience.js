import React, { useState, useEffect } from "react";
import ExperienceForm from "./experienceForm";
import { addNewExperience, selectExperience } from "./experienceSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Experiences({ updateExperiences }) {
  const dispatch = useDispatch();
  const experiences = useSelector(selectExperience);

  return (
    <div className="col section">
      <h2>Experiences</h2>
      <hr />
      {experiences.map(e => {
        return (
          <ExperienceForm
            key={e.id}
            id={e.id}
            position={e.position}
            company={e.company}
            dateFrom={e.dateFrom}
            dateTo={e.dateTo}
          />
        );
      })}
      <button
        onClick={() => {
          dispatch(addNewExperience());
        }}
      >
        Add new experience
      </button>
    </div>
  );
}
