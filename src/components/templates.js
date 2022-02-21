import React from "react";
import { useSelector } from "react-redux";
import { selectPicture } from "./picture/pictureSlice";
import { selectNames } from "./names/namesSlice";
import { selectContact } from "./contact/contactSlice";
import { selectSummary } from "./summary/summarySlice";
import { selectCertification } from "./certification/certificationSlice";
import { selectSkills } from "./skills/skillsSlice";
import { selectLanguages } from "./languages/languageSlice";
import { selectExperience } from "./experiences/experienceSlice";
import { selectEducation } from "./education/educationSlice";
import uniqid from "uniqid";

export default function Template() {
  const picture = useSelector(selectPicture);
  const names = useSelector(selectNames);
  const contact = useSelector(selectContact);
  const summary = useSelector(selectSummary);
  const certification = useSelector(selectCertification);
  const skills = useSelector(selectSkills);
  const languages = useSelector(selectLanguages);
  const experiences = useSelector(selectExperience);
  const education = useSelector(selectEducation);

  return (
    <div className="col-lg-6 section">
      <div className="container-fluid template">
        <div className="row template-header">
          <h2>
            {names.firstName} {names.middleNames} {names.lastName}
          </h2>
          <div>
            <p>
              <span>{contact.email}</span> <span>{contact.phone}</span>
            </p>
          </div>
        </div>
        <div className="row summaryPhoto">
          <div className="col-6">
            <p>
              {summary}
            </p>
          </div>
          <div className="col-6">
            <div className="photoCrop">
              <img src={picture} />
            </div>
          </div>
        </div>
        <div className="row details">
          <div className="col-6">
            <div>
              <h3>Experiences</h3>
              {experiences.map(i => {
                return (
                  <div key={i.id}>
                    <p>
                      <b>{i.position}</b> -{i.company}
                    </p>
                    <p>
                      <b>from:</b> {i.dateFrom} <b>to:</b> {i.dateTo}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* languages */}
            <div>
              <h3>Languages</h3>
              <ul>
                {languages.map(i => {
                  return (
                    <li key={uniqid()}>
                      {i}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-6 right">
            {/* skills */}
            <div>
              <h3>Skills</h3>
              <ul>
                {skills.map(i => {
                  return (
                    <li key={uniqid()}>
                      {i}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* certification */}
            <div>
              <h3>Certification</h3>
              {certification.map(i => {
                return (
                  <div key={uniqid()}>
                    <p>
                      <b>{i.title}</b> <br /> {i.date}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* education */}
            <div>
              <h3>Education</h3>
              {education.map(i => {
                return (
                  <div key={uniqid()}>
                    <p>
                      <b>{i.school}</b>-<i>{i.educationType}</i>-{i.course}{" "}
                      <br /> {i.year}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
