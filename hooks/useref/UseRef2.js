import React, { useState, useRef, useEffect } from "react";

function UseRef2() {
    const inputRef = useRef();
    
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);
    
    const showUsername = () => {
        alert(inputRef.current.value);
        // 잘못된 입력시 검증 로직 
        inputRef.current.value ='';
        inputRef.current.focus();
    }


    return (
        <div>
            <input ref={inputRef} type="text" placeholder="username"></input>
            <button onClick={showUsername}>Login</button>
        </div>
    )
}




export default UseRef2;