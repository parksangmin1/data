import React, { useState } from "react";

function Controll() {
   const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(name);
        e.preventDefault();
    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Text :
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">submit</button>
            </form>
            <form onSubmit={handleSubmit}>
                <label>
                    Text :
                    <textarea type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
// Controll >>> 제어 컴포넌트 vs 비제어 컴포넌트
// 사용자가 입력한 값에 접근하고 제어 할 수 있도록 지정한 컴포넌트

//ex ; HTML, input, select, textarea. ...
//HTML 자체에서 state 관리가 됨 (내부에 state를 갖고 있음) >>> js로 접근이 쉽지 않음

// <input ><input/>


export default Controll; 