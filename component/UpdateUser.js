import React, { useEffect, useState } from "react";

function UpdateUser( {selectedUser, onUpdate} ) {
   
    const [value, setValue] = useState('');
   
    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
   }

   // 초기에 edit 버튼 클릭 시 ,
   // 이름정보 수정의 input value는 
   // 클릭한 객체의 이름이 출력되어야 한다.
   // 어떻게 해야 출력할 수 있을까?? 
   // (== 초기값 지정하는 방법! hint: useEffect)

   useEffect(() => {
        setValue(selectedUser.name);
   }, []);

   const onSubmit = (e) => {
    // console.log('UpdateUser - onSubmit;')
    //step01 : submit시 전달해야하는 데이터는 무엇일까??
    //1) 수정하고자 하는 정보 : value가 가지고 있음 > 가상의 db전달
    //2) 수정하고자 하는 대상(객체) 정보 : id(selectedUser.id) 
    onUpdate(selectedUser.id, value);
    e.preventDefault();    
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3>수정폼</h3>
                <input 
                type="text"
                 value={value}
                 onChange={onChange}
                 />
                <button type="submit">modify</button>
            </form>
        </div>
    )
        
    
}



export default UpdateUser;