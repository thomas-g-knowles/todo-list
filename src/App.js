import "./App.css";
import ListBox from "./components/components.js";
import Controls from "./components/components.js";

function App() {
  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>

      <section id="content">
        <div id="headings">
          <h2 id="h2-priority">Priority</h2>
          <h2 id="h2-secondary">Secondary</h2>
        </div>

        <section id="boxes-container">
          <section id="priority-box">
            <ListBox id="priority-listbox">
              <Controls />
            </ListBox>
          </section>
          <ListBox id="secondary-listbox" />
        </section>
      </section>
    </>
  );
}

export default App;
