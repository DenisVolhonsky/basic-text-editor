import React, { useState } from "react";
import "./ControlPanel.css";

const ControlPanel = () => {
  const [bold, setBolt] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const handleBold = () => {
    console.log("bolt");
  };

  const handleItalic = () => {
    console.log("italic");
  };

  const handleUnderline = () => {
    console.log("underline");
  };

  return (
    <div id="control-panel">
      <div id="format-actions">
        <button className="format-action" type="button" onClick={handleBold}>
          <b>B</b>
        </button>
        <button className="format-action" type="button" onClick={handleItalic}>
          <i>I</i>
        </button>
        <button
          className="format-action"
          type="button"
          onClick={handleUnderline}
        >
          <u>U</u>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
