import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage'

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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

  return (
    <AppUI
    completeTodo = {completeTodo}
    totalTodos = {totalTodos}
    searchedTodos = {searchedTodos}
    setSerch = {setSerch}
    completedTodo = {completedTodo}
    search = {search}
    deleteTodo = {deleteTodo}
    />
  )
    
}


export default App;
