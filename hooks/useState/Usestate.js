import React, { useState } from "react";

function UseState() {
    
    // step01: import
    // step02: const[state, setState] = useState;
    
    const [number, setNumber] = UseState

    const onClickhandler = ('클릭 핸들러');
    //state 직접 값을 할당 할 수 없음! >> 어떻게 값을 바꿔 줘야 할까?? setNumber()
    //number += 1;
// 클릭 시, 한번에 2가 증가핟록 지정하고 싶다면??
setNumber(number + 1); // 1
setNumber(number + 2);  // 왜 3이 아니고 2냐 ? 맨마지막에 있는것만 랜더링함
    
    // setNumber 즉시 number에 대한 값의 변화가 일어나지 않음

    //클로저와 연관시켜 생각해 봅시다.
    // function outer() {

    //     function inner() {
    //         console.log(x); //0   
    //          }
    // }

    // let _value;
    // useState(initiaValue) {
    //     if(_value === undefined) {
    //         _value = initialValue;
    //     }
    //     const setState = (newValue) => {
    //         _value = newValue;
    //     }
    //     return [_value, setState]
    // }

    // setState 함수는 자신과 함께 반환이 된 변수를 변경 시키는 것이 아니라
    // 그 이후에 실행될 useState가 반환할 _value를 변경시키고, 컴포넌트 자체를
    //재렌더링시킨다, 즉, 변경된 값을 가져오는 함수는 setState가 아니라 useState다!


    //버튼 클릭 계속 진행 > 24까지는 변경
    //24 부터는 1 로 변경
    let newNumber;
    if(number >= 24) {
        newNumber = 1;
    } else {
        newNumber = number + 1;
    }
    setNumber(newNumber);




    return(
        <div>
            <span>NOW : {Number},</span>
            <button onClick={onClickhandler}>Click!</button>
        </div>
    );
}



export default UseState;