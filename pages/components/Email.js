import React, { useState } from "react";

const Email = ({ value, onChange }) => {
  return (
    <>
      <label>
        Email
        <br />
        <input
          type="email"
          name="email"
          style={{ padding: 10, marginTop: 10 }}
          placeholder="example@email.com"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

export default Email;
