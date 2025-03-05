import React from "react"

function useLocalStorage (valueStorage , initialValue){
  
    const [item , setItem] = React.useState(initialValue)

    const [loading , setLoading] = React.useState(true)

    const [error , setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout( () => {
          try{
            const LocalStorageItem = localStorage.getItem(valueStorage)
      
            let parsedItem
        
            if (!LocalStorageItem){
              localStorage.setItem(valueStorage, JSON.stringify(initialValue))
              parsedItem = []
              setLoading(false)
            } else {
              parsedItem = JSON.parse(LocalStorageItem)
              setItem(parsedItem)
              setLoading(false)
            }
          }
          catch{
            setError(true)
          }
        }, 2000
        )
      }, []
    )
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(valueStorage, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {item , saveItem , loading, error}
  
  }

  export { useLocalStorage }