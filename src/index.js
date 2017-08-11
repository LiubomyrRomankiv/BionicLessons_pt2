'use strict';

import user from './user';
import './main.scss';

let authorizationForm = document.getElementById('authorization-form');
let authorizationInputs = authorizationForm.querySelectorAll('.authorization-form__input');

authorizationForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let userData = {
    login: this.login.value,
    pass: this.password.value
  }
  user.userAuthorization(userData);
  this.login.value = '';
  this.password.value = '';
});

for(let i = 0; i < authorizationInputs.length; i++){
  authorizationInputs[i].addEventListener('focus', function(){
    let output = document.querySelector('.output');
    if(!!output){
      this.parentNode.parentNode.removeChild(output);
    }
  });
}