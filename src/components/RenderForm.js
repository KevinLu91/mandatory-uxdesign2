import React, { useState, useEffect } from 'react';
import he from 'he';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'

import { shuffle } from './utilities/Utils';

const Container = styled.div`

  .LoadingContainer{
    display:flex;
    justify-content: center;
    height: 500px;
    align-items: center;
  }

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
    margin: 15px;
  }
`
function RenderForm({questions, dialog, setDialog, countScore, setCountScore}) {
  const [value, setValue] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  let quizQuestions = [];
  let count = 0;

  useEffect(() =>{
    for(let i = 0; i < questions.length; i ++){
      questions[i].incorrect_answers.push(questions[i].correct_answer);
      quizQuestions.push(questions[i].incorrect_answers.slice(0, 4));
      for(let j = 0; j <quizQuestions.length; j++){
        shuffle(quizQuestions[j])        
      }
    }
    setAnswers(quizQuestions);
  }, [questions])

  function onChange(e){
    setValue({...value, ...{[e.target.name]:e.target.value}});
  }
  
  function onSubmit(e){
    e.preventDefault();
    setDialog(!dialog) 
    countRoundScore();
  }

  function countRoundScore(){
    for(let i = 0; i <questions.length; i++){
      console.log(questions[i].correct_answer);
      console.log(value[i]);
      if(value[i] === questions[i].correct_answer){
        count ++;
      }
    }
    setCountScore(count)
  }
 
  return(
    <Container>
      {questions.length < 1 ?<div className='LoadingContainer'><Loader type="Grid" color="#713D6E" height={100} width={100} /></div> :
      <form onSubmit={onSubmit}>
        {questions.map((data, idx) =>(
          <div className='question__Container' key={data.question}>
            <h3 tabIndex='0'>Question {idx +1 }:</h3>
            <h3 tabIndex='0'>{he.decode(data.question)}</h3>
            <ul >
            {answers.map((x, i) =>(
              (idx === i) ?
              x.map((list) =>(
                <li>
                <input 
                type='radio' 
                name={idx} 
                onChange={onChange}
                value={list}
                />
                <label>{he.decode(list)}</label>
                </li>
              )) 
              : null
            ))}
            </ul>
          </div>
        ))}
        <button type='submit'>Submit</button>  
       </form>
      }
    </Container>
  )
}

export default RenderForm;