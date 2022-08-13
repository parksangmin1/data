import React from 'react';

function Watch(){
    return (
        <div className={""}>
            <h1>Hello React</h1>
            <h3>NOW : {new Date().toLocaleTimeString()}</h3>
        </div>
    )
}

export default Watch;