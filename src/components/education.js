import React, { useState, useEffect } from "react";
import EducationForm from "./educationForm";
import uniqid from "uniqid";

export default function Education({ updateEducation }) {
  const [educationList, setEducationList] = useState([
    {
      school: "XYZ Academy",
      course: "Biochemical Engineering",
      educationType: "BSC",
      year: "2023-02-02",
      id: "kyou9qn6",
    },
  ]);

  const updateEducationList = (education) => {
    let arr = educationList;
    let filteredArr = arr.filter((e) => {
      return e.id == education.id;
    });
    let index = arr.indexOf(filteredArr[0]);
    arr[index] = education;
    console.log(arr)
    setEducationList(arr);
    updateEducation(arr);
  };
  const addNewEducation = () => {
    let arr = [
      ...educationList,
      {
        id: uniqid(),
        school: "",
        course: "",
        year: "",
      },
    ];

    setEducationList(arr);
  };

  const deleteEducation = (e) => {
    let arr = educationList;
    let newArr = arr.filter((i) => {
      return i.id != e;
    });
    setEducationList(newArr);
    updateEducation(newArr);
  };
  return (
    <div className="col section">
      <h2>Educaiton</h2>
      <hr />
      {educationList.map((education) => {
        return (
          <EducationForm
            key={education.id}
            id={education.id}
            updateEducationList={updateEducationList}
            updateEducation={updateEducation}
            deleteEducation={deleteEducation}
          />
        );
      })}
      <button onClick={addNewEducation}>Add new education</button>
    </div>
  );
}
