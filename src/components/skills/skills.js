import React, { useState, useEffect } from "react";
import { setSkillsList,selectSkills } from "./skillsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Skills({ updateSkills }) {
  const dispatch = useDispatch();
  const [skills, setSkills] = useState("");
  const [disabled, setDisabled] = useState(true);

  const update = () => {
    dispatch(setSkillsList(skills))
  };


  return (
    <div id="skills" className="col section">
      <h2>Skills</h2>
      <hr />
      <div className="inputs">
        <input value={skills} onChange={e => {
          setSkills(e.target.value)
        }} />
      </div>
      <div className="buttons">
        <button onClick={update}>update</button>
      </div>
    </div>
  );
}
