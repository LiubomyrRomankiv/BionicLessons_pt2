'use strict';

import './main.scss';

import router from './router';
import menu from './menu';
import user from './user';

let loginedUser = user.init();
router.init(loginedUser);
menu.init(loginedUser);