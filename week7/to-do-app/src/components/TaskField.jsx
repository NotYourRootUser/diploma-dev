// import { useState, useEffect } from "react";

function TaskField({submitTask, handleUserInput,inputValue}) {
  return (
    <div>
      <form className="form-control" onSubmit={submitTask}>
        <label>Task</label>
        <input onChange={handleUserInput} value={inputValue} />
        <button type="submit" className="btn btn-block">
          Save Task
        </button>
      </form>
    </div>
  );
}

export default TaskField;
