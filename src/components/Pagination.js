import React from 'react';
import styled from 'styled-components';

const PageUL = styled.ul`
    float: left;
    list-style: none;
    text-align: center;
    border: 1px solid black;
`;

const PageLI = styled.li`
display: inline-block;
font-size: 20px;
padding: 5px;
&:hover {
    color: gold;
    cursor: pointer;
}
&:focus {
    color: blue;
}
background:blue;
color: white;
font-weight:700;
border-radius: 5px;
`;

const Pagespan = styled.span`

`;

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        
    }


    
    
    
    
    return(
        <div>
            <nav>
                <PageUL>
                    {pageNumbers.map(pageNumber =>(
                        <PageLI key={pageNumber}>
                            <Pagespan onClick={()=>paginate(pageNumber)}>{pageNumber}</Pagespan>
                        </PageLI>
                    ))}
                </PageUL>
            </nav>
        </div>
    )
}



export default Pagination;