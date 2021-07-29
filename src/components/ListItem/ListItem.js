import React from "react";
import "../../App.css";

export default function ListItem({ text, check, deleteHandler, checkHandler }) {
  return (
    <div className="ListItem">
      <input
        type="checkbox"
        checked={check ? "checked" : ""}
        onChange={checkHandler}
      />
      {check ? <strike>{text}</strike> : <p>{text}</p>}
      <button onClick={deleteHandler}>x</button>
    </div>
  );
}
