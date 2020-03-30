import React from 'react';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { results$, updateResults } from '../Observables/Store';


const Container = styled.div`

  .dialog{
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    width: 60vh;
    height: 50vh;
    border-radius: 5%;
  }

  .dialog_button_container{
    display: flex;
    justify-content:space-between;
    width: 50%; 
  }

  .dialogBtn{
    border: none;
    height: 36px;
    min-width: 64px;
    border-radius: 4px;
    background-color: #713D6E;
    color: #ffffff;
    outline-color: red;
    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
  }
  
`

function DialogModal({countScore, dialog, setDialog, setQuestions}) {
  
  function updateQuestions(setQuestions){
    axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple')
      .then((res) => {
        setQuestions(res.data.results);
        console.log(res.data.results)
      })
      .catch((error) => {
        console.log(error);
     })
  }

  function handleCloseModal() {
    setDialog(!dialog);
    let newResults = {...results$.value};
    newResults.gamesPlayed ++;
    newResults.correctAnswers += countScore;
    newResults.incorrectAnswers += 10-countScore;
    updateResults(newResults);
  }

  function handleRestart() {
    setDialog(!dialog);
    let newResults = {...results$.value};
    newResults.gamesPlayed ++;
    newResults.correctAnswers += countScore;
    newResults.incorrectAnswers += 10-countScore;
    updateResults(newResults);
    updateQuestions(setQuestions);
  }

  const modal = dialog ? (
    <AriaModal
      titleText='Result dialog'
      initialFocus = '#focus'
      underlayStyle={{paddingTop: '5rem'}}
    >
      <Container >
        <div tabIndex='0' id='focus' role='textbox' className='dialog'>
          <h3>Congratulations!</h3>
          <p>You answered {countScore}/10 questions correct!</p>
          <div className='dialog_button_container'>
          <Link to="/quiz" tabIndex='-1'><button className='dialogBtn dialogBtn--restart' id='focus' onClick={handleRestart}>RE-START</button></Link>
          <Link to="/" tabIndex='-1'><button className='dialogBtn dialogBtn--close' id='focus' onClick={handleCloseModal}>CLOSE</button></Link>
          </div>
        </div>
      </Container>

    </AriaModal>
    ): false;

  return(
    <>
    {modal}
    </>
  )
}

export default DialogModal;