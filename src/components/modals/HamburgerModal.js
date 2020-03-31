import React from 'react';
import styled, { keyframes } from 'styled-components';
import AriaModal from 'react-aria-modal';
import { Link } from 'react-router-dom';

const linearIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const linearOut = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const Container = styled.aside`
  position: absolute;
  width: 30%;
  height: 100vh;
  background: #ffffff;
  top: 0;
  left: ${props => props.sidebarOpen === false ? '-30%' : '0'};
  animation: ${props => props.sidebarOpen === false ? linearOut: linearIn} 0.5s linear;
  transition: all 0.5s linear;

  .Nav{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 25px;
    border-bottom: 1px solid black;
    background: #713D6E;
    color: white;
  }

  .Nav__button__container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a{
    margin-top 25px;
    width: 75%;
    height: 75%;
  }

  button{
    padding: 25px;
    width: 100%;
    height: 100%;
    border: none;
    transition: all 0.2s linear;
    cursor: pointer;

    :hover{
      color: #ffffff;
      background: #713D6E;
    }

    :focus{
      color: #ffffff;
      background: #713D6E;
    }
  }

  .SideBar__mask{
    position: absolute;
    width: 70%;
    height: 100vh;
    left: 30%;
    top: 0;
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.8;
    z-index: -1;
    cursor: pointer;
  }

  .SideBar__mask-button{
    border: none;
    width: 1px;
    height: 1px;
    margin-left: -10000px;
`

function HamburgerModal({sidebarOpen, onHandleSidebarModal}) {
  let path = window.location.pathname;

  const modal = sidebarOpen ? (
    <AriaModal
      scrollDisabled='none'
      titleText='Menu'
      onExit={onHandleSidebarModal}
      underlayStyle={{paddingTop: '5rem'}}
    >
      <Container tabIndex='0' role='navigation'>
          <div className='Nav'>
            <div className='Nav__header'>
            <h3>Quiz Master</h3>
            <p>Become the master of quizzes</p>
            </div>
          </div>
          <div className='Nav__button__container'>
            {path === '/quiz' ? 
            <Link to='/quiz' tabIndex='-1'><button aria-label='open game screen ' onClick={onHandleSidebarModal}>Game Screen</button></Link>:
            <Link to='/' tabIndex='-1'><button aria-label='open game screen' onClick={onHandleSidebarModal}>Game Screen</button></Link>}
            <Link to='/stats' tabIndex='-1'><button aria-label='open stats' onClick={onHandleSidebarModal}>Stats</button></Link>
            <Link to='/about' tabIndex='-1'><button aria-label='open about this app' onClick={onHandleSidebarModal}>About this app</button></Link>
            </div>
          <label className='SideBar__mask' onClick={onHandleSidebarModal}>
          <button aria-label='Close menu' className='SideBar__mask-button' />
          </label>
      </Container>
    </AriaModal>
    ): false;


  return(
    <Container sidebarOpen={sidebarOpen}>
      {modal}
      <div className='Nav'>
            <div className='Nav__header'>
            <h3>Quiz Master</h3>
            <p>Become the master of quizzes</p>
            </div>
          </div>
          <ul> 
            <li>Game Screen</li>
            <li>Game Screen</li>
            <li>Stats</li>
            <li>About this app</li>
          </ul>
    </Container>
  )
}

export default HamburgerModal;