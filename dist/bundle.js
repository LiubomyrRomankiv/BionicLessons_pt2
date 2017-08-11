/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _user = __webpack_require__(16);

var _user2 = _interopRequireDefault(_user);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorizationForm = document.getElementById('authorization-form');

authorizationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var userData = {
    login: this.login.value,
    pass: this.password.value
  };
  _user2.default.userAuthorization(userData);
  this.login.value = '';
  this.password.value = '';
});

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = [{"id":1,"name":"Timi","password":"cYmtybpKM"},{"id":2,"name":"Elena","password":"Eq8H9mEl2"},{"id":3,"name":"Mathew","password":"eGVP0fB"},{"id":4,"name":"Randal","password":"QLwPdpnug"},{"id":5,"name":"Rockwell","password":"PiD8V7lu8w5"},{"id":6,"name":"Sigfrid","password":"JkIJ0keidj2"},{"id":7,"name":"Jeanelle","password":"qae85d1"},{"id":8,"name":"Maryl","password":"oOOSu6P"},{"id":9,"name":"Philip","password":"07Flio"},{"id":10,"name":"Kirby","password":"WSVRla0F"},{"id":11,"name":"Alister","password":"Venxi0AFV"},{"id":12,"name":"Helenelizabeth","password":"issVBJ4L3y"},{"id":13,"name":"Noak","password":"3DflBw4"},{"id":14,"name":"Burnard","password":"7HQJ90f"},{"id":15,"name":"Lauryn","password":"0zdR6gt"},{"id":16,"name":"Tomlin","password":"uztUx1"},{"id":17,"name":"Heywood","password":"PFUMVMQekVm"},{"id":18,"name":"Sean","password":"EF3AevNId0A"},{"id":19,"name":"Corliss","password":"4HJT2lO3"},{"id":20,"name":"Pepita","password":"vMkvkkxKhuy"},{"id":21,"name":"Knox","password":"4Ih7i1u"},{"id":22,"name":"Florie","password":"RWSK0j"},{"id":23,"name":"Chariot","password":"SpG88FniYox7"},{"id":24,"name":"Garry","password":"TpiLkxss3j"},{"id":25,"name":"Fabe","password":"2RVeCM9G"},{"id":26,"name":"Aurora","password":"IOTjUK5kP0GH"},{"id":27,"name":"Aura","password":"N3oJQTz9"},{"id":28,"name":"Gerianne","password":"x92rodjkmEhx"},{"id":29,"name":"Margarette","password":"W5r4DHr3reAz"},{"id":30,"name":"Andrew","password":"2f55dRrmOA3m"},{"id":31,"name":"Putnam","password":"0XR8nO"},{"id":32,"name":"Claudina","password":"xDTRMC7gJe"},{"id":33,"name":"Dyan","password":"nbsCVu"},{"id":34,"name":"Rudiger","password":"MtMLV6K9"},{"id":35,"name":"Rabbi","password":"w7FVDy"},{"id":36,"name":"Goraud","password":"08KYLP7SGkD1"},{"id":37,"name":"Nevin","password":"s8YEwIF"},{"id":38,"name":"Kenn","password":"U4z02C4MS"},{"id":39,"name":"Bevin","password":"BCeaS178i"},{"id":40,"name":"Brigit","password":"hQOkIlDJOr"},{"id":41,"name":"Hans","password":"gaDY3nOxl8e"},{"id":42,"name":"Lelia","password":"G9CC73mmx"},{"id":43,"name":"Waiter","password":"hSEoWo"},{"id":44,"name":"Garek","password":"m6g0cYaudNU"},{"id":45,"name":"Emalia","password":"uK8yGqeX4"},{"id":46,"name":"Sissie","password":"GEJbmuL7XR7p"},{"id":47,"name":"Jorrie","password":"Qwkbm8Zs"},{"id":48,"name":"Arley","password":"2qSpWfFJ9"},{"id":49,"name":"Bailey","password":"ft9vNNUfZ"},{"id":50,"name":"Gerik","password":"ZeV3WMaX"},{"id":51,"name":"Ashleigh","password":"J6NIjl"},{"id":52,"name":"Hobie","password":"TbXKEU3h3yY2"},{"id":53,"name":"Kristina","password":"EK6jOi0x"},{"id":54,"name":"Christiano","password":"GKzNfi"},{"id":55,"name":"Laney","password":"EkKwgdRl"},{"id":56,"name":"Erminia","password":"hn2mdsOpoC2P"},{"id":57,"name":"Madelle","password":"XjdJwTV"},{"id":58,"name":"Mozes","password":"qzCamXZ"},{"id":59,"name":"Braden","password":"JxB0Yy"},{"id":60,"name":"Irvine","password":"khRfXq9dqAxL"},{"id":61,"name":"Vladimir","password":"UhA799y"},{"id":62,"name":"Gunner","password":"iSOYgQuwxhi"},{"id":63,"name":"Aubrey","password":"tLnCpaTf9V"},{"id":64,"name":"Klara","password":"Gn0CFdrM5"},{"id":65,"name":"Redford","password":"rP6bl0Mi99"},{"id":66,"name":"Mayne","password":"nCMW76P"},{"id":67,"name":"Tracey","password":"wcIhwArSyKg9"},{"id":68,"name":"Eduino","password":"wD9r1bl5WObR"},{"id":69,"name":"Harriot","password":"nPnd1Nz"},{"id":70,"name":"Rheta","password":"Lx0J5J"},{"id":71,"name":"Itch","password":"2bkOuA"},{"id":72,"name":"Cosmo","password":"JVe1Ztx7hS"},{"id":73,"name":"Elbertine","password":"aOaE8fFZF3Kx"},{"id":74,"name":"Claudette","password":"TuRufr"},{"id":75,"name":"Eddy","password":"uvbxnSz1A7"},{"id":76,"name":"Nikki","password":"e0beEo"},{"id":77,"name":"Else","password":"uvFhV56Mv"},{"id":78,"name":"Marvin","password":"0dewmD"},{"id":79,"name":"Bobbye","password":"bJyEwH"},{"id":80,"name":"Eadie","password":"hHtjahB9Djb"},{"id":81,"name":"Annalee","password":"eeJbxqEk2"},{"id":82,"name":"Bride","password":"MyBrkC"},{"id":83,"name":"Onofredo","password":"omZrPQBBF"},{"id":84,"name":"Louis","password":"9qOpuUM"},{"id":85,"name":"Nat","password":"EunDZHqzkCb"},{"id":86,"name":"Rolland","password":"HFmJ4M1PaQ"},{"id":87,"name":"Vanessa","password":"M4y0AQO4rpu5"},{"id":88,"name":"Leonerd","password":"x6G2UJV5OE"},{"id":89,"name":"Wilmer","password":"sDto8hfzGoY"},{"id":90,"name":"Mariel","password":"YnBJCQm4Emrw"},{"id":91,"name":"Stacia","password":"sJZGEjymjX"},{"id":92,"name":"Welbie","password":"E6pMSO0mKk"},{"id":93,"name":"Margarete","password":"OO6FrKbCi8e"},{"id":94,"name":"Kelila","password":"BDREmjM3b"},{"id":95,"name":"Rasia","password":"grbmL6aBP"},{"id":96,"name":"Guglielma","password":"lcDia4xOe"},{"id":97,"name":"Giana","password":"x4QCZO"},{"id":98,"name":"Kathlin","password":"qMWADh"},{"id":99,"name":"Luciano","password":"P2sO18"},{"id":100,"name":"Rianon","password":"WZQLe2DE0f"}]

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = __webpack_require__(15);

var _users2 = _interopRequireDefault(_users);

var _dom = __webpack_require__(17);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wraper = document.getElementById('wrapper');

var userAuthorization = function userAuthorization(user) {
  var userName = findUser(user);
  if (userName) {
    showMessage(userName);
  } else {
    showMessage();
  }
};

var findUser = function findUser(user) {
  for (var i = 0; i < _users2.default.length; i++) {
    if (user.login === _users2.default[i].name && user.pass === _users2.default[i].password) {
      return _users2.default[i].name;
      break;
    }
  }
  return false;
};

var showMessage = function showMessage(name) {
  var newDomElement = {};
  if (!!name) {
    newDomElement = _dom2.default.createElement('p', [{ 'class': 'output good' }], 'Hello, ' + name + '. How are you?');
  } else {
    newDomElement = _dom2.default.createElement('p', [{ 'class': 'output bad' }], 'No user finded. Please, enter correct "login" and "password"');
  }
  wraper.appendChild(newDomElement);
};

exports.default = {
  userAuthorization: userAuthorization
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createElement = function createElement(element, attriburtesArray, text) {
  var newElement = document.createElement(element);
  if (!!attriburtesArray) {
    for (var i = 0; i < attriburtesArray.length; i++) {
      newElement.setAttribute(attriburtesArray[i].name, attriburtesArray[i].val);
    }
  }
  if (!!text) {
    newElement.innerHTML = text;
  }
  return newElement;
};

exports.default = {
  createElement: createElement
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFjNDI4OGYzYjU2Nzg3YTYzMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3VzZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImF1dGhvcml6YXRpb25Gb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyRGF0YSIsImxvZ2luIiwidmFsdWUiLCJwYXNzIiwicGFzc3dvcmQiLCJ1c2VyQXV0aG9yaXphdGlvbiIsIndyYXBlciIsInVzZXIiLCJ1c2VyTmFtZSIsImZpbmRVc2VyIiwic2hvd01lc3NhZ2UiLCJpIiwibGVuZ3RoIiwibmFtZSIsIm5ld0RvbUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiYXR0cmlidXJ0ZXNBcnJheSIsInRleHQiLCJuZXdFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidmFsIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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U0FBSSxJQUFJUCxJQUFJLENBQVosRUFBZUEsSUFBSU8saUJBQWlCTixNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBZ0Q7QUFDOUNTLGlCQUFXQyxZQUFYLENBQXdCSCxpQkFBaUJQLENBQWpCLEVBQW9CRSxJQUE1QyxFQUFrREssaUJBQWlCUCxDQUFqQixFQUFvQlcsR0FBdEU7QUFDRDtBQUNGO0FBQ0QsTUFBRyxDQUFDLENBQUNILElBQUwsRUFBVTtBQUNSQyxlQUFXRyxTQUFYLEdBQXVCSixJQUF2QjtBQUNEO0FBQ0QsU0FBT0MsVUFBUDtBQUNELENBWEQ7O2tCQWFlO0FBQ2JMLGlCQUFlQTtBQURGLEM7Ozs7Ozs7QUNmZix5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMWM0Mjg4ZjNiNTY3ODdhNjMzNSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5sZXQgYXV0aG9yaXphdGlvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yaXphdGlvbi1mb3JtJyk7XG5cbmF1dGhvcml6YXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB1c2VyRGF0YSA9IHtcbiAgXHRsb2dpbjogdGhpcy5sb2dpbi52YWx1ZSxcbiAgXHRwYXNzOiB0aGlzLnBhc3N3b3JkLnZhbHVlXG4gIH1cbiAgdXNlci51c2VyQXV0aG9yaXphdGlvbih1c2VyRGF0YSk7XG4gIHRoaXMubG9naW4udmFsdWUgPSAnJztcbiAgdGhpcy5wYXNzd29yZC52YWx1ZSA9ICcnO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiaWRcIjoxLFwibmFtZVwiOlwiVGltaVwiLFwicGFzc3dvcmRcIjpcImNZbXR5YnBLTVwifSx7XCJpZFwiOjIsXCJuYW1lXCI6XCJFbGVuYVwiLFwicGFzc3dvcmRcIjpcIkVxOEg5bUVsMlwifSx7XCJpZFwiOjMsXCJuYW1lXCI6XCJNYXRoZXdcIixcInBhc3N3b3JkXCI6XCJlR1ZQMGZCXCJ9LHtcImlkXCI6NCxcIm5hbWVcIjpcIlJhbmRhbFwiLFwicGFzc3dvcmRcIjpcIlFMd1BkcG51Z1wifSx7XCJpZFwiOjUsXCJuYW1lXCI6XCJSb2Nrd2VsbFwiLFwicGFzc3dvcmRcIjpcIlBpRDhWN2x1OHc1XCJ9LHtcImlkXCI6NixcIm5hbWVcIjpcIlNpZ2ZyaWRcIixcInBhc3N3b3JkXCI6XCJKa0lKMGtlaWRqMlwifSx7XCJpZFwiOjcsXCJuYW1lXCI6XCJKZWFuZWxsZVwiLFwicGFzc3dvcmRcIjpcInFhZTg1ZDFcIn0se1wiaWRcIjo4LFwibmFtZVwiOlwiTWFyeWxcIixcInBhc3N3b3JkXCI6XCJvT09TdTZQXCJ9LHtcImlkXCI6OSxcIm5hbWVcIjpcIlBoaWxpcFwiLFwicGFzc3dvcmRcIjpcIjA3Rmxpb1wifSx7XCJpZFwiOjEwLFwibmFtZVwiOlwiS2lyYnlcIixcInBhc3N3b3JkXCI6XCJXU1ZSbGEwRlwifSx7XCJpZFwiOjExLFwibmFtZVwiOlwiQWxpc3RlclwiLFwicGFzc3dvcmRcIjpcIlZlbnhpMEFGVlwifSx7XCJpZFwiOjEyLFwibmFtZVwiOlwiSGVsZW5lbGl6YWJldGhcIixcInBhc3N3b3JkXCI6XCJpc3NWQko0TDN5XCJ9LHtcImlkXCI6MTMsXCJuYW1lXCI6XCJOb2FrXCIsXCJwYXNzd29yZFwiOlwiM0RmbEJ3NFwifSx7XCJpZFwiOjE0LFwibmFtZVwiOlwiQnVybmFyZFwiLFwicGFzc3dvcmRcIjpcIjdIUUo5MGZcIn0se1wiaWRcIjoxNSxcIm5hbWVcIjpcIkxhdXJ5blwiLFwicGFzc3dvcmRcIjpcIjB6ZFI2Z3RcIn0se1wiaWRcIjoxNixcIm5hbWVcIjpcIlRvbWxpblwiLFwicGFzc3dvcmRcIjpcInV6dFV4MVwifSx7XCJpZFwiOjE3LFwibmFtZVwiOlwiSGV5d29vZFwiLFwicGFzc3dvcmRcIjpcIlBGVU1WTVFla1ZtXCJ9LHtcImlkXCI6MTgsXCJuYW1lXCI6XCJTZWFuXCIsXCJwYXNzd29yZFwiOlwiRUYzQWV2TklkMEFcIn0se1wiaWRcIjoxOSxcIm5hbWVcIjpcIkNvcmxpc3NcIixcInBhc3N3b3JkXCI6XCI0SEpUMmxPM1wifSx7XCJpZFwiOjIwLFwibmFtZVwiOlwiUGVwaXRhXCIsXCJwYXNzd29yZFwiOlwidk1rdmtreEtodXlcIn0se1wiaWRcIjoyMSxcIm5hbWVcIjpcIktub3hcIixcInBhc3N3b3JkXCI6XCI0SWg3aTF1XCJ9LHtcImlkXCI6MjIsXCJuYW1lXCI6XCJGbG9yaWVcIixcInBhc3N3b3JkXCI6XCJSV1NLMGpcIn0se1wiaWRcIjoyMyxcIm5hbWVcIjpcIkNoYXJpb3RcIixcInBhc3N3b3JkXCI6XCJTcEc4OEZuaVlveDdcIn0se1wiaWRcIjoyNCxcIm5hbWVcIjpcIkdhcnJ5XCIsXCJwYXNzd29yZFwiOlwiVHBpTGt4c3MzalwifSx7XCJpZFwiOjI1LFwibmFtZVwiOlwiRmFiZVwiLFwicGFzc3dvcmRcIjpcIjJSVmVDTTlHXCJ9LHtcImlkXCI6MjYsXCJuYW1lXCI6XCJBdXJvcmFcIixcInBhc3N3b3JkXCI6XCJJT1RqVUs1a1AwR0hcIn0se1wiaWRcIjoyNyxcIm5hbWVcIjpcIkF1cmFcIixcInBhc3N3b3JkXCI6XCJOM29KUVR6OVwifSx7XCJpZFwiOjI4LFwibmFtZVwiOlwiR2VyaWFubmVcIixcInBhc3N3b3JkXCI6XCJ4OTJyb2Rqa21FaHhcIn0se1wiaWRcIjoyOSxcIm5hbWVcIjpcIk1hcmdhcmV0dGVcIixcInBhc3N3b3JkXCI6XCJXNXI0REhyM3JlQXpcIn0se1wiaWRcIjozMCxcIm5hbWVcIjpcIkFuZHJld1wiLFwicGFzc3dvcmRcIjpcIjJmNTVkUnJtT0EzbVwifSx7XCJpZFwiOjMxLFwibmFtZVwiOlwiUHV0bmFtXCIsXCJwYXNzd29yZFwiOlwiMFhSOG5PXCJ9LHtcImlkXCI6MzIsXCJuYW1lXCI6XCJDbGF1ZGluYVwiLFwicGFzc3dvcmRcIjpcInhEVFJNQzdnSmVcIn0se1wiaWRcIjozMyxcIm5hbWVcIjpcIkR5YW5cIixcInBhc3N3b3JkXCI6XCJuYnNDVnVcIn0se1wiaWRcIjozNCxcIm5hbWVcIjpcIlJ1ZGlnZXJcIixcInBhc3N3b3JkXCI6XCJNdE1MVjZLOVwifSx7XCJpZFwiOjM1LFwibmFtZVwiOlwiUmFiYmlcIixcInBhc3N3b3JkXCI6XCJ3N0ZWRHlcIn0se1wiaWRcIjozNixcIm5hbWVcIjpcIkdvcmF1ZFwiLFwicGFzc3dvcmRcIjpcIjA4S1lMUDdTR2tEMVwifSx7XCJpZFwiOjM3LFwibmFtZVwiOlwiTmV2aW5cIixcInBhc3N3b3JkXCI6XCJzOFlFd0lGXCJ9LHtcImlkXCI6MzgsXCJuYW1lXCI6XCJLZW5uXCIsXCJwYXNzd29yZFwiOlwiVTR6MDJDNE1TXCJ9LHtcImlkXCI6MzksXCJuYW1lXCI6XCJCZXZpblwiLFwicGFzc3dvcmRcIjpcIkJDZWFTMTc4aVwifSx7XCJpZFwiOjQwLFwibmFtZVwiOlwiQnJpZ2l0XCIsXCJwYXNzd29yZFwiOlwiaFFPa0lsREpPclwifSx7XCJpZFwiOjQxLFwibmFtZVwiOlwiSGFuc1wiLFwicGFzc3dvcmRcIjpcImdhRFkzbk94bDhlXCJ9LHtcImlkXCI6NDIsXCJuYW1lXCI6XCJMZWxpYVwiLFwicGFzc3dvcmRcIjpcIkc5Q0M3M21teFwifSx7XCJpZFwiOjQzLFwibmFtZVwiOlwiV2FpdGVyXCIsXCJwYXNzd29yZFwiOlwiaFNFb1dvXCJ9LHtcImlkXCI6NDQsXCJuYW1lXCI6XCJHYXJla1wiLFwicGFzc3dvcmRcIjpcIm02ZzBjWWF1ZE5VXCJ9LHtcImlkXCI6NDUsXCJuYW1lXCI6XCJFbWFsaWFcIixcInBhc3N3b3JkXCI6XCJ1Szh5R3FlWDRcIn0se1wiaWRcIjo0NixcIm5hbWVcIjpcIlNpc3NpZVwiLFwicGFzc3dvcmRcIjpcIkdFSmJtdUw3WFI3cFwifSx7XCJpZFwiOjQ3LFwibmFtZVwiOlwiSm9ycmllXCIsXCJwYXNzd29yZFwiOlwiUXdrYm04WnNcIn0se1wiaWRcIjo0OCxcIm5hbWVcIjpcIkFybGV5XCIsXCJwYXNzd29yZFwiOlwiMnFTcFdmRko5XCJ9LHtcImlkXCI6NDksXCJuYW1lXCI6XCJCYWlsZXlcIixcInBhc3N3b3JkXCI6XCJmdDl2Tk5VZlpcIn0se1wiaWRcIjo1MCxcIm5hbWVcIjpcIkdlcmlrXCIsXCJwYXNzd29yZFwiOlwiWmVWM1dNYVhcIn0se1wiaWRcIjo1MSxcIm5hbWVcIjpcIkFzaGxlaWdoXCIsXCJwYXNzd29yZFwiOlwiSjZOSWpsXCJ9LHtcImlkXCI6NTIsXCJuYW1lXCI6XCJIb2JpZVwiLFwicGFzc3dvcmRcIjpcIlRiWEtFVTNoM3lZMlwifSx7XCJpZFwiOjUzLFwibmFtZVwiOlwiS3Jpc3RpbmFcIixcInBhc3N3b3JkXCI6XCJFSzZqT2kweFwifSx7XCJpZFwiOjU0LFwibmFtZVwiOlwiQ2hyaXN0aWFub1wiLFwicGFzc3dvcmRcIjpcIkdLek5maVwifSx7XCJpZFwiOjU1LFwibmFtZVwiOlwiTGFuZXlcIixcInBhc3N3b3JkXCI6XCJFa0t3Z2RSbFwifSx7XCJpZFwiOjU2LFwibmFtZVwiOlwiRXJtaW5pYVwiLFwicGFzc3dvcmRcIjpcImhuMm1kc09wb0MyUFwifSx7XCJpZFwiOjU3LFwibmFtZVwiOlwiTWFkZWxsZVwiLFwicGFzc3dvcmRcIjpcIlhqZEp3VFZcIn0se1wiaWRcIjo1OCxcIm5hbWVcIjpcIk1vemVzXCIsXCJwYXNzd29yZFwiOlwicXpDYW1YWlwifSx7XCJpZFwiOjU5LFwibmFtZVwiOlwiQnJhZGVuXCIsXCJwYXNzd29yZFwiOlwiSnhCMFl5XCJ9LHtcImlkXCI6NjAsXCJuYW1lXCI6XCJJcnZpbmVcIixcInBhc3N3b3JkXCI6XCJraFJmWHE5ZHFBeExcIn0se1wiaWRcIjo2MSxcIm5hbWVcIjpcIlZsYWRpbWlyXCIsXCJwYXNzd29yZFwiOlwiVWhBNzk5eVwifSx7XCJpZFwiOjYyLFwibmFtZVwiOlwiR3VubmVyXCIsXCJwYXNzd29yZFwiOlwiaVNPWWdRdXd4aGlcIn0se1wiaWRcIjo2MyxcIm5hbWVcIjpcIkF1YnJleVwiLFwicGFzc3dvcmRcIjpcInRMbkNwYVRmOVZcIn0se1wiaWRcIjo2NCxcIm5hbWVcIjpcIktsYXJhXCIsXCJwYXNzd29yZFwiOlwiR24wQ0Zkck01XCJ9LHtcImlkXCI6NjUsXCJuYW1lXCI6XCJSZWRmb3JkXCIsXCJwYXNzd29yZFwiOlwiclA2YmwwTWk5OVwifSx7XCJpZFwiOjY2LFwibmFtZVwiOlwiTWF5bmVcIixcInBhc3N3b3JkXCI6XCJuQ01XNzZQXCJ9LHtcImlkXCI6NjcsXCJuYW1lXCI6XCJUcmFjZXlcIixcInBhc3N3b3JkXCI6XCJ3Y0lod0FyU3lLZzlcIn0se1wiaWRcIjo2OCxcIm5hbWVcIjpcIkVkdWlub1wiLFwicGFzc3dvcmRcIjpcIndEOXIxYmw1V09iUlwifSx7XCJpZFwiOjY5LFwibmFtZVwiOlwiSGFycmlvdFwiLFwicGFzc3dvcmRcIjpcIm5QbmQxTnpcIn0se1wiaWRcIjo3MCxcIm5hbWVcIjpcIlJoZXRhXCIsXCJwYXNzd29yZFwiOlwiTHgwSjVKXCJ9LHtcImlkXCI6NzEsXCJuYW1lXCI6XCJJdGNoXCIsXCJwYXNzd29yZFwiOlwiMmJrT3VBXCJ9LHtcImlkXCI6NzIsXCJuYW1lXCI6XCJDb3Ntb1wiLFwicGFzc3dvcmRcIjpcIkpWZTFadHg3aFNcIn0se1wiaWRcIjo3MyxcIm5hbWVcIjpcIkVsYmVydGluZVwiLFwicGFzc3dvcmRcIjpcImFPYUU4ZkZaRjNLeFwifSx7XCJpZFwiOjc0LFwibmFtZVwiOlwiQ2xhdWRldHRlXCIsXCJwYXNzd29yZFwiOlwiVHVSdWZyXCJ9LHtcImlkXCI6NzUsXCJuYW1lXCI6XCJFZGR5XCIsXCJwYXNzd29yZFwiOlwidXZieG5TejFBN1wifSx7XCJpZFwiOjc2LFwibmFtZVwiOlwiTmlra2lcIixcInBhc3N3b3JkXCI6XCJlMGJlRW9cIn0se1wiaWRcIjo3NyxcIm5hbWVcIjpcIkVsc2VcIixcInBhc3N3b3JkXCI6XCJ1dkZoVjU2TXZcIn0se1wiaWRcIjo3OCxcIm5hbWVcIjpcIk1hcnZpblwiLFwicGFzc3dvcmRcIjpcIjBkZXdtRFwifSx7XCJpZFwiOjc5LFwibmFtZVwiOlwiQm9iYnllXCIsXCJwYXNzd29yZFwiOlwiYkp5RXdIXCJ9LHtcImlkXCI6ODAsXCJuYW1lXCI6XCJFYWRpZVwiLFwicGFzc3dvcmRcIjpcImhIdGphaEI5RGpiXCJ9LHtcImlkXCI6ODEsXCJuYW1lXCI6XCJBbm5hbGVlXCIsXCJwYXNzd29yZFwiOlwiZWVKYnhxRWsyXCJ9LHtcImlkXCI6ODIsXCJuYW1lXCI6XCJCcmlkZVwiLFwicGFzc3dvcmRcIjpcIk15QnJrQ1wifSx7XCJpZFwiOjgzLFwibmFtZVwiOlwiT25vZnJlZG9cIixcInBhc3N3b3JkXCI6XCJvbVpyUFFCQkZcIn0se1wiaWRcIjo4NCxcIm5hbWVcIjpcIkxvdWlzXCIsXCJwYXNzd29yZFwiOlwiOXFPcHVVTVwifSx7XCJpZFwiOjg1LFwibmFtZVwiOlwiTmF0XCIsXCJwYXNzd29yZFwiOlwiRXVuRFpIcXprQ2JcIn0se1wiaWRcIjo4NixcIm5hbWVcIjpcIlJvbGxhbmRcIixcInBhc3N3b3JkXCI6XCJIRm1KNE0xUGFRXCJ9LHtcImlkXCI6ODcsXCJuYW1lXCI6XCJWYW5lc3NhXCIsXCJwYXNzd29yZFwiOlwiTTR5MEFRTzRycHU1XCJ9LHtcImlkXCI6ODgsXCJuYW1lXCI6XCJMZW9uZXJkXCIsXCJwYXNzd29yZFwiOlwieDZHMlVKVjVPRVwifSx7XCJpZFwiOjg5LFwibmFtZVwiOlwiV2lsbWVyXCIsXCJwYXNzd29yZFwiOlwic0R0bzhoZnpHb1lcIn0se1wiaWRcIjo5MCxcIm5hbWVcIjpcIk1hcmllbFwiLFwicGFzc3dvcmRcIjpcIlluQkpDUW00RW1yd1wifSx7XCJpZFwiOjkxLFwibmFtZVwiOlwiU3RhY2lhXCIsXCJwYXNzd29yZFwiOlwic0paR0VqeW1qWFwifSx7XCJpZFwiOjkyLFwibmFtZVwiOlwiV2VsYmllXCIsXCJwYXNzd29yZFwiOlwiRTZwTVNPMG1La1wifSx7XCJpZFwiOjkzLFwibmFtZVwiOlwiTWFyZ2FyZXRlXCIsXCJwYXNzd29yZFwiOlwiT082RnJLYkNpOGVcIn0se1wiaWRcIjo5NCxcIm5hbWVcIjpcIktlbGlsYVwiLFwicGFzc3dvcmRcIjpcIkJEUkVtak0zYlwifSx7XCJpZFwiOjk1LFwibmFtZVwiOlwiUmFzaWFcIixcInBhc3N3b3JkXCI6XCJncmJtTDZhQlBcIn0se1wiaWRcIjo5NixcIm5hbWVcIjpcIkd1Z2xpZWxtYVwiLFwicGFzc3dvcmRcIjpcImxjRGlhNHhPZVwifSx7XCJpZFwiOjk3LFwibmFtZVwiOlwiR2lhbmFcIixcInBhc3N3b3JkXCI6XCJ4NFFDWk9cIn0se1wiaWRcIjo5OCxcIm5hbWVcIjpcIkthdGhsaW5cIixcInBhc3N3b3JkXCI6XCJxTVdBRGhcIn0se1wiaWRcIjo5OSxcIm5hbWVcIjpcIkx1Y2lhbm9cIixcInBhc3N3b3JkXCI6XCJQMnNPMThcIn0se1wiaWRcIjoxMDAsXCJuYW1lXCI6XCJSaWFub25cIixcInBhc3N3b3JkXCI6XCJXWlFMZTJERTBmXCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3VzZXIvdXNlcnMuanNvblxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgZG9tIGZyb20gJy4uL2RvbSc7XG5cbmxldCB3cmFwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xuXG5sZXQgdXNlckF1dGhvcml6YXRpb24gPSAodXNlcikgPT4ge1xuICBsZXQgdXNlck5hbWUgPSBmaW5kVXNlcih1c2VyKTtcbiAgaWYodXNlck5hbWUpe1xuICAgIHNob3dNZXNzYWdlKHVzZXJOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93TWVzc2FnZSgpO1xuICB9XG59XG5cbmxldCBmaW5kVXNlciA9ICh1c2VyKSA9PiB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKyl7XG4gICAgaWYodXNlci5sb2dpbiA9PT0gdXNlcnNbaV0ubmFtZSAmJiB1c2VyLnBhc3MgPT09IHVzZXJzW2ldLnBhc3N3b3JkKXtcbiAgICAgIHJldHVybiB1c2Vyc1tpXS5uYW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubGV0IHNob3dNZXNzYWdlID0gKG5hbWUpID0+IHtcbiAgbGV0IG5ld0RvbUVsZW1lbnQgPSB7fTtcbiAgaWYoISFuYW1lKSB7XG4gICAgbmV3RG9tRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50KCdwJyxbeydjbGFzcyc6J291dHB1dCBnb29kJ31dLCAnSGVsbG8sICcgKyBuYW1lICsgJy4gSG93IGFyZSB5b3U/Jyk7XG4gIH0gZWxzZSB7XG4gICAgbmV3RG9tRWxlbWVudCA9IGRvbS5jcmVhdGVFbGVtZW50KCdwJyxbeydjbGFzcyc6J291dHB1dCBiYWQnfV0sICdObyB1c2VyIGZpbmRlZC4gUGxlYXNlLCBlbnRlciBjb3JyZWN0IFwibG9naW5cIiBhbmQgXCJwYXNzd29yZFwiJyk7XG4gIH1cbiAgd3JhcGVyLmFwcGVuZENoaWxkKG5ld0RvbUVsZW1lbnQpO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB1c2VyQXV0aG9yaXphdGlvbjogdXNlckF1dGhvcml6YXRpb25cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VzZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50LCBhdHRyaWJ1cnRlc0FycmF5LCB0ZXh0KSA9PiB7XHJcbiAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGlmKCEhYXR0cmlidXJ0ZXNBcnJheSl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXR0cmlidXJ0ZXNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnVydGVzQXJyYXlbaV0ubmFtZSwgYXR0cmlidXJ0ZXNBcnJheVtpXS52YWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZighIXRleHQpe1xyXG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIH1cclxuICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9