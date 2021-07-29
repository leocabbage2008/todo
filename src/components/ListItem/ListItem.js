import React from "react";
import "../../App.css";

export default function ListItem({ text, check, deleteHandler }) {
  const [strike, setStrike] = React.useState(check);
  return (
    <div className="ListItem">
      <input
        type="checkbox"
        defaultChecked={check ? "checked" : ""}
        onChange={(event) => {
          setStrike(event.target.checked);
        }}
      />
      {strike ? <strike>{text}</strike> : <p>{text}</p>}
      <button onClick={deleteHandler}>x</button>
    </div>
  );
}
