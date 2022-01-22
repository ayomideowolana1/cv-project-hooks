import React, { useState, useEffect } from "react";

export default function Summary({ updateSummary }) {
  const [summary, setSummary] = useState(
    "Laurem ipsium dolor siti ior blah blah blah blah blab blab blab blab blab blab blab blab blab blab blab blab blab blab"
  );
  const update = () => {
    updateSummary(summary);
  };
  return (
    <div className="col section">
      <h2>Summary</h2>
      <hr />
      <div className="inputs">
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
      </div>
      <div className="buttons">
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
}
