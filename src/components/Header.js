import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu } from '@material-ui/icons';

import HamburgerModal from './modals/HamburgerModal';
import { handleTitle } from './utilities/Utils';

const Container = styled.header`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid black;
  align-items: center;
  background: #713D6E;
  color: white;
  

  .menuBtn{
    border: none;
    background: #ffffff; 
    cursor: pointer;
    margin: 10px;
    background: #713D6E;

    :hover{
      border: 1px solid #ffffff;
    }
  }

  .titleContainer{
    display: flex;
    flex: 1;
    justify-content: center;
  }

` 

function Header() {
  const [sidebarOpen, setSidebarOpen] =useState(false);
  let title = 'Quiz Master';
  let path = window.location.pathname

  function handleSidebarModal() {
    setSidebarOpen(!sidebarOpen);
  }

  return(
    <Container> 
      <button aria-label='Open menu' className='menuBtn' onClick={handleSidebarModal}>
        <Menu aria-hidden='true' fontSize="large" style={{ color: '#ffffff', backgroundColor: '#713D6E' }}/>
      </button>
      <div className='titleContainer'>
        <h1>{handleTitle(title, path)}</h1>
      </div>
      {sidebarOpen ? <HamburgerModal sidebarOpen={sidebarOpen} onHandleSidebarModal={handleSidebarModal}/>: null}
    </Container>
  )
}

export default Header;

