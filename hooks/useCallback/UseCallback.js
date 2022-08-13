import React, { useCallback, useEffect, useState } from "react";

function UseCallback() {
    const [number, setNumber] = useState(0);
    //console.log(number);
    // const showNumber = () => {
    //     console.log('Show Number : ${number}');
    // }

    //useEffect에 showNumber를 추적하게 지정함
    //화살표로 숫자를 변경시, showNumber 함수는 변경되지 않았음에도
    //useEffect가 계속해서 실행됨
    //그 이유는??
    
    //number의 상태가 계속 갱신되고, UseCallback 컴포넌트는 렌더링이 실행되고
    // 그 결과, 컴포넌트 내부에 있는 모든 변수 , 함수가 재실행되고
    //함수 혹은 객체는 실행될때마다 새로운 주소값을 갖게 됨
    //이는 다른 객체로 인식 되어 useEffect에서는 계속해서
    //showNumber 함수가 변경되었다고 판단하게 됨.
    // 그 결과 useEffect가 계속 실행됨.
    
    //useCallback 사용
    const showNumber = useCallback(() => {
        console.log('Show Number : $(number)');
   }, [number]);
    
    useEffect(() => {
        console.log('변경 상태 확인');
    }, [showNumber]);


const [toggle, setToggle] = useState(true);

    return(
        <div>
            
            <input
            type="number"
            onChange={(e) => {setNumber(e.target.value)}} />
            <br />
            <button>Show Number</button>
            <br />
            <button onClick={() => {setToggle(!toggle)}}>{toggle.toString()}</button>
        </div>
    )
    }

    /* // useMemo/Callback
	- 주의해서 사용해야 함 : 메모리를 계속해서 사용하기 때문에 불필요한 값이나 함수가 메모리를 차지 하지 않도록 지정해야 함! */

// 훅의 규칙 Hook's R
//1. 함수형 컴포넌트에서만 사용 가능하다.
//2. 최상위 레벨에서만(조건/반복x) 사용 가능하다.



export default UseCallback;