import React, { useState } from 'react';

import TodoBoard from './Component/TodoBoard';
import TodoItem from './Component/TodoItem';
import './App.css';

function App() {


   
  
   

    const [inputValue,setInputValue] = useState('');
    const [todoList,setTodoList] = useState([])
    const addItem = (e) =>{
      setTodoList([...todoList,inputValue])
      console.log(e.target.value)
    }
   

  
  return (
    <div>
    <h2>Todo List</h2>
     <input type="text" onChange={(event)=>setInputValue(event.target.value)}placeholder='Todo Things'></input>
       <button onClick={addItem}>추가</button>
       <TodoBoard todoList={todoList}/>
       <TodoItem/>
       
       
    </div>
    

   

  );
}

export default App;
