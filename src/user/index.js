'use strict';

import users from './users';
import dom from '../dom';

let wraper = document.getElementById('wrapper');

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
  let attr = [];
  let text = '';

  if(!!name) {
    attr = [{ name: 'class', val: 'output good' }];
    text = 'Hello, ' + name + '. How are you?';
  } else {
    attr = [{ name: 'class', val: 'output bad' }];
    text = 'No user finded. Please, enter correct "login" and "password"';
  }

  newDomElement = dom.createElement('p', attr, text);
  dom.createElement('p',[{'class':'output bad'}], );
  wraper.appendChild(newDomElement);
}



export default {
  userAuthorization: userAuthorization
};