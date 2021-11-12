import styles from './styles.module.scss'
import {v4 as uuid}  from 'uuid'
import {api} from '../../services/api'
import { useEffect, useState } from 'react'


import io from 'socket.io-client'

const socket =  io('http://localhost:4000/')





export function ListMessage(){


  const [messages , setMessages] = useState([])
  const messageQueue = []

  useEffect(() => {
    api.get('/listMessage').then(response => {
      console.log(response.data)
      setMessages(response.data)
    })
  } , [])

  
  useEffect(() => {
    socket.on('new_message' , (newMessage) => {

      messageQueue.push(newMessage)
      if(messageQueue.length > 0){
        setMessages(prevState => [
          messageQueue[0],
          ...prevState,

        ]) 
      }
    })
  },[])
  

 
  function handleDeleteMessage(id){
    api.post('/deleteMessage' , {id})

  }

  return(
    <div className={styles.listMessageContentWrapper}>
      <h2 className={styles.textCenter}>To do</h2>

      <div className={styles.listMessage}>
        <ul>

          {messages.map(message=> {
            return(
              <li key={message.id} className={styles.message}>

                <a href={message.id}>
                  <button 
                    onClick={() => handleDeleteMessage(message.id)} 
                    className={styles.button}>delete
                  </button>
                </a>

                <h4 className={styles.title}>{message.title}</h4>
                <p className={styles.text}>{message.message}</p>
              </li>
            )
          })}

      

      

        
       
        </ul>
      </div>
    </div>
  )
}