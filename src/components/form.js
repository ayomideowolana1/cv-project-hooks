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
      <Picture updatePicture={updatePicture} />
      <Names setNames={setNames} />
      <Contact setContact={setContact} />
      <Summary updateSummary={updateSummary} />
      <Skills updateSkills={updateSkills} />
      <Experiences updateExperiences={updateExperiences} />
      <Education updateEducation={updateEducation} />
      <Certification updateCertification={updateCertification} />
      <Languages updateLanguages={updateLanguages} />
    </div>
  );
}
