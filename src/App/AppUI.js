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
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'
import { FooterApp } from '../FooterApp'

function AppUI () {
    
    const {completeTodo,
        totalTodos,
        searchedTodos,
        deleteTodo,
        editTodo,
        loading,
        error,
        openModal } = React.useContext(TodoContext)

    return (
        <React.Fragment>

            <TodoCounter/>
            <TodoSearch/>
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
                        onEdit = {() => editTodo(todo.text)}
                    />)
                )}
            </TodoList>   
            <CreateTodoButton/>  
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>)}
            <FooterApp/>
        </React.Fragment>
    )
}

export { AppUI }