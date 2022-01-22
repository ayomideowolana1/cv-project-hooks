import React, { useState, useEffect } from "react";

export default function Picture({updatePicture}) {
  const [pic, setPic] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPic(URL.createObjectURL(img));
      updatePicture(URL.createObjectURL(img));
    }
  };
  
  return (
    <div className="section col">
      <h2>Picture</h2>
      <hr className="line" />
      <input type="file" accept="image/*" onChange={onImageChange} />
    </div>
  );
}
