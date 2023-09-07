import { PlusCircle } from "phosphor-react";
import styles from './styles.module.css'

export function CreateTaskForm() {
    return (
        <form className={styles.navbar}>
          <input 
            name= 'search'
            placeholder= "Adicione uma nova tarefa"
          />
          <button type='submit'> 
            <p>Criar</p>
            <PlusCircle color="#F2F2F2" size={23}/>
          </button>
        </form>
    )
}
