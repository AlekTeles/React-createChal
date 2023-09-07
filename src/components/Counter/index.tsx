import styles from './styles.module.css'

export function Counter() {
    return (
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
    )
}