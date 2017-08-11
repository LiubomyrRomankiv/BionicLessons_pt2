'use strict';

import users from './users';

let wraper = document.getElementById('wrapper');
let authorizationForm = document.getElementById('authorization-form');

authorizationForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let user = {
  	login: this.login.value,
  	pass: this.password.value
  }
  userAuthorization(user);
  this.login.value = '';
  this.password.value = '';
});

let userAuthorization = (user) => {
  let userName = findUser(user);
  if(userName){
    showMessage(userName);
  } else {
    showMessage();
  }
}

let findUser = (user) => {
  for(let i = 0; i < users.length; i++){
    if(user.login === users[i].name && user.pass === users[i].password){
      return users[i].name;
      break;
    }
  }
  return false;
}

let showMessage = (name) => {
  let newDomElement = {};
  if(!!name) {
    newDomElement = createElement('p',[{'class':'output good'}], 'Hello, ' + name + '. How are you?');
  } else {
    newDomElement = createElement('p',[{'class':'output bad'}], 'No user finded. Please, enter correct "login" and "password"');
  }
  wraper.appendChild(newDomElement);
}

let createElement = (element, attriburtesArray, text) => {
  let newElement = document.createElement(element);
  if(!!attriburtesArray){
    for(let i = 0; i < attriburtesArray.length; i++){
      newElement.setAttribute(attriburtesArray[i].name, attriburtesArray[i].val);
    }
  }
  if(!!text){
    newElement.innerHTML = text;
  }
  return newElement;
}