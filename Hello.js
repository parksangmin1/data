import React from 'react';

//1. hellojs라는 컴포넌트 생성
//return 반드시 필요
function Hello(){
    return (
        <div>
    <h1> hello React</h1>
            <div className={"test"}>
            </div>
        </div>
    );
}
const element0 = {
    type : `h1`,
    props : { // 컴포넌트가 가지고 있는 특성
        className : "title",
        children : "Hello, React"
    }
}

//jsx
const element = (
    // <h1 className={"title"}>Hello, react</h1>
    <button className="btn-success">
        <b>
            Hello, React!
        </b>
    </button>
)

//==
const element1 = React.createElement (
    'h1',
    { className : "title" },
    'Hello. React'
)

const elementA = (
    <button className="btn-success">
        <b>
            Hello, React
        </b>
    </button>
);

const elementB = {
    type: "button",
    props: {
        className: "btn-success",
        children: {
            type: "b",
            props: {
                children: "Hello, React"
            }
        }
    }
}
//2.hellojs 컴포넌트를 모듈화
export default Hello;

