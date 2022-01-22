import React, { useState, useEffect } from "react";

export default function EducationForm({
  id,
  updateEducationList,
  deleteEducation,
}) {
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [educationType, setEducationType] = useState("BSC");
  const [year, setYear] = useState("");

  const update = () => {
    if (school && course && educationType && year) {
      updateEducationList({ school, course, educationType, year, id });
    } else {
      alert("Please fill the form correctly");
    }
  };
  useEffect(() => {
    // console.log(id);
  });

  const handleDelete = () => {
    deleteEducation(id);
  };
  return (
    <div className="section">
      <div className="inputs">
        <input
          placeholder="School"
          onChange={(e) => {
            setSchool(e.target.value);
          }}
        />
        <input
          placeholder="Course"
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
        <select
          defaultValue="bsc"
          onChange={(e) => {
            setEducationType(e.target.value);
          }}
        >
          <option value="BSC">BSC</option>
          <option value="MSC">MSC</option>
          <option value="PHD">PHD</option>
          <option value="OND">OND</option>
        </select>
        <input
          type="date"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button onClick={update}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
