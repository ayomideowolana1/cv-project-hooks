import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPicture } from "./pictureSlice";

export default function Picture({ updatePicture }) {
  const dispatch = useDispatch();

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      dispatch(setPicture(URL.createObjectURL(img)));
    }
  };

  return (
    <div className="section col platinum">
      <h2>Picture</h2>
      <hr className="line" />
      <input type="file" accept="image/*" onChange={onImageChange} />
    </div>
  );
}
