import styles from './styles.module.scss'

export function CreateTask(){
  return(
    <div className={styles.createTaskContentWrapper}>
      <h2>Cria a sua tarefa</h2>
      <form >
        <input 
          type="text" 
          placeholder="título da sua tarefa"
          className={styles.inputCreate} 
        />
        <textarea 
          name="message" 
          id="message" 
          placeholder='digite..'
        ></textarea>
        <button className={styles.buttonCreate}>Criar</button>
      </form>
    </div>
  )
}