import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Header from './Header';

const Container = styled.main`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    cursor: pointer;
    border: none;
    height: 36px;
    width: 100px;
    border-radius: 4px;
    background-color: #713D6E;
    color: #ffffff;
    outline-color: red;
    padding-left: 16px;
    padding-right: 16px;
  }
`

function Main(){
  

  return(
    <>
      <Header />
      <Container>
        <h2>Trivia</h2>
        <Link tabIndex='-1' to='quiz'><button>Start Quiz!</button></Link>
      </Container>
    </>
  )
}

export default Main;