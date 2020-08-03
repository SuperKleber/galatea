import React, { useState } from "react";

const LimitText = ({ text = "" }) => {
  let validateText;
  if (!text) {
    validateText = "";
    console.warn("El texto introducido en LimitText está vació o no es válido");
  } else {
    validateText = text;
  }
  const [toggleText, setToggleText] = useState(false);
  const limitText = 50;
  return (
    <>
      {validateText.length > limitText ? (
        <>
          {toggleText ? text : `${validateText.substr(0, limitText)}`}
          {!toggleText && (
            <div
              onClick={() => setToggleText(true)}
              className="text-info"
              style={{ cursor: "pointer" }}
            >
              ...ver más
            </div>
          )}
          {toggleText && (
            <div
              onClick={() => setToggleText(false)}
              className="text-info"
              style={{ cursor: "pointer" }}
            >
              ver menos
            </div>
          )}
        </>
      ) : (
        validateText
      )}
    </>
  );
};

export default LimitText;
