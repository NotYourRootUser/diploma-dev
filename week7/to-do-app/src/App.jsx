import Header from "./components/Header";
import TaskField from "./components/TaskField";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  //create a state variable taskArray to store the list.⬇️
  const [taskArray, setTaskArray] = useState([]);

  const submitTaskInApp = (e) => {
    e.preventDefault();
    //when button clicked, we should add a new task into the list.
    const newArray = [...taskArray];
    // if the task is empty string (false), then alert
    if (task === "") {
      alert("Please enter your task!");
    } else {
      newArray.push(task);
      // console.log(newArray)
      setTaskArray(newArray);
      // setTaskArray([...taskArray, task])
      //Reset the input value
      setTask("")
    }
  };

  useEffect(() => {
    console.log(taskArray);
  }, [taskArray]);

  const handleUserInputInApp = (e) => {
    //update task when user input / onChange event triggered
    setTask(e.target.value);
    return;
  };

  function deleteTaskInApp(indexOfTask) {
    //delete the task by it's index from the array
    console.log(indexOfTask)
    // Using array.splice() to remove the task⬇️
    taskArray.splice(indexOfTask, 1);
    setTaskArray([...taskArray])
    return;
}

  return (
    <div className="container">
      <Header userName="Ewan" />
      <TaskField
        submitTask={submitTaskInApp}
        handleUserInput={handleUserInputInApp}
        inputValue={task}
      />
      <TaskList
        list={taskArray}
        deleteTask={deleteTaskInApp} />
    </div>
  );
}

export default App;
