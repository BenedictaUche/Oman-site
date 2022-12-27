var first = $('.first');
var lastName = $('.last');
var submit = $('button');

submit.on("click", addOn);


function addOn(event) {
  var contain = $('.fill')
  var firstName = first.val();
  console.log(firstName);
  console.log("hi");
  contain.append(`<p>Thank you for signing up ${firstName}! </p>`)
  
  event.preventDefault();
}



/* commenting this out for now, don't know what it's for

import React from 'react';
import ReactDOM from 'react-dom';

import Register from './Register';

ReactDOM.render (
  <Register/>,
  document.getElementById('register')
);

*/