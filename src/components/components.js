import React from "react";

class ListBox extends React.Component {
  state = { toDoArr: ["dishes", "car", "eat"] };

  render() {
    return (
      <section className="tasks">
        {this.state.toDoArr.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </section>
    );
  }
}

class Controls extends React.Component {
  render() {
    return (
      <section className="controls">
        <input placeholder="Enter task"></input>
        <button>Add Task</button>
      </section>
    );
  }
}

export default (ListBox, Controls);
