import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

export default function Skills({ updateSkills }) {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [disabled, setDisabled] = useState(true);

  const addNewSkill = () => {
    let arr = skills;
    let newArr = [...skills, { id: uniqid(), text: "" }];
    setSkills(newArr);
  };

  const updateSkillList = (e) => {
    let arr = skills;
    let item = arr.filter((i) => {
      return i.id == e.target.id;
    });
    let index = arr.indexOf(item[0]);
    arr[index] = {id:e.target.id,text:e.target.value};
    setSkills(arr);
    updateSkills(arr);
  };

  const deleteSkill = () => {
    if (currentSkill) {
      let arr = skills;
      let newArr = arr.filter((i) => {
        return i.id != currentSkill;
      });
      setSkills(newArr);
      setCurrentSkill("");
    }
  };

  const update = () => {
    console.log(skills)
  };

  useEffect(() => {
    if (currentSkill) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  return (
    <div id="skills" className="col section">
      <h2>Skills</h2>
      <hr />
      <div className="inputs">
        {skills.map((skill) => {
          return (
            <input
              key={skill.id}
              placeholder="Enter skill"
              id={skill.id}
              onChange={updateSkillList}
              onFocus={(e) => {
                setCurrentSkill(e.target.id);
              }}
            />
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={deleteSkill} disabled={disabled}>
          Delete skill
        </button>
        <button onClick={update}>update</button>
        <button onClick={addNewSkill}>Add new skill</button>
      </div>
    </div>
  );
}
