import './TodoCounter.css'
import React from 'react'

function TodoCounter ({ total, completed} ) {
  const completedTodos = () => {
    if (total === completed && total != 0){
      return true
    }
    else 
      return false
  }

    return(
      <h1 className='TodoCounter'>
        {completedTodos() ?
          "Felicitaciones haz completado los Todos"
          :
          <>Haz completado 
          <span> { completed } </span>
          de 
          <span> { total } </span></>
        }
      </h1>
    )
}

export { TodoCounter}