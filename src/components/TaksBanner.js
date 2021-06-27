import React from "react";

const TaskBaner = (props) => {
    return ( 
        <h4 className="bg-primary text-white text center p-4">
           {props.userName} Task app ({props.TaskItem.filter(t=> !t.done).length} task for complete)
        </h4>
     );
}
export default TaskBaner;