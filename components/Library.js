import React from "react";
import Book from "./Book";

//ver1
// function Library(props){

    const color = {
        color : "red"
    }

    // return (
    //     <div>
    //         <h1>{`책 이름 : ${props.bookName}`}</h1>
    //         <h1>{`책 가격 : ${props.bookPrice}`}</h1>
    //     </div>
    // )

    // ver2 비구조화 할당 : props 값이 많을 경우 비구조화 할당으로 필요한 값만 가져 올 수 있도록 함.
//     function Library({bookName, bookPrice}){
//
//     // 동일한 방식
//     // const {bookName, bookPrice} = props;
//
//         return( <div style={color}>
//         <h1>{`책 이름 : ${bookName}`}</h1>
//         <h1>{`책 가격 : ${bookPrice}`}</h1>
//     </div>
// )

// ver3, children?
// function Library({children}){
//     return (
//     );
// }

// ver4
function Library({bookName, bookPrice}) {

    // 동일한 방식
    // const {bookName, bookPrice} = props;

    return (<div style={color}>
        <Book bookName={"React 실습"} bookPrice={15000}></Book>
        <Book bookName={"React 실습2"} bookPrice={20000}></Book>
        <Book bookName={"React 실습3"} bookPrice={25000}></Book>
        </div>
    )
}

export default Library;