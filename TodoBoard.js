import React from 'react'
import TodoItem from './TodoItem';
function TodoBoard(props) {
   
    return(
        <div>
            <h1>Todo List</h1>
           <div>{props.todoList.map((item)=><TodoItem item={item}/> )}<button/></div>
           
        </div>
    )
}






export default TodoBoard;