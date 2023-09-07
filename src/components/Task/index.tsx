import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from './styles.module.css'

export interface ITaskProps {
  isDone: boolean;
  name:   string;
}

export function Task({ isDone, name } : ITaskProps) {
    return (
        <article className={styles.task}>
            <div>
              {
                isDone 
                  ? <CheckCircle size={20} color="#4EA8DE" /> 
                  : <Circle size={20} color="#4EA8DE" /> 
              }
              
              <strong> 
                {name}
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>
          </article>
    )
}