import React from "react";

const Controls = (props) => {
  return (
    <section className="controls">
      <input id={props.inpId} placeholder="Enter task"></input>
      <button>Add Task</button>
    </section>
  );
};

export default Controls;
