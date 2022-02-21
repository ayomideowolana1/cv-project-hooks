import React, { useState, useEffect } from "react";
import { updateExperience, deleteExperience } from "./experienceSlice";
import { useDispatch } from "react-redux";

export default function ExperienceForm({
  id,
  position,
  company,
  dateFrom,
  dateTo
}) {
  const dispatch = useDispatch();
  const [_position, setPosition] = useState(position);
  const [_company, setCompany] = useState(company);
  const [_dateFrom, setDateFrom] = useState(dateFrom);
  const [_dateTo, setDateTo] = useState(dateTo);
  const [disabled, setDisabled] = useState(true);

  const positionChange = e => {
    setPosition(e.target.value);
  };
  const companyChange = e => {
    setCompany(e.target.value);
  };
  const dateFromChange = e => {
    setDateFrom(e.target.value);
  };
  const dateToChange = e => {
    setDateTo(e.target.value);
  };

  const update = () => {

    dispatch(
      updateExperience({
        id,
        position: _position,
        company: _company,
        dateFrom: _dateFrom,
        dateTo: _dateTo
      })
    );
  };

  const remove = () => {
    dispatch(deleteExperience(id));
  };

  useEffect(() => {
    if (_company && _position && _dateFrom && _dateTo) {
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
          value={_position}
          onChange={positionChange}
        />
        <input
          type="text"
          placeholder="Company"
          value={_company}
          onChange={companyChange}
        />

        <label>
          from <input type="date" value={_dateFrom} onChange={dateFromChange} />
          to <input type="date" value={_dateTo} onChange={dateToChange} />
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
