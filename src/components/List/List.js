import React from "react";
import ListItem from "../ListItem/ListItem.js";

export default function List({ todos, deleteHandler, checkHandler }) {
  return (
    <div>
      {todos.map((obj, num) => (
        <ListItem
          text={obj.text}
          check={obj.check}
          deleteHandler={() => deleteHandler(num)}
          checkHandler={() => checkHandler(num)}
        />
      ))}
    </div>
  );
}
