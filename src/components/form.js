import React, { useSate } from "react";
import Contact from "./contact";
import Education from "./education";
import Experiences from "./experience";
import Names from "./names";
import Skills from "./skills";
import Summary from "./summary";
import Certification from "./cetification";
import Picture from "./picture";
import Languages from "./languages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Form({
  setNames,
  setContact,
  updateSkills,
  updateExperiences,
  updateSummary,
  updateEducation,
  updateCertification,
  updatePicture,
  updateLanguages
}) {
  return (
    <div className="col-lg-6" id="form">
      <div>
        <Router>
          <div>
            <ul className="form-nav">
              <li>
                <Link to="/">Picture</Link>
              </li>
              <li>
                <Link to="/names">Names</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/summary">Summary</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/experiences">Experiences</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/certification">Certification</Link>
              </li>
              <li>
                <Link to="/languages">Languages</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route
              path="/"
              element={<Picture updatePicture={updatePicture} />}
            />
            <Route path="/names" element={<Names setNames={setNames} />} />
            <Route
              path="/contact"
              element={<Contact setContact={setContact} />}
            />
            <Route
              path="/summary"
              element={<Summary updateSummary={updateSummary} />}
            />
            <Route
              path="/skills"
              element={<Skills updateSkills={updateSkills} />}
            />
            <Route
              path="/experiences"
              element={<Experiences updateExperiences={updateExperiences} />}
            />
            <Route
              path="/education"
              element={<Education updateEducation={updateEducation} />}
            />
            <Route
              path="/certification"
              element={
                <Certification updateCertification={updateCertification} />
              }
            />
            <Route
              path="/languages"
              element={<Languages updateLanguages={updateLanguages} />}
            />
          </Routes>
        </Router>
      </div>
      {/* 
      
      
      
      
      
      
      
      
      */}
    </div>
  );
}
