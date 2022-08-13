import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
const Layout = styled.div`
    max-width: 700px;
    flex-direction:column;
    margin:30px;
    display: flex;

    `;
function Posts() {
   const [posts, setPosts] = useState([]);   
    // 현재 페이지 정보
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
   
    //const indexOffirst =  ??
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast)
        return currentPosts;
    }

//    console.log(currentPage(posts));
let results = currentPosts(posts);
   useEffect(() =>{
        // console.log([1, 2, 3, 4, 5].splice(1,3));  
        // [1, 2, 3, 4, 5].splice(1, 3).map(num => console.log(num));
    
    fetch(' https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
   }, []);
    return (
      <Layout>
        {/* <select>
            <option>10</option>
            <option>20</option>
            <option>50</option>
        </select> */}

         {results.map(post => (
            <div key={post.id}>
                <h3>{post.id} - {post.title}</h3>
                <p>{post.body}</p>
            </div>
         ))}
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
            ></Pagination>
      </Layout>  
    );
}


export default Posts; 