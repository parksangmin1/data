import React, { useEffect, useState } from "react";

function UseEffect() {
        const [number, setNumber] = useState(0);
        const [text, setText] = useState('');
        const updateNumber = () => {
            setNumber(number + 1);
        }



        const inputValueChange = (e) => {
            setText(e.target.value);
        }

        // 마운팅 이후, 딱 1번만 실행 ==> 빈 배열값(dependency array) 파라미터로 전달 
        useEffect(() => {
            console.log('useEffect 출력')
        },[]);
        
        //
        useEffect(() => {
            console.log('Number 변경 체크')
        },[number]);

        useEffect(() => {
            console.log('text변경 체크')
        },[text, number]);
    
    return(
        <>
        <div>
    <button onClick={updateNumber}>+1</button>
    <span>Current Number {number}</span>
</div>
<div>
    <input type="text" onChange={inputValueChange}></input>
        <div></div>
</div>
        </>
    )
}
// useEffect
// - 구조
// // 렌더링 될때 마다 실행
// useEffect(() => {
//   수행코드
// });

//   // 특정 값이 변할때만 실행
// useEffect(() => {
//   수행코드
// }, [변수]);

//   // 마운팅시 딱 한번만 실행
// useEffect(() => {
//   수행코드
// }, []);

// // 언마운팅시 등록된 기능을 해제할때 실행
// useEffect(() => {
//   수행코드;

// return () => {
//     종료하고자 하는 수행코드;
// }
// }, []);



export default UseEffect;