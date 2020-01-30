import React from 'react';
import List from './List';

function Todo({what}) {
    const whatActions = `You have to: ${what}.`
    return (
        <div>
            <List text={whatActions} />
        </div>
    );
}

export default Todo;