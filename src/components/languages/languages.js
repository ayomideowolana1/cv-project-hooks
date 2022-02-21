import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectLanguages, setLanguagesList } from "./languageSlice";

export default function Languages() {
  const dispatch = useDispatch();
  const [languages, setLanguages] = useState("");
  const [test,setTest] = useState(useSelector(selectLanguages))

  const handleChange = e => {
    setLanguages(e.target.value);
  };

  const updateLanguages = () => {
    dispatch(setLanguagesList(languages));
  };

  useEffect(()=>{
    console.log("test is",test)
  })


  return (
    <div className="section">
      <h2>Languages</h2>
      <input
        placeholder="languages separated by commas"
        value={languages}
        onChange={handleChange}
      />
      <button onClick={updateLanguages}>Update</button>
    </div>
  );
}
