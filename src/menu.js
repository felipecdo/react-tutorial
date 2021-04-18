import React from "react";
import {Link } from "react-router-dom";
import MyButton from './components/button';

function Menu(props) {
  return (
    <div className='content'>
      <p>
        Hello. Let's Play?
      </p>
      <Link to="/tictactoe" style={{ textDecoration: 'none' }}>
        <MyButton color="blue">
          Go to Page 2 
        </MyButton>
      </Link>
    </div>
  );
}

export default Menu;
