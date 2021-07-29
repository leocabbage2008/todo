import React from "react";
import ListItem from "../ListItem/ListItem.js";

export default function List({ todos, deleteHandler }) {
  return (
    <div>
      {todos.map((obj) => (
        <ListItem
          text={obj.text}
          check={obj.check}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}
