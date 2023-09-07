import { Circle, Trash } from "phosphor-react";
import styles from './styles.module.css'

export function Task() {
    return (
        <article className={styles.task}>
            <div>
              <Circle size={20} color="#4EA8DE" />

              <strong> 
                turpis turpis semper. Duis vel sed fames integer.
              </strong>

            </div>
                
            <Trash size={24} color="#7F7F7F"/>
          </article>
    )
}