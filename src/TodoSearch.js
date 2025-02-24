import React from 'react'
import './TodoSearch.css'

function TodoSearch () {

  const [search , setSerch] = React.useState('') 

  console.log('Escribiste:' + search)
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