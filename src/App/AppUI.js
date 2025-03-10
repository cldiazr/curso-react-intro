import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';
import { TodoContext } from '../TodoContex';

function AppUI () {
    
    return (
        <React.Fragment>

            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
               {({
                completeTodo,
                totalTodos,
                searchedTodos,
                deleteTodo,
                loading,
                error}) => (
                     <TodoList>
                        {loading && (
                            <>
                            <TodosLoading/>
                            <TodosLoading/>
                            <TodosLoading/>
                            </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && totalTodos === 0) && <EmptyTodos/>}
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
               )}
            </TodoContext.Consumer>

            <CreateTodoButton/> 
        </React.Fragment>
    )
}

export { AppUI }