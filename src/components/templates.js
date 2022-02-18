import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPicture } from "./picture/pictureSlice";
import uniqid from "uniqid";
import store from "../store/store";

export default function Template({
  names,
  contact,
  summary,
  skills,
  certification,
  experiences,
  education,
  languages
}) {
  const {picture} = store.getState()
  return (
    <div className="col-lg-6 section">
      <div className="container-fluid template">
        <div className="row template-header">
          <h2>
            {names.firstname} {names.middlenames} {names.lastname}
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
              <img src={picture.url} />
            </div>
          </div>
        </div>
        <div className="row details">
          <div className="col-6">
            <div>
              <h3>Experiences</h3>
              {experiences.map(i => {
                return (
                  <div key={uniqid()}>
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
            <div>
              <h3>Skills</h3>
              <ul>
                {skills.map(i => {
                  return (
                    <li key={i.id}>
                      {i.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Certification</h3>
              {certification.map(i => {
                return (
                  <div key={uniqid()}>
                    <p>
                      <b>{i.title}</b>- {i.date}
                    </p>
                  </div>
                );
              })}
            </div>
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
