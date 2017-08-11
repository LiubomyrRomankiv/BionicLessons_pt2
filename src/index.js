'use strict';

import user from './user';
import './main.scss';

let wraper = document.getElementById('wrapper');
let authorizationForm = document.getElementById('authorization-form');

authorizationForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let user = {
  	login: this.login.value,
  	pass: this.password.value
  }
  user.userAuthorization(user);
  this.login.value = '';
  this.password.value = '';
});