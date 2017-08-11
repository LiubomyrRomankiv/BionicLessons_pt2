'use strict';

import user from './user';
import './main.scss';

let authorizationForm = document.getElementById('authorization-form');

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