import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContex' 

function TodoForm () {
    const {
        setOpenModal,
        addTodo,
        setOpenModalEdit,
        openModalEdit,
        valueTodoEdit,
        setValueTodoEdit,
        editTodo
    } = React.useContext(TodoContext)

    const [newTodoValue , setNewTodoValue] = React.useState(valueTodoEdit)

    const onSubmit = (event) => {
        event.preventDefault()

        if (!openModalEdit) {
            addTodo(newTodoValue)
            setOpenModal(false)
            setValueTodoEdit('')
        } else {
            editTodo(newTodoValue)
            setValueTodoEdit('')
        }
    }

    const onCancel = (event) => {
        event.preventDefault()
        setOpenModal(false)
        setOpenModalEdit(false)
        setValueTodoEdit('')
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={ onSubmit}>
            { !openModalEdit ? 
            <label>Escribe tu nuevo TODO</label>:
            <label>Edita el TODO</label>
            }
            <textarea 
                placeholder="Escribe TODO pendiente..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                > Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >{!openModalEdit ? 'Agregar' : 'Editar'}</button>
            </div>
        </form>
    )
}

export { TodoForm }