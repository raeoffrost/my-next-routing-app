import React, { useState } from "react";

const Name = ({ value, onChange }) => {
  return (
    <>
      <label>
        Name
        <br />
        <input
          type="name"
          name="name"
          style={{ padding: 10, marginTop: 10 }}
          placeholder="Enter your name"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

export default Name;
