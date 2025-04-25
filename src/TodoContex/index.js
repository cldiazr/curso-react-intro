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

      const [openModal , setOpenModal] = React.useState(false) 

      const [openModalEdit , setOpenModalEdit] = React.useState(false) 

      const [valueTodoEdit , setValueTodoEdit] = React.useState('')
    
      const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
      }

      const editTodo = (text) => {
        if (openModalEdit) {
          const newTodos = [...todos]
          const todoIndex = newTodos.findIndex(
            (todo) => todo.text === valueTodoEdit
          )
          newTodos[todoIndex].text = text
          saveTodos(newTodos)
        } else setValueTodoEdit(text)
        setOpenModal(state => !state)
        setOpenModalEdit(state => !state)
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
      
      const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos)
      }

    return(
        <TodoContext.Provider value={{
            completeTodo,
            totalTodos,
            searchedTodos,
            setSerch,
            completedTodo,
            search,
            deleteTodo,
            editTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
            openModalEdit,
            setOpenModalEdit,
            valueTodoEdit,
            setValueTodoEdit
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}