import React from 'react';

function Dinner(props) {
  console.log(props);
  return (
    <div>
      <h1>Today we are serving</h1>
      <h2>{props.dishName} per plate price is {props.price}</h2>
    </div>
  );
}

export default Dinner;