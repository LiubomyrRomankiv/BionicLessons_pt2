'use strict';

import _ from 'lodash';
import homePage from './pages/home/home.page';
import aboutPage from './pages/about/about.page';
import loginPage from './pages/login/login.page';
import contactsPage from './pages/contacts/contacts.page';
import adminPage from './pages/admin/admin.page';

let pages = [homePage, aboutPage, loginPage, contactsPage, adminPage];

let init = (user) => {
  let url = window.location.hash;

  renderPage(url);
};

let renderPage = (hash) => {
  let page = _.find(pages, {url: hash});

  page ? page.render() : homePage.render();
};

export default { init, renderPage };