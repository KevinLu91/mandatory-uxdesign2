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

  ul{
    list-style-type: none;
  }

  button{
    cursor: pointer;
    border: none;
    height: 36px;
    width: 100px;
    border-radius: 4px;
    background-color: #713D6E;
    color: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
    margin: 15px;
    fontsize: 14px;

    :focus{
      outline: #90bafe solid 3px; 
    }
  }
`
function RenderForm({questions, dialog, setDialog, countScore, setCountScore}) {
  const [value, setValue] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  let count = 0;
  

  useEffect(() =>{
    let quizQuestions = [];

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
      {questions.length < 1 ?<div className='LoadingContainer'><Loader aria-label='loading' type="Grid" color="#713D6E" height={100} width={100} /></div> :
      <form onSubmit={onSubmit}>
        {questions.map((data, idx) =>(
          <div className='question__Container' key={data.question}>
            <div tabIndex='0'>
              <h3>Question {idx +1 }:</h3>
              <h3>{he.decode(data.question)}</h3>
            </div>
            <ul>
            {answers.map((x, i) =>(
              (idx === i) ?
              x.map((list, index) =>(
                <li key={index}>
                <input 
                type='radio' 
                name={idx} 
                onChange={onChange}
                value={list}
                aria-label={he.decode(list)}
                id={he.decode(list)}
                />
                <label htmlFor={he.decode(list)}>{he.decode(list)}</label>
                </li>
              )) 
              : null
            ))}
            </ul>
          </div>
        ))}
        <button aria-label='Submit quiz' type='submit'>Submit</button>  
       </form>
      }
    </Container>
  )
}

export default RenderForm;