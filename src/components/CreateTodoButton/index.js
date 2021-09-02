import React from 'react';

function CreateTodoButton({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(true);
    }
    
    return (
        <button 
            onClick={ onClickButton }
        >
            +
        </button>
    );
}

export { CreateTodoButton }