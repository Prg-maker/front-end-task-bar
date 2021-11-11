import styles from './styles.module.scss'

export function ListMessage(){
  return(
    <div className={styles.listMessageContentWrapper}>
      <h2 className={styles.textCenter}>To do</h2>

      <div className={styles.listMessage}>
        <ul>
          <li className={styles.message}>
            <button className={styles.button} >delete</button>
            <h4 className={styles.title}>title</h4>
            <p className={styles.text}>texto</p>
          </li>

          <li className={styles.message}>
            <button className={styles.button} >delete</button>
            <h4 className={styles.title}>title</h4>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem eligendi animi eaque ipsa nesciunt enim ratione quod unde asperiores! Unde esse totam repellendus necessitatibus quibusdam consequatur velit maiores animi.</p>
          </li>


        
       
        </ul>
      </div>
    </div>
  )
}