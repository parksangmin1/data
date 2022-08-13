// useRef
import React, { useState, useRef } from "react";

function UseRef() {
 
    const [stateNumber, setStateNumber] = useState(0);
    const refNumber = useRef(0);
    // console.log(refNumber);
    let varNumber = 0;


    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1);
    }
    const updateRefNumber = () => {
        refNumber.current += 1;
        console.log('refNumber:' + refNumber.current);



        //내부적으로는 refNumber.current가 +1 기능 수행이 되고 있음
        //그러나, 업데이트 된 값이 화면에 출력 되지는 않음!
        //그 이유는 ref 수행 결과로 렌더링은 일어나지 않기 때문!
        //렌더링이 일어난다는 것은 프로그램 자체에 부담을 줄 수 있음
        //따라서!!! ref는 렌더링이 자주 일어나지 않아야 하는 경우에 사용
    }
    const showNumbers = () => {
        console.log('VarNumber :  ${varNumber} ---RefNumber : ${refNumber.current} ')
    }
    const updateVarNumber = () => {
        varNumber += 1;
        console.log('varNumber :' + varNumber )
    }

    return (
            <div>
                <div>
                    <p>StateNumber : {stateNumber}</p>
                    <button onClick={updateStateNumber}>StateNumber+1</button>
                </div>
                <div>
                    {/* 리엑트에서는 객체 자체를 출력하고자 할때, 에러발생!!! */}
                    {/* <p>StateNumber : {refNumber}</p> */}
                    <p>StateNumber : {refNumber.current}</p>
                    <button onClick={updateRefNumber}>StateNumber+1</button>
                </div>
                <div>
                    <p>StateNumber : {varNumber}</p>
                    <button onClick={updateVarNumber}>varNumber+1</button>
                </div>
                <div>
                    <hr />
                    <button onClick={showNumbers}>Show Ref/Var Number</button>
                </div>
            </div>
    );
};

export default UseRef;
