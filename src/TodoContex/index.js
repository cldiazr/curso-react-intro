import React from "react";
import { useLocalStorage } from "./useApi";

const TodoContext = React.createContext()

function TodoProvider ({children}){
    const { item :todos, 
        saveItem : saveTodos,
        editItem : editTodos,
        loading,
        error } = useLocalStorage()
    
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
        const id = newTodos[todoIndex].id
        const updateComplete = {completed : newTodos[todoIndex].completed}
        editTodos(newTodos, id, updateComplete)
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
        let todo = {text, completed: false}
        saveTodos(newTodos, todo)
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