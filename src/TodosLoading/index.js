import React from 'react'
import './TodosLoading.css'
//import './TodosLoading2.css'

function TodosLoading () {

    return(
      <div className='LoadingTodo-container'>
        
        <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'></p>
        <span className='LoadingTodo-deleteIcon'></span>
      
      </div>
    )
  }

export { TodosLoading }