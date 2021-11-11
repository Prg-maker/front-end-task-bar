import {ListMessage} from '../ListMessage'
import {CreateTask} from '../CreateTask'

import styles from './styles.module.scss'

export function Main(){
  return(
    <div className={styles.mainContentWrapper}>
      <ListMessage/>
      <CreateTask/>
    </div>
  )
}

