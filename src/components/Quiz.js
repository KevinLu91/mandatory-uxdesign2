import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import he from 'he';

import Header from "./Header";

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
`

function Quiz(){
  const [questions, setQuestions] = useState([]);

  let quizQuestions = [];

  
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple')
      .then((res) => {
        setQuestions(res.data.results);
        console.log(res.data.results)
      })
      .catch((error) => {
        console.log(error);
     })
  }, [])

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function renderData(questions) {
    for(let i = 0; i < questions.length; i ++){
      questions[i].incorrect_answers.push(questions[i].correct_answer);
      quizQuestions.push(questions[i].incorrect_answers.slice(0, 4));
    }

    for(let i = 0; i < quizQuestions.length; i++){
      for(let j = 0; j <quizQuestions.length; j++){
        shuffle(quizQuestions[j])
      }
    }
   
    return(
      <>
        {questions.map((data, idx) =>(
          <div className='question__Container' key={idx}>
            <h3 tabindex='0'>Question {idx +1 }:</h3>
            <h3 tabindex='0'>{he.decode(data.question)}</h3>
            <ul>
            {quizQuestions.map((x, i) =>(
              (idx === i) ?
               x.map((list) =>(
                 <li>
                 <input type='radio' name={idx} />
                 <label>{he.decode(list)}</label>
                 </li>
               )) 
               : null
            ))}
            </ul>
          </div>
        ))}
      </>
    )
  }

  return(
    <>
      <Header />
      <Container>
        
        <form>   
          {renderData(questions)}
          <button>Submit</button>  
        </form>

  
      </Container>
    </>
  )
}

export default Quiz;