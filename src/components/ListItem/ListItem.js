import React from "react";
import "../../App.css";

export default function ListItem({ text, check, deleteHandler }) {
  const [strike, setStrike] = React.useState(check);
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={check ? "checked" : ""}
        onChange={(event) => {
          setStrike(event.target.checked);
        }}
      />
      <span className={`${strike ? "strike" : ""}`}>{text}</span>
      <button onClick={deleteHandler}>x</button>
    </div>
  );
}
