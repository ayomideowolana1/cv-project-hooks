import React, { useSate } from "react";
import Contact from "./contact/contact";
import Education from "./education/education";
import Experiences from "./experiences/experience";
import Names from "./names/names";
import Skills from "./skills/skills";
import Summary from "./summary/summary.js";
import Certification from "./certification/cetification";
import Picture from "./picture/picture";
import Languages from "./languages/languages";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Form({ updateExperiences, updateEducation }) {
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
            <Route path="/" element={<Picture />} />
            <Route path="/names" element={<Names />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
