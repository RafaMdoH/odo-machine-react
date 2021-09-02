import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    } 

    return (
        <form onSubmit={onSubmit}>
            <label>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Cortar la cebolla para el almuerzo"
                />
            </label>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }