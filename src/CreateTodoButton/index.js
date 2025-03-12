import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContex'

function CreateTodoButton () {
  const {setOpenModal} = React.useContext(TodoContext)

    return(
       <button className="CreateTodoButton" 
       onClick={
        () => {
          setOpenModal(state => !state)
        }
       }> 
            +
       </button>
    )
  }

export { CreateTodoButton }