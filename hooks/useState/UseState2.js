import React, { useState } from "react";

const fetchAPI = () => {
    return ['권모님', '경욱님'];
}


function UseState2() {
    
    const [names, setNumbers] = useState(fetchAPI());
    const [inputValue, setInputValue] = useState('');
// step 01 : 기존의 데이터 map 출력 
// step 02 : input에 기입하는 데이터 트래킹 

    const onChangeHandler = (event) => {
            // console.log('input 변경')
            // console.log(event.target.value);
            setInputValue(event.target.value);
    }
    const onClickInputValueHandler = () => {
        //console.log("클릭 확인")
        // setNames(names.push(inputValue));
        // names.push(inputValue);
        // console.log(names);
        // set함수 내부에는 이전의 상태값을 가져올 수 있는 변수 존재 
        setNumbers((prev) => {
            // console.log(previousValue);
            return [...prev, inputValue];
        });

    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={onClickInputValueHandler}>Click!</button>
            {names.map((name, index) => {
                // console.log(name);
                return <p key={index}>{name}</p>;
            })}
        </div>
    );
}




export default UseState2;
