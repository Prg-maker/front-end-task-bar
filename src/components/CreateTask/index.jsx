import { useState } from 'react'
import styles from './styles.module.scss'

import {api} from '../../services/api'

export function CreateTask(){

  const [message , setMessage] = useState('')
  const [title , setTitle] = useState('')

 function handleCreateTask(event){
  event.preventDefault()

  
  if(!message.trim()){
    return
  }

  api.post('/createMessage' , {  message , title})
  
  setMessage('')
  setTitle('')
 }

  return(
    <div className={styles.createTaskContentWrapper}>
      <h2>Cria a sua tarefa</h2>
      <form  onSubmit={handleCreateTask}>
       
        <input
          className={styles.inputCreate} 
          name="message" 
          id="message" 
          placeholder='título da sua tarefa'
          onChange={event => setMessage(event.target.value)}
          value={message}
        />
         <textarea 
          type="text" 
          placeholder="tasks"
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
        <button className={styles.buttonCreate}>Criar</button>
      </form>
    </div>
  )
}