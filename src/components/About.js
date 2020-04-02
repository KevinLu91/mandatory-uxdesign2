import React from 'react';
import styled from 'styled-components';

import Header from "./Header";

const Container = styled.div`
  display: flex;
  justify-content: center;

  .aboutContainer{
    width: 30%;
  }
`

function About() {
  return(
    <>
      <Header />
      <Container>
        <div role='textbox' tabIndex='0' className='aboutContainer'>
          <h3>About this App</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
          id est laborum.
          </p>
          <p>
          Auctor elit sed vulputate mi sit amet mauris commodo quis. 
          Accumsan lacus vel facilisis volutpat est velit egestas. 
          Cursus risus at ultrices mi tempus imperdiet. Augue eget arcu dictum varius duis at.
          Posuere ac ut consequat semper. Vel quam elementum pulvinar etiam non quam 
          lacus suspendisse faucibus. Eget arcu dictum varius duis. Nulla facilisi cras
          fermentum odio eu. Tempus egestas sed sed risus. A lacus vestibulum sed arcu 
          non odio euismod lacinia. Sed lectus vestibulum mattis ullamcorper velit sed 
          ullamcorper morbi. Et leo duis ut diam quam.
          </p>
        </div>
      </Container>
    </>
  )
}

export default About;