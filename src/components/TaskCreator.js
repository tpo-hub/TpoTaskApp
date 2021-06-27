import React, {useState} from "react";

const TaskCreator = (props) => {

  const [newTaskName, setNewTaskName] = useState("")
  const updateNewTaskName = (e)=>
                                {
                                    setNewTaskName(e.target.value);
                                }

   const createNewTask = ()=>{
                                props.Creator(newTaskName);
                                setNewTaskName("");
                             }


    return (
        <div className="my-1">
            <input type="text" 
                   className="form-control w-50 alert-info m-1"
                   placeholder="Add new task "
                   value={newTaskName}
                   onChange={updateNewTaskName}
            />
            <button className="btn btn-primary mt-1 m-1" onClick={createNewTask}>
                Add Task
            </button>
        </div>
      );
}
 
export default TaskCreator;