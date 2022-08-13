import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [lastname, setLastName] = useState('it');
    console.log(lastname);
    return(
        <div>
            <button onClick={() =>{setLastName('p-name')}}>p-btn</button>
            <Child lastName={lastname} setLastName={setLastName} />
        </div>
    )
}

export default Parent;
//// PropDrilling : 상위 컴포넌트에서 하위 컴포넌트로 props를 전달해주는 방법
// shared state 공유하기 : 상위컴포넌트에 있는 state를 하위 컴포넌트로 전달하여 데이터를 공유하는 방법
// state끌어올리기 : 하위컴포넌트에 있는 state를 상위 컴포넌트로 전달하여 데이터를 공유하는 방법
