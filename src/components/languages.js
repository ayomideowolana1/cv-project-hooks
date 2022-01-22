import React, { useState, useEffect } from "react";

      export default function Languages({updateLanguages}) {
        const [languages, setLanguages] = useState();
        const handleChange = (e) => {
          let arr = e.target.value.split(",");
          updateLanguages(e.target.value.split(","));
          setLanguages(e.target.value);
        };
        return (
          <div className="section">
            <h2>Languages</h2>
            <input
              placeholder="languages separated by commas"
              value={languages}
              onChange={handleChange}
            />
          </div>
        );
      }
