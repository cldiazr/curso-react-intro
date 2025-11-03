import React from "react"

function useLocalStorage (){
  
    const [item , setItem] = React.useState([])

    const [loading , setLoading] = React.useState(true)

    const [error , setError] = React.useState(false)

    const API_URL = 'https://6907ef24b49bea95fbf1eb49.mockapi.io/tareapi/pendientes'


    async function obtenerTareas() {
        const respuesta = await fetch(API_URL);
        const ApiItems = await respuesta.json();
        setItem(ApiItems)
    }
    
    React.useEffect(() => {
        setTimeout( () => {
          try{

            obtenerTareas()
            setLoading(false)
              
          }
          catch{
            setError(true)
          }
        }, 2000
        ) 
      }, []
    )
    
  
    const saveItem = async (newItem) => {

        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        
        setItem(newItem)
    }
  
    return {item , saveItem , loading, error}
  
  }

  export { useLocalStorage }