import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';


function AppUI ({
    completeTodo,
    totalTodos,
    searchedTodos,
    setSerch,
    completedTodo,
    search,
    deleteTodo,
    loading,
    error
}) {
    
    return (
        <React.Fragment>

            <TodoCounter completed={completedTodo} total={totalTodos} />
            <TodoSearch 
                search = {search}
                setSerch = {setSerch}
            />
            
            <TodoList>
                {loading && <p>Estamos Cargando...</p>}
                {error && <p>Estamos presentando un error</p>}
                {(!loading && totalTodos === 0) && <p>No tienes TODOS creados</p>}
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
    )
}

export { AppUI }