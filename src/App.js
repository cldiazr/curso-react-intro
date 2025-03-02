import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de Intro a React.s', completed: false},
  {text: 'Otra cosa', completed: true},
  {text: 'Otra cosa 2', completed: false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)

  const completedTodo = todos.filter( todo => !!todo.completed).length

  const totalTodos = todos.length

  const [search , setSerch] = React.useState('') 

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  const searchedTodos = todos.filter( todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = search.toLocaleLowerCase()

    return todoText.includes(searchText)
  })

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodo} total={totalTodos} />
      <TodoSearch 
        search = {search}
        setSerch = {setSerch}
      />
      
      <TodoList>
          {searchedTodos.map(todo=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed = {todo.completed}
              onComplete = {() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />)
          )}
      </TodoList>      

      <CreateTodoButton/> 
    </React.Fragment>
  );
}


export default App;
