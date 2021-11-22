import React from "react";
import "./TodoItem.css";

import Checkbox from "@material-ui/core/Checkbox";

const todoItem = ({ name, done, id }) => {
  const handleCheck = () => {};

  return (
    <div className="todoItem">
      <Checkbox
        {...name}
        checked={done}
        onChange={handleCheck}
        color={"primary"}
      />

      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default todoItem;
