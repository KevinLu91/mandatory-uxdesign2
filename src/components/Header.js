import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
` 

function Header() {
  return(
    <Container>
      <h1>Quiz Master</h1>
    </Container>
  )
}

export default Header;

