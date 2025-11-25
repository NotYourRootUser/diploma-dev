import { useState } from 'react';
import Header from './components/Header';
import TaskField from './components/TaskField';
import TaskList from './components/TaskList';
import './App.css';

function App() {

  const [taskArray, setTaskArray] = useState([]);

  return (
    <div className="container">
      <Header userName="Justin" />

      <TaskField 
        taskArray={taskArray}
        setTaskArray={setTaskArray}
      />

      <TaskList taskArray={taskArray} />
    </div>
  );
}

export default App;
