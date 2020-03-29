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

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
    color: black;

    :visited{
      text-decoration: none;
    }
  
  }


  li{
    margin: 15px;
    padding: 20px;
    width: 50%;
    height: 50%;
    transition: all 0.4s linear;

    :hover{
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

function HamburgerModal({sidebarOpen , onHandleSidebarModal}) {
  let className = 'SideBar';
  let path = window.location.pathname;

  if(!sidebarOpen){
    className += ' Sidebar--closed';
  }

  const modal = sidebarOpen ? (
    <AriaModal
      scrollDisabled='none'
      titleText='Menu'
      onExit={onHandleSidebarModal}
      underlayStyle={{paddingTop: '5rem'}}
    >
      <Container>
          <div className='Nav'>
            <div className='Nav__header'>
            <h3>Quiz Master</h3>
            <p>Become the master of quizzes</p>
            </div>
          </div>
          <ul>
            {path === '/quiz' ? 
            <Link to='/quiz'><li onClick={onHandleSidebarModal}>Game Screen</li></Link>:
            <Link to='/'><li onClick={onHandleSidebarModal}>Game Screen</li></Link>}
            <Link to='/stats'><li onClick={onHandleSidebarModal}>Stats</li></Link>
            <Link to='/about'><li onClick={onHandleSidebarModal}>About this app</li></Link>
            </ul>
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