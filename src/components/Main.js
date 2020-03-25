import React, { useState} from 'react';
import styled from 'styled-components'
import { Redirect } from "react-router-dom";

import Header from "./Header";

const Container = styled.main`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button{
    cursor: pointer;
    width: 100px;
  }
`

function Main(){
  const [gameState, setGameState] = useState(false);

  function handleGame() {
    setGameState(!gameState);
    console.log(gameState)
  }

  if(gameState){
    return <Redirect to='/quiz' />
  }
  
  return(
    <>
      <Header />
      <Container>
        <h2>Trivia</h2>
        <button onClick={handleGame}>Start Quiz!</button>
      </Container>
    </>
  )
}

export default Main;