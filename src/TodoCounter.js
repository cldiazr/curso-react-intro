import './TodoCounter.css'
import React from 'react'

function TodoCounter ({ total, completed} ) {
  const completedTodos = total === completed

    return(
      <h1 className='TodoCounter'>
        {completedTodos ?
          "Felicitaciones haz completado los Todos"
          :
          <>Haz completado 
          <span>{completed}</span>
          de 
          <span>{total}</span></>
        }
      </h1>
    )
  }

export { TodoCounter}