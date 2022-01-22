import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

export default function ExperienceForm({ ID, updateExperienceList, removeExpeirence }) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [disabled, setDisabled] = useState(true);

  const positionChange = (e) => {
    setPosition(e.target.value);
  };
  const companyChange = (e) => {
    setCompany(e.target.value);
  };
  const dateFromChange = (e) => {
    setDateFrom(e.target.value);
  };
  const dateToChange = (e) => {
    setDateTo(e.target.value);
  };

  const update = () => {
    updateExperienceList({ ID, position, company, dateFrom, dateTo });
  };

  const remove = () => {
    removeExpeirence(ID);
  };

  useEffect(() => {
    if (company && position && dateFrom && dateTo) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });
  return (
    <div className="experirnceForm section">
      <div className="inputs">
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={positionChange}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={companyChange}
        />

        <label>
          from <input type="date" value={dateFrom} onChange={dateFromChange} />
          to <input type="date" value={dateTo} onChange={dateToChange} />
        </label>
      </div>
      <div className="buttons">
        <button onClick={update} disabled={disabled}>
          Update experience
        </button>
        <button onClick={remove}>Delete experience</button>
      </div>
    </div>
  );
}
