import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContex'

function TodoSearch () {
  const {
    search,
    setSerch} = React.useContext(TodoContext)
    
    return(
        <input 
          className="TodoSearch" 
          placeholder="Buscar TODO"
          value={search}
          onChange={(event) => {
            setSerch(event.target.value)
          }}
        />
    )
  }

export { TodoSearch}