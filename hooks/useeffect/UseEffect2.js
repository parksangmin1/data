import { useEffect, useState } from "react";


function UseEffect2() {

    useEffect(() =>{
        const intervalWork = setInterval(() => {
            console.log('interval work : 작업중');
        }, 1000);
        
        
        //컴포넌트가 inmounting 될때 실행
        return() =>{
            clearInterval(intervalWork);
        };
    }, []);

    return(
        <div>
            <span>작업중 콘솔 확인</span>
        </div>
    )
}




export default UseEffect2;