import React from 'react';
import styled from 'styled-components';

import { results$ } from './Observables/Store';
import Header from './Header';
import { percentage } from './utilities/Utils';



const Container = styled.div`
  display: flex;
  justify-content: center;
  
`
function Stats() {

  return(
    <>
      <Header />
      <Container>
        <div tabIndex='0' role='textbox' className='stateContainer'>
          <h3>GAMES PLAYED</h3>
          <p>{results$.value.gamesPlayed}</p>
          <h3>CORRECT ANSWERS</h3>
          <p>{results$.value.correctAnswers}</p>
          <h3>INCORRECT ANSWERS</h3>
          <p>{results$.value.incorrectAnswers}</p>
          <h3>CORRECT PRERCENTAGE</h3>
          <p>{percentage(results$.value)}%</p>
        </div>
      </Container>
    </>
  )
}

export default Stats;