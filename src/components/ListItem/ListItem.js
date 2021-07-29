import React from "react";
import "../../App.css";

export default function ListItem({ text, check, deleteHandler }) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={check ? "checked" : ""}
        onChange={(event) => {
          setStrike(event.target.checked);
        }}
      />
      {strike?<strike>{text}</strike>:<p>{text}</p>}
      <button onClick={deleteHandler}>x</button>
    </div>
  );
}
