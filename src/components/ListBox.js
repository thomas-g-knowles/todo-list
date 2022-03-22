import React, { useState } from "react";

const ListBox = (props) => {
  const [lists, setList] = useState({
    toDoArrP: ["dishes", "car", "eat"],
    toDoArrS: ["code", "code more"],
  });

  return (
    <section className="ListBox" id={props.id}>
      {props.priority
        ? lists.toDoArrP.map((task, index) => {
            return (
              <div className="task">
                <p key={index}>{task}</p>
                <button key={index}>Done</button>
                <button key={index}>Archive</button>
                <button key={index}>Delete</button>
              </div>
            );
          })
        : lists.toDoArrS.map((task, index) => {
            return (
              <div className="task">
                <p key={index}>{task}</p>
                <button key={index}>Done</button>
                <button key={index}>Prioritise</button>
                <button key={index}>Delete</button>
              </div>
            );
          })}
    </section>
  );
};

export default ListBox;
