import React from 'react';

function TodoItem(props) {
    return (
        <li>
            <span
                onClick={ props.onComplete }
            >
                C
            </span>
            { props.text }
            <span
                onClick={ props.onDelete }
            >
                X
            </span>
        </li>
    );
}

export { TodoItem }