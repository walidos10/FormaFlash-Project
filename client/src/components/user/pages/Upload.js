import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
//import { userRegister } from ".../";
//import { Redirect } from "react-router-dom";

import { addimage } from "../../../JS/actions/user";

const Upload = () => {
  const [image, setImage] = useState();
  const [state, setstate] = useState({ pays: "", ville: "", langue: "" });

  const dispatch = useDispatch();

  const formData = new FormData();
  formData.append("file", image);
  //formData.append("name", state);

  //console.log(image[0]);

  // console.log(image, state);
  return (
    <div>
      {/* <input
        name="pays"
        type="text"
        value={state.pays}
        onChange={(e) => {
          setstate({ ...state, pays: e.target.value });
        }}
      />*/}
      <input
        name="file"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          dispatch(addimage(formData));
          setImage("add succes");
        }}
      >
        add
      </button>
    </div>
  );
};

export default Upload;
