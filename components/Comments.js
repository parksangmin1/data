import React, {forwardRef} from "react";
import Comment from "./Comment";

const comments1 = [
    {
        name: "it",
        content: "열공해라"
    },
    {
        name: "dev",
        content: "잘할거다"
    },
    {
        name: "friend",
        content: "놀자"
    }
];


function Comments(props){

        return (<div>
            {
                comments1.map(comment => {
                    return <Comment name={comment.name} content={comment.content}></Comment>;
                })
            }
        </div>
        );


    // let comments = [];
    //
    // for (let i = 0; i < 3; i++){
    //     comments.push(<Comment name={comments1[i].name} content={comments1[i].content}></Comment>);
    // }
    // return comments;

    // let comments = [];
    //
    // for (let i = 0; i < 3; i++){
    //     comments.push(<Comment name={props.name[i]} content={props.content[i]}></Comment>);
    // }
    // return comments;

    // return (
    //     <div>
    //         <Comment></Comment>
    //         <Comment></Comment>
    //         <Comment></Comment>
    //     </div>
    // );
    
}

export default Comments
