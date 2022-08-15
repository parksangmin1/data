import React from 'react'
import TodoBoard from './TodoBoard'

function TodoItem(props) {

    return(
        <div className='todo-item'>
            {props.item}
        </div>
    )
}

export default TodoItem