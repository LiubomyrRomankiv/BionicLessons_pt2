'use strict';

import users from './users';
import dom from '../dom';
import menu from '../menu';
import router from '../router';

window.userData = {
  id: null,
  name: '',
  password: '',
  admin: false
};

let userAuthorization = (user, formSelector) => {
  let newActiveUser = findUser(user);
  let wraper = document.getElementById(formSelector);
  if(newActiveUser) {
    setActiveUser(newActiveUser);
    router.redirectToPage('/#');
    userMenu();
  } else {
    showMessage(wraper);
  }
}

let userUnauthorization = () => {
  let userMenuParrent = document.getElementById('user-menu');
  userMenuParrent.addEventListener('click', function(e){
    let id = e.target.getAttribute('id');
    if ( id === 'logout-btn' ){
      let userNull = {
        id: null,
        name: '',
        password: '',
        admin: false
      };

      setActiveUser(userNull);
      router.redirectToPage('/#');
      userMenu();
    }
  });
}

let userMenu = () => {
  let parentElement = document.getElementById('user-menu');
  if (userData.name !== ''){
    parentElement.innerHTML = `<p>${userData.name}</p><button id="logout-btn" class="menu-item logout">LogOut</button>`;
    userUnauthorization();
  } else {
    parentElement.innerHTML = '';
  }
}

let findUser = (user) => {
  for(let i = 0; i < users.length; i++){
    if(user.login === users[i].name && user.pass === users[i].password){
      setActiveUser(users[i]);
      return users[i];
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

let getStatus = () => {
  if ( userData.name !== '' ) {
    if (userData.admin === true) {
      return 'admin';
    }
    return 'user';
  }
  return 'guest';
}

let getActiveUser = () => {
  return userData;
}

let setActiveUser = (user) => {
  userData = user;
}

export default { 
  userAuthorization,
  getStatus,
  getActiveUser,
  userMenu
}