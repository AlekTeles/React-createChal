import {PlusCircle, Trash, Circle} from 'phosphor-react'
import styles from './App.module.css'
import toDoLogo from './assets/todo.svg'
import './global.css'
import { CreateTaskForm } from './components/CreateTaskForm'
import { Counter } from './components/Counter'
import { Task } from './components/Task'



function App() {

  return (
    <div>
      <div className={styles.header}>
        <img src={toDoLogo} alt="toDoLogo Logo"/>
      </div>  

      <div className={styles.wrapper}>

        <CreateTaskForm />

        <Counter />

        <main className={styles.mainlandia}>

          <Task/>
          <Task/>
          <Task/>
          <Task/>


        </main>
      </div>
    </div>
  )
}

export default App
