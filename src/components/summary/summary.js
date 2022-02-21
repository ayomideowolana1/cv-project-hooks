import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSummary, setSummary } from "./summarySlice";

export default function Summary() {
  const dispatch = useDispatch();
  const [text,setText ] = useState("")
  const update = () => {
    dispatch(setSummary(text));
  };
  return (
    <div className="col section">
      <h2>Summary</h2>
      <hr />
      <div className="inputs">
        <textarea
          placeholder="Summary"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
        />
      </div>
      <div className="buttons">
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
}
