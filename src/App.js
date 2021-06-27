import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskRow from './components/TaskRow';
import TaskBaner from './components/TaksBanner';
import TaskCreator from './components/TaskCreator';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [userName, setUserName] = useState("Topo");

  const [TaskItem, setTaskItem] = useState([  ])

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(()=> {

    let data = localStorage.getItem("task");
    if(data != null)
    {
      setTaskItem(JSON.parse(data))
    }
    else 
    {
        setUserName("Topo local")
        setShowCompleted(true)
        setTaskItem([])
    }

  },[])

  useEffect(()=>
              {
                  localStorage.setItem('task', JSON.stringify(TaskItem))

               },[TaskItem])


  const CreateNewTask = (task)=>{
                              if(!TaskItem.find(t=> t.name === task))
                              {
                                setTaskItem([...TaskItem, {id:4, name: task, done:false}] )
      
                              }
                              else {
                                alert("This task already exist, change the name")
                              }
                            }

  const ToggleTask = (task)=>
                    { 
                        setTaskItem(TaskItem.map(e=>
                          (e.name === task.name ? {...e, done: !e.done} : e)
                          ))     
                    }

  const TaskTableRows = (doneValue)=>
                      {
                        return TaskItem.filter(task=> task.done === doneValue)
                                       .map(task =>(
                                                      <TaskRow 
                                                      Task={task}
                                                      Key={task.id}
                                                      ToggleTask={ToggleTask}
                                                      />                
                                                    ))
                      }

  return (
    <div>
      <TaskBaner userName={userName} TaskItem={TaskItem}/>
      <TaskCreator Creator={CreateNewTask}/>

      <table className="table table-striped table-border">
        <thead>
          <tr>
          <th>Description</th>
          <th>Is Done?</th>
          </tr>
        </thead>
        <tbody>
            { 
              TaskTableRows(false)
            } 
        </tbody>
      </table>
      <div className="bg-secondary text-center text-white">
          <VisibilityControl
              isChecked={showCompleted}
              callback={checked => setShowCompleted(checked)}
              description="completed tasks"
          />
      </div>
      {
        showCompleted && (
          <table className="table table-striped table-border">
            <thead>
              <tr>
                <th>Description</th>
                <th>Is done?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {TaskTableRows(true)}
              </tr>
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
