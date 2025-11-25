import { useState } from "react";

export default function TaskField({ taskArray, setTaskArray }) {

  const [task, setTask] = useState("");

  const handleUserInput = (e) => {
    setTask(e.target.value);
  };

  const submitTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    setTaskArray([...taskArray, task]);
    setTask("");
  };

  return (
    <form className="form-control" onSubmit={submitTask}>
      <label>Task</label>

      <input 
        value={task}
        onChange={handleUserInput}
      />

      <button type="submit" className="btn btn-block">
        Save Task
      </button>
    </form>
  );
}
