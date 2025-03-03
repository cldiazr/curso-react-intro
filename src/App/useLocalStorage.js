import React from "react"

function useLocalStorage (valueStorage , initialValue){

    const LocalStorageItem = localStorage.getItem(valueStorage)
  
    let parsedItem
  
    if (!LocalStorageItem){
      localStorage.setItem(valueStorage, JSON.stringify(initialValue))
      parsedItem = []
    } else {
      parsedItem = JSON.parse(LocalStorageItem)
    }
  
    const [item , setItem] = React.useState(parsedItem)
  
    const saveItem = (newItem) => {
      localStorage.setItem(valueStorage, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return [item , saveItem]
  
  }

  export { useLocalStorage }