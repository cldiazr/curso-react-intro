import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}){
    const { item :todos, 
        saveItem : saveTodos,
        loading,
        error } = useLocalStorage('TODOS_V1', [])
    
      const completedTodo = todos.filter( todo => !!todo.completed).length

      const totalTodos = todos.length
    
      const [search , setSerch] = React.useState('') 
    
      const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }
    
      const searchedTodos = todos.filter( todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = search.toLocaleLowerCase()
    
        return todoText.includes(searchText)
      })

    return(
        <TodoContext.Provider value={{
            completeTodo,
            totalTodos,
            searchedTodos,
            setSerch,
            completedTodo,
            search,
            deleteTodo,
            loading,
            error
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}