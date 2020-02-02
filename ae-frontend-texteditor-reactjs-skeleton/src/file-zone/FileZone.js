import React, { useState } from "react";
import "./FileZone.css";

const FileZone = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };


  return (
    <form className="file-zone" onSubmit={handleSubmit}>
      <textarea
        className="file"
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default FileZone;
