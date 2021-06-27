import React from "react"

const TaskRow = (props) => {
    
    return ( 
<tr key={props.key}>
              <td>{props.Task.name}</td>
              <td> <input type="checkbox"
                          checked={props.Task.done} 
                          onChange={()=> props.ToggleTask(props.Task)}
            /></td>
            </tr>     );
}
 
export default TaskRow;