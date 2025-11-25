
// Pass taskArray in here
function TaskList(props) {
  const { list, deleteTask } = props;

//   function handleClick(parameter) {
//   console.log("DELETE BUTTON CLICKED!")
// }


  return (
    <div>{list.map((item,index) => {
      return (
        <h3 className="task" key={index}>
          {index + 1}. {item}

          <button onClick={()=> deleteTask(index)}
            className="delete-icon">x</button>
          {/* <button onClick={sum(2,2)}
            className="delete-icon">x</button> */}
        </h3>
      )
    }) }</div>
  )
}

export default TaskList
