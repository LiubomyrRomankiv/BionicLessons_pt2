'use strict';

import users from './users';
import dom from '../dom';
import menu from '../menu';
import router from '../router';

let activeUser = {};

let userAuthorization = (user, formSelector) => {
  let userName = findUser(user);
  let wraper = document.getElementById(formSelector);
  if(userName){
    activeUser = user;
    showMessage(wraper, userName);
    router.renderPage('#/');
    menu.init(activeUser);
  } else {
    showMessage(wraper);
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

let showMessage = (wraper, name) => {
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

let init = () => {
  return activeUser;
}

export default { userAuthorization, init }