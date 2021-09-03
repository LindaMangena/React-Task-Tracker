import {useState} from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'

function App(){
  const [tasks,setTasks]= useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30',
    reminder: true,
},
{
    id: 2,
    text: 'Meeting at school',
    day: 'Feb 5th at 1:30',
    reminder: true,
},
{

    id: 3,
    text: 'Food shopping ',
    day: 'Feb 5th at 2:30',
    reminder: false,
}
])

// Delete Task 
const deleteTask =(id) => {
  console.log('delete',id);

}
  return (
    <div className='container'> 

     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}



export default App