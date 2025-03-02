import React from 'react'
import './TodoSearch.css'

function TodoSearch ({
  search,
  setSerch
}) {

    return(
        <input 
          className="TodoSearch" 
          placeholder="Cortar cebolla"
          value={search}
          onChange={(event) => {
            setSerch(event.target.value)
          }}
        />
    )
  }

export { TodoSearch}