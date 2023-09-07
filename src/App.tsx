import {PlusCircle, Trash, Circle} from 'phosphor-react'
import styles from './App.module.css'
import toDoLogo from './assets/todo.svg'
import './global.css'



function App() {

  return (
    <div>
      <div className={styles.header}>
        <img src={toDoLogo} alt="toDoLogo Logo"/>
      </div>  

      <div className={styles.wrapper}>

        <form className={styles.navbar}>
          <input 
            name= 'search'
            placeholder= "Adicione uma nova tarefa"
          />
          <button type='submit'> 
            <p>Criar</p>
            <PlusCircle 
            color="#F2F2F2" 
            size={23}/>
          </button>
        </form>

        <div className={styles.counter}>

          <div className={styles.taskcreated}>
            <p>Tarefas criadas </p>
            <span>5</span>
          </div>   
        
          <div className={styles.taskdone}>
            <p>Tarefas concluidas </p>
            <span>2 de 5</span>
          </div>  

        </div>

        <main className={styles.mainlandia}>

          <article className={styles.task}>
            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong>
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>

          </article>

          <article className={styles.task}>
            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong>
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>

          </article>

          <article className={styles.task}>

            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong>
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>

          </article>

          <article className={styles.task}>

            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong>
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>

          </article>

          <article className={styles.task}>

            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong>
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>

          </article>

        </main>
      </div>
    </div>
  )
}

export default App
