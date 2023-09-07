import {PlusCircle, Trash, Circle} from 'phosphor-react'
import styles from './App.module.css'
import toDoLogo from './assets/todo.svg'
import './global.css'
import { CreateTaskForm } from './components/CreateTaskForm'
import { Counter } from './components/Counter'
import { Task } from './components/Task'
import { useState } from 'react'
import { ITask, taskListData } from './models'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>(taskListData)

  console.log(taskList);

  return (
    <div>
      <div className={styles.header}>
        <img src={toDoLogo} alt="toDoLogo Logo"/>
      </div>  

      <div className={styles.wrapper}>

        <CreateTaskForm />

        <Counter />

        <main className={styles.mainlandia}>

          {
            taskList.map(
              task => {
                return <Task key={task.id} isDone={task.isDone} name={task.name}/>
              }
            )
          }

        </main>
      </div>
    </div>
  )
}

export default App




