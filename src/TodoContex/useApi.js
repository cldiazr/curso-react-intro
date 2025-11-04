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
    
  
    const saveItem = async (newItem, todo) => {
      try{

        const respuesta = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo)
        });

        if (respuesta.ok){

          todo = await respuesta.json();
          newItem.push(todo)
          setItem(newItem)

        } else {
          console.error('Falló al guardar la tarea en la API');
        }

      } catch{
        console.error('Error de red:', error);
      }

    }

    const editItem = async (newItem, id, editItem) => {

      try {

        const respuesta = await fetch(`${API_URL}/${id}`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editItem)
        });

        if (respuesta.ok){

          setItem(newItem)

        } else {
          console.error('Falló al editar la tarea en la API');
        }

      } catch {
        console.error('Error de red:', error);
      }
        
    }

    const deleteItem = async function borrarTarea(id, newItem) {

      try{

        const respuesta = await fetch(`${API_URL}/${id}`, {
          method: 'DELETE'
        });

        if (respuesta.ok){

          setItem(newItem)

        } else {
          console.error('Falló al eliminar la tarea en la API');
        }

      } catch {
        console.error('Error de red:', error);
      }
    }
  
    return {item , saveItem , editItem , deleteItem , loading, error}
  
  }

  export { useLocalStorage }