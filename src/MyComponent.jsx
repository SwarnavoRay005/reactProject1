import React, { useState } from "react";

function MyComponent() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function input(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") {
      alert("Enter a task to add");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="parent">
        <div className="container">
          <h1>To-Do List</h1>
          <div>
            <input
              type="text"
              placeholder="Enter a task"
              value={newTask}
              onChange={input}
            />
            <button className="add-button" onClick={addTask}>
              Add➕
            </button>
          </div>

          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="text">{task}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete ❌
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default MyComponent;