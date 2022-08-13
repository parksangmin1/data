import React from "react";

function Comment({name, content}){
    //props는 read only
    // console.log(props.name);
    // props.name = "server";
    return (<div>
    <span>{name}</span>
    <span>---</span>
    <span>{content}</span> <br/>
    </div>);
}
// State 
// - 리액트의 컴포넌트 상태(데이터)
// - state도 js 객체
// ** State는 직접적인 값의 변경이 불가능함
// 단, setState라고 하는 함수를 이용하여 값을 변경 시킬 수 있음

// 리액트 컴포넌트의 상태주기
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

export default Comment