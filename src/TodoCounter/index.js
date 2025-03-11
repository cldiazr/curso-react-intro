import { TodoContext } from '../TodoContex'
import './TodoCounter.css'
import React from 'react'

function TodoCounter () {
  const {completedTodo,
    totalTodos
  } = React.useContext(TodoContext)
  

  const completeTodos = () => {
    if (totalTodos === completedTodo && totalTodos !== 0){
      return true
    }
    else 
      return false
  }

    return(
      <h1 className='TodoCounter'>
        {completeTodos() ?
          "Felicitaciones haz completado los Todos"
          :
          <>Haz completado 
          <span> { completedTodo } </span>
          de 
          <span> { totalTodos } </span></>
        }
      </h1>
    )
}

export { TodoCounter}