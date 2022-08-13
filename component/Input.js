import React, { useRef, useState } from 'react';

function Input() {
    
    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
    });

    const nameInput = useRef();
// 비구조화 할당2
    const onChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.tartget;
        setInputs({
            [name]: value
            
        });
    }
    //비구조화 할당 1
    const{ name, lastName } = inputs;

    const onReset = () => {
        setInputs({
            name:''
           
    });
    
    nameInput.current.focus();
}


    return (
        <div>
            <div>
  <input
    name="name"
    placeholder="name"
    onChange={onChange}
    ref={nameInput}
    value={name}
  />
  <input
    name="lastname"
    placeholder="lastname"
    onChange={onChange}
 
    value={lastName}
  />
  <button onClick={onReset}>Reset</button>
  <div>
    <b>NAME: </b>{}
    {inputs.name}
    <b>LASTNAME: </b>{}
    {inputs.lastName}
  </div>
</div>

        </div>
    )
}




export default Input;