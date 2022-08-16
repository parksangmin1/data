import React, { useEffect, useRef, useState } from "react";  

function Fileinput({ name, value, onChange }) {
    
    const [ preView, setPreView ] = useState();
    const inputRef = useRef();
    console.log(useRef.current);

    const handleFileChange = (e) => {
        const { name, value, type } = e.target
        console.log(e.target.files[0]);
        const nextValue = e.target.files[0];
        console.log("this is name : ",name);
        onChange(name, nextValue)
    }
    const handleClearFile = () => {
        inputRef.current.value = '';
        onChange(name, null);
    }

    useEffect(() => {
        if(!value) return;
        const nextPreView = URL.createObjectURL(value);
        setPreView(nextPreView)

        return() => {
            setPreView();
            URL.revokeObjectURL(nextPreView);
        }
    }, [value]);

    return(
        <>
        {preView && <img src={preView} alt="preview"/>}
        <input
        type="file"
        name="test"
        onChange={handleFileChange}
        ref={inputRef}
        />
        <button
        type="button"
        onClick={handleClearFile}
        >x</button>
        </>
    );

}



export default Fileinput; 