import logo from './logo.svg';
import './App.css';
import Input from './component/Input';
import InputUser from './component/InputUser';
import React, {useState, useRef, useEffect } from 'react';
import ListUser from './component/ListUser';
import data from './db/mock.json'; 
import Storage from './component/Storage';
import axios from 'axios';
import { axiosData, fetchData } from './api/getUsers';
import UpdateUser from './component/UpdateUser';
function App() {
 // data
useEffect(() => {
  // fetchData
  const data = fetchData();
  data
    .then(response => response.json())
    .then(data => setUsers(data))

  // axiosData
  // const data = axiosData();
  // data
  //   .then(response => setUsers(response.data))
}, []);
 

  const [inputs, setInputs] = useState({
    id: 0,
    name: '',
    lastName: ''
});

const nameInput = useRef();

const { name, lastName } = inputs;
// const nameInput = useRef();

// inuts 객체들을 관리 할 수 있는 배열 객체

// const data = [
  // {
  //   id: 0,
  //   name: 'it',
  //   lastName:'it',

  // },
  // {
  //   id: 1,
  //   name: 'dev',
  //   lastName: 'dev'
  // }
// ];
const [users, setUsers] = useState(data);

const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
        ...inputs,
      [name]: value
    });
}

const nextId = useRef(3);
// const [nextId, setNextId] = useState(3);



const onAdd = () => {
  console.log("onAdd : "+ name, lastName);
  const newUser = {
    id: nextId,
    name:name,
    lastName:lastName
  };

  //새로운 객체를 기존 데이터에 추가
  // setUsers(users.push(newUser));
  setUsers(users.concat(newUser));

  // let a = [1, 2, 3];
  // a.push(4); // a = [1, 2, 3, 4] // 원본배열
  // // 실제 데이터는 추가하되, 원본에는 변경사항이 없는 방법으로 데이터를 추가해야함!!
  
  // a.concat(4) // a = [1, 2, 3]

  nextId.current += 1;
  
  // 기존 inputs을 모두 초기화 하는 로직 
  setInputs({
    name:'',
    lastName:''
  });
}

//삭제 
const onDelete = (id) => {
  //삭제 > setUsers(삭제된 객체 정보)
  //삭제로직 구현?!!
  // users 객체에서 내가 클릭한 객체 정보를 활용
  // 만약에 내가 클릭한 객체의 정보가 맞다면 
  // users 객체에서 삭제(배열에서 해당 객체를 삭제) 
  //삭제 후 최종적으로 users 상태를 갱신 
  
  //어떤 조건으로 찾을건지? find, findIndex 
  //splice >> return
  
  // setUsers();
// console.log(id);
// console.log(users.find((user) =>{
// console.log(user);
// if(user.id === id){
//   users.splice(,1);
// }
// }));
// const findUser = users.find((user) =>{
//   return users.id === id;
// });
// const index = users.indexOf(findUser);
// setUsers(users.splice(index, 1));

setUsers((users.filter((user)=>(user.id !== id
  ))));
}


// const [nextId, setNextId]


// 수정 = 상태관리 
const [updateToggle, setUpdateToggle] = useState(false);

// 수정 = toggle 상태를 변경 함수
const onUpdateToggle = () => {
console.log('App.js : update toggle');
setUpdateToggle(!updateToggle);
}

// 수정 - deit 버튼 클릭시 UpdateUser에 클릭한 user 정보(이름)를 관리하는 state
const [selectedUser, setselectedUser] = useState(null);
// 수정 - 선택한 user의 상태를 변경 함수 
const onSelectUser = (user) => {
  console.log(user);
  setselectedUser(user);
}

//수정 - 실제 수정이 일어나는 기능
  const onUpdate = (userId,newName) => {
    // console.log('App : onUpdate');
    console.log(`App : onUpdate - ${userId} - ${newName}`);
    setUpdateToggle(!updateToggle);
    // 실제 수정 로직
    // 1) 이름 정보 수정 (UpdateUser) - 화면에서 사라지게 만들기
    // 2) 업데이트 
    // 2-1)현재 전체의 출력 데이터가 저장되는 객체는 ??? users
    // 2-2)전체 출력 객체에서 파라미터로 넘겨져온 userId와
    //  전체 출력 객체 내부에 있는 특정 객체의 id값이 같은지 조건
    //      배열에서 특정 조건 --- 반복(map) + 조건(삼항 연산자) ==> userId === id ?
    //  {newName들어간 객체} : {본인의 객체} 
    //2-3 ) 위의 조건으로 두 값이 같다면 특정 객체의 name이
    //      파라미터로 넘겨져온 newName으로 대체가 된다.
    //2-4 대체가 된 객체의 정보를 setUsers로 업데이트 한다.

      users.map((user)=> {
      
// ver1
// setUsers(
//   users.map((user) => 
//     (userId === user.id ? {...user, name:newName} : user)
//   )
// )


// ver2
// ver2
// //users.map((user) => {
//   if(user.id == userId){
//     user.name = newName;  
//   }
// });
users.map((user) => {
  if(user.id == userId){
    user.name = newName;  
  }
});



      if(userId === user.id ? {...user, name} : user) {
      user.name = newName
      }
      
    });
    
    setUsers(); 
    }
  

  return (
    //step 1
    // <Input />
  
    //step 2 
    <>
     <InputUser 
    name={name}
    lastName={lastName}
    onChange={onChange}
    onAdd={onAdd}
    
    />

    <ListUser users={users}
     onDelete={onDelete} 
     onUpdateToggle={onUpdateToggle}
     onSelectUser={onSelectUser}
     /> 
    {updateToggle && <UpdateUser selectedUser={selectedUser} onUpdate={onUpdate}/>}
    
    {/* <Storage /> */}
    </>
  );
}

export default App;
