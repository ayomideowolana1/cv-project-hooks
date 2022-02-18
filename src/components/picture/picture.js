import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPicture, selectPicture } from "./pictureSlice";

export default function Picture({ updatePicture }) {
  const dispatch = useDispatch();
  const pic = useSelector(selectPicture);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      dispatch(setPicture(URL.createObjectURL(img)));
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
