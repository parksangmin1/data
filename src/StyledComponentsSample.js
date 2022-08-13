import React from 'react';
import styled, {keyframes} from 'styled-components';
import { MdCheck } from 'react-icons/md';
function StyledComponentsSample() {
    // Create a Title component that'll render an <h1> tag with some styles
    const rotate = keyframes`
  from {
    transform: rotate(240deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
  
    return(
        <div>
       {/* <Rotate>&lt; 💅🏾 &gt;</Rotate> */}
        <MdCheck />
        </div>
    )
}

 

export default StyledComponentsSample;