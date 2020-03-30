import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from "./Header";
import RenderForm from "./RenderForm"
import DialogModal from './modals/DialogModal';

const Container = styled.main`
  form{
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .question__Container{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
  }

  .dialog{
    display: flex;
    flex-direction: column;
    background-color: lightgreen;
    align-items: center;
    justify-content: center;
    width: 60vh;
    height: 50vh;
    border-radius: 5%;
  }

  .dialog_button_container{
    display: flex;
    justify-content:space-between;
    width: 40%; 
  }
  
`

function Quiz(){
  const [questions, setQuestions] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [countScore, setCountScore] = useState(0);

  
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple')
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((error) => {
        console.log(error);
     })
  }, [])

 
  return(
    <>
      <Header />
      <Container>
        <RenderForm 
          questions={questions}
          setDialog={setDialog}
          dialog={dialog}
          countScore={countScore}
          setCountScore={setCountScore}
        />
        <DialogModal 
        countScore={countScore} 
        dialog={dialog}
        setDialog={setDialog}
        setQuestions={setQuestions}
        />
      </Container>
    </>
  )
}

export default Quiz;