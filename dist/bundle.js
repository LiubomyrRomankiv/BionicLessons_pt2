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

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = [{"id":1,"name":"Timi","password":"cYmtybpKM"},{"id":2,"name":"Elena","password":"Eq8H9mEl2"},{"id":3,"name":"Mathew","password":"eGVP0fB"},{"id":4,"name":"Randal","password":"QLwPdpnug"},{"id":5,"name":"Rockwell","password":"PiD8V7lu8w5"},{"id":6,"name":"Sigfrid","password":"JkIJ0keidj2"},{"id":7,"name":"Jeanelle","password":"qae85d1"},{"id":8,"name":"Maryl","password":"oOOSu6P"},{"id":9,"name":"Philip","password":"07Flio"},{"id":10,"name":"Kirby","password":"WSVRla0F"},{"id":11,"name":"Alister","password":"Venxi0AFV"},{"id":12,"name":"Helenelizabeth","password":"issVBJ4L3y"},{"id":13,"name":"Noak","password":"3DflBw4"},{"id":14,"name":"Burnard","password":"7HQJ90f"},{"id":15,"name":"Lauryn","password":"0zdR6gt"},{"id":16,"name":"Tomlin","password":"uztUx1"},{"id":17,"name":"Heywood","password":"PFUMVMQekVm"},{"id":18,"name":"Sean","password":"EF3AevNId0A"},{"id":19,"name":"Corliss","password":"4HJT2lO3"},{"id":20,"name":"Pepita","password":"vMkvkkxKhuy"},{"id":21,"name":"Knox","password":"4Ih7i1u"},{"id":22,"name":"Florie","password":"RWSK0j"},{"id":23,"name":"Chariot","password":"SpG88FniYox7"},{"id":24,"name":"Garry","password":"TpiLkxss3j"},{"id":25,"name":"Fabe","password":"2RVeCM9G"},{"id":26,"name":"Aurora","password":"IOTjUK5kP0GH"},{"id":27,"name":"Aura","password":"N3oJQTz9"},{"id":28,"name":"Gerianne","password":"x92rodjkmEhx"},{"id":29,"name":"Margarette","password":"W5r4DHr3reAz"},{"id":30,"name":"Andrew","password":"2f55dRrmOA3m"},{"id":31,"name":"Putnam","password":"0XR8nO"},{"id":32,"name":"Claudina","password":"xDTRMC7gJe"},{"id":33,"name":"Dyan","password":"nbsCVu"},{"id":34,"name":"Rudiger","password":"MtMLV6K9"},{"id":35,"name":"Rabbi","password":"w7FVDy"},{"id":36,"name":"Goraud","password":"08KYLP7SGkD1"},{"id":37,"name":"Nevin","password":"s8YEwIF"},{"id":38,"name":"Kenn","password":"U4z02C4MS"},{"id":39,"name":"Bevin","password":"BCeaS178i"},{"id":40,"name":"Brigit","password":"hQOkIlDJOr"},{"id":41,"name":"Hans","password":"gaDY3nOxl8e"},{"id":42,"name":"Lelia","password":"G9CC73mmx"},{"id":43,"name":"Waiter","password":"hSEoWo"},{"id":44,"name":"Garek","password":"m6g0cYaudNU"},{"id":45,"name":"Emalia","password":"uK8yGqeX4"},{"id":46,"name":"Sissie","password":"GEJbmuL7XR7p"},{"id":47,"name":"Jorrie","password":"Qwkbm8Zs"},{"id":48,"name":"Arley","password":"2qSpWfFJ9"},{"id":49,"name":"Bailey","password":"ft9vNNUfZ"},{"id":50,"name":"Gerik","password":"ZeV3WMaX"},{"id":51,"name":"Ashleigh","password":"J6NIjl"},{"id":52,"name":"Hobie","password":"TbXKEU3h3yY2"},{"id":53,"name":"Kristina","password":"EK6jOi0x"},{"id":54,"name":"Christiano","password":"GKzNfi"},{"id":55,"name":"Laney","password":"EkKwgdRl"},{"id":56,"name":"Erminia","password":"hn2mdsOpoC2P"},{"id":57,"name":"Madelle","password":"XjdJwTV"},{"id":58,"name":"Mozes","password":"qzCamXZ"},{"id":59,"name":"Braden","password":"JxB0Yy"},{"id":60,"name":"Irvine","password":"khRfXq9dqAxL"},{"id":61,"name":"Vladimir","password":"UhA799y"},{"id":62,"name":"Gunner","password":"iSOYgQuwxhi"},{"id":63,"name":"Aubrey","password":"tLnCpaTf9V"},{"id":64,"name":"Klara","password":"Gn0CFdrM5"},{"id":65,"name":"Redford","password":"rP6bl0Mi99"},{"id":66,"name":"Mayne","password":"nCMW76P"},{"id":67,"name":"Tracey","password":"wcIhwArSyKg9"},{"id":68,"name":"Eduino","password":"wD9r1bl5WObR"},{"id":69,"name":"Harriot","password":"nPnd1Nz"},{"id":70,"name":"Rheta","password":"Lx0J5J"},{"id":71,"name":"Itch","password":"2bkOuA"},{"id":72,"name":"Cosmo","password":"JVe1Ztx7hS"},{"id":73,"name":"Elbertine","password":"aOaE8fFZF3Kx"},{"id":74,"name":"Claudette","password":"TuRufr"},{"id":75,"name":"Eddy","password":"uvbxnSz1A7"},{"id":76,"name":"Nikki","password":"e0beEo"},{"id":77,"name":"Else","password":"uvFhV56Mv"},{"id":78,"name":"Marvin","password":"0dewmD"},{"id":79,"name":"Bobbye","password":"bJyEwH"},{"id":80,"name":"Eadie","password":"hHtjahB9Djb"},{"id":81,"name":"Annalee","password":"eeJbxqEk2"},{"id":82,"name":"Bride","password":"MyBrkC"},{"id":83,"name":"Onofredo","password":"omZrPQBBF"},{"id":84,"name":"Louis","password":"9qOpuUM"},{"id":85,"name":"Nat","password":"EunDZHqzkCb"},{"id":86,"name":"Rolland","password":"HFmJ4M1PaQ"},{"id":87,"name":"Vanessa","password":"M4y0AQO4rpu5"},{"id":88,"name":"Leonerd","password":"x6G2UJV5OE"},{"id":89,"name":"Wilmer","password":"sDto8hfzGoY"},{"id":90,"name":"Mariel","password":"YnBJCQm4Emrw"},{"id":91,"name":"Stacia","password":"sJZGEjymjX"},{"id":92,"name":"Welbie","password":"E6pMSO0mKk"},{"id":93,"name":"Margarete","password":"OO6FrKbCi8e"},{"id":94,"name":"Kelila","password":"BDREmjM3b"},{"id":95,"name":"Rasia","password":"grbmL6aBP"},{"id":96,"name":"Guglielma","password":"lcDia4xOe"},{"id":97,"name":"Giana","password":"x4QCZO"},{"id":98,"name":"Kathlin","password":"qMWADh"},{"id":99,"name":"Luciano","password":"P2sO18"},{"id":100,"name":"Rianon","password":"WZQLe2DE0f"}]

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _users = __webpack_require__(15);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wraper = document.getElementById('wrapper');
var authorizationForm = document.getElementById('authorization-form');

authorizationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var user = {
    login: this.login.value,
    pass: this.password.value
  };
  userAuthorization(user);
  this.login.value = '';
  this.password.value = '';
});

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
    newDomElement = createElement('p', [{ 'class': 'output good' }], 'Hello, ' + name + '. How are you?');
  } else {
    newDomElement = createElement('p', [{ 'class': 'output bad' }], 'No user finded. Please, enter correct "login" and "password"');
  }
  wraper.appendChild(newDomElement);
};

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

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzg3ZjNkNjgwN2Y3NDNlNmNmNjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3VzZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyJdLCJuYW1lcyI6WyJ3cmFwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXV0aG9yaXphdGlvbkZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImxvZ2luIiwidmFsdWUiLCJwYXNzIiwicGFzc3dvcmQiLCJ1c2VyQXV0aG9yaXphdGlvbiIsInVzZXJOYW1lIiwiZmluZFVzZXIiLCJzaG93TWVzc2FnZSIsImkiLCJsZW5ndGgiLCJuYW1lIiwibmV3RG9tRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJhdHRyaWJ1cnRlc0FycmF5IiwidGV4dCIsIm5ld0VsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ2YWwiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0RBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7OztBQ0hBLG1CQUFtQiw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSxrREFBa0QsRUFBRSxpREFBaUQsRUFBRSw4Q0FBOEMsRUFBRSwyQ0FBMkMsRUFBRSwyQ0FBMkMsRUFBRSw2Q0FBNkMsRUFBRSxnREFBZ0QsRUFBRSx3REFBd0QsRUFBRSwyQ0FBMkMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxrREFBa0QsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSxpREFBaUQsRUFBRSwyQ0FBMkMsRUFBRSw0Q0FBNEMsRUFBRSxtREFBbUQsRUFBRSwrQ0FBK0MsRUFBRSw0Q0FBNEMsRUFBRSxrREFBa0QsRUFBRSw0Q0FBNEMsRUFBRSxvREFBb0QsRUFBRSxzREFBc0QsRUFBRSxrREFBa0QsRUFBRSw0Q0FBNEMsRUFBRSxrREFBa0QsRUFBRSwwQ0FBMEMsRUFBRSwrQ0FBK0MsRUFBRSwyQ0FBMkMsRUFBRSxrREFBa0QsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSxnREFBZ0QsRUFBRSwrQ0FBK0MsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSwrQ0FBK0MsRUFBRSxrREFBa0QsRUFBRSw4Q0FBOEMsRUFBRSw4Q0FBOEMsRUFBRSwrQ0FBK0MsRUFBRSw2Q0FBNkMsRUFBRSw4Q0FBOEMsRUFBRSxpREFBaUQsRUFBRSxnREFBZ0QsRUFBRSxnREFBZ0QsRUFBRSw2Q0FBNkMsRUFBRSxtREFBbUQsRUFBRSw4Q0FBOEMsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSxrREFBa0QsRUFBRSwrQ0FBK0MsRUFBRSxpREFBaUQsRUFBRSxnREFBZ0QsRUFBRSw4Q0FBOEMsRUFBRSxpREFBaUQsRUFBRSw0Q0FBNEMsRUFBRSxrREFBa0QsRUFBRSxrREFBa0QsRUFBRSw4Q0FBOEMsRUFBRSwyQ0FBMkMsRUFBRSwwQ0FBMEMsRUFBRSwrQ0FBK0MsRUFBRSxxREFBcUQsRUFB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QUFqQixFQUFvQlcsR0FBdEU7QUFDRDtBQUNGO0FBQ0QsTUFBRyxDQUFDLENBQUNILElBQUwsRUFBVTtBQUNSQyxlQUFXRyxTQUFYLEdBQXVCSixJQUF2QjtBQUNEO0FBQ0QsU0FBT0MsVUFBUDtBQUNELENBWEQsQzs7Ozs7OztBQy9DQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ODdmM2Q2ODA3Zjc0M2U2Y2Y2NSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gW3tcImlkXCI6MSxcIm5hbWVcIjpcIlRpbWlcIixcInBhc3N3b3JkXCI6XCJjWW10eWJwS01cIn0se1wiaWRcIjoyLFwibmFtZVwiOlwiRWxlbmFcIixcInBhc3N3b3JkXCI6XCJFcThIOW1FbDJcIn0se1wiaWRcIjozLFwibmFtZVwiOlwiTWF0aGV3XCIsXCJwYXNzd29yZFwiOlwiZUdWUDBmQlwifSx7XCJpZFwiOjQsXCJuYW1lXCI6XCJSYW5kYWxcIixcInBhc3N3b3JkXCI6XCJRTHdQZHBudWdcIn0se1wiaWRcIjo1LFwibmFtZVwiOlwiUm9ja3dlbGxcIixcInBhc3N3b3JkXCI6XCJQaUQ4VjdsdTh3NVwifSx7XCJpZFwiOjYsXCJuYW1lXCI6XCJTaWdmcmlkXCIsXCJwYXNzd29yZFwiOlwiSmtJSjBrZWlkajJcIn0se1wiaWRcIjo3LFwibmFtZVwiOlwiSmVhbmVsbGVcIixcInBhc3N3b3JkXCI6XCJxYWU4NWQxXCJ9LHtcImlkXCI6OCxcIm5hbWVcIjpcIk1hcnlsXCIsXCJwYXNzd29yZFwiOlwib09PU3U2UFwifSx7XCJpZFwiOjksXCJuYW1lXCI6XCJQaGlsaXBcIixcInBhc3N3b3JkXCI6XCIwN0ZsaW9cIn0se1wiaWRcIjoxMCxcIm5hbWVcIjpcIktpcmJ5XCIsXCJwYXNzd29yZFwiOlwiV1NWUmxhMEZcIn0se1wiaWRcIjoxMSxcIm5hbWVcIjpcIkFsaXN0ZXJcIixcInBhc3N3b3JkXCI6XCJWZW54aTBBRlZcIn0se1wiaWRcIjoxMixcIm5hbWVcIjpcIkhlbGVuZWxpemFiZXRoXCIsXCJwYXNzd29yZFwiOlwiaXNzVkJKNEwzeVwifSx7XCJpZFwiOjEzLFwibmFtZVwiOlwiTm9ha1wiLFwicGFzc3dvcmRcIjpcIjNEZmxCdzRcIn0se1wiaWRcIjoxNCxcIm5hbWVcIjpcIkJ1cm5hcmRcIixcInBhc3N3b3JkXCI6XCI3SFFKOTBmXCJ9LHtcImlkXCI6MTUsXCJuYW1lXCI6XCJMYXVyeW5cIixcInBhc3N3b3JkXCI6XCIwemRSNmd0XCJ9LHtcImlkXCI6MTYsXCJuYW1lXCI6XCJUb21saW5cIixcInBhc3N3b3JkXCI6XCJ1enRVeDFcIn0se1wiaWRcIjoxNyxcIm5hbWVcIjpcIkhleXdvb2RcIixcInBhc3N3b3JkXCI6XCJQRlVNVk1RZWtWbVwifSx7XCJpZFwiOjE4LFwibmFtZVwiOlwiU2VhblwiLFwicGFzc3dvcmRcIjpcIkVGM0Fldk5JZDBBXCJ9LHtcImlkXCI6MTksXCJuYW1lXCI6XCJDb3JsaXNzXCIsXCJwYXNzd29yZFwiOlwiNEhKVDJsTzNcIn0se1wiaWRcIjoyMCxcIm5hbWVcIjpcIlBlcGl0YVwiLFwicGFzc3dvcmRcIjpcInZNa3Zra3hLaHV5XCJ9LHtcImlkXCI6MjEsXCJuYW1lXCI6XCJLbm94XCIsXCJwYXNzd29yZFwiOlwiNEloN2kxdVwifSx7XCJpZFwiOjIyLFwibmFtZVwiOlwiRmxvcmllXCIsXCJwYXNzd29yZFwiOlwiUldTSzBqXCJ9LHtcImlkXCI6MjMsXCJuYW1lXCI6XCJDaGFyaW90XCIsXCJwYXNzd29yZFwiOlwiU3BHODhGbmlZb3g3XCJ9LHtcImlkXCI6MjQsXCJuYW1lXCI6XCJHYXJyeVwiLFwicGFzc3dvcmRcIjpcIlRwaUxreHNzM2pcIn0se1wiaWRcIjoyNSxcIm5hbWVcIjpcIkZhYmVcIixcInBhc3N3b3JkXCI6XCIyUlZlQ005R1wifSx7XCJpZFwiOjI2LFwibmFtZVwiOlwiQXVyb3JhXCIsXCJwYXNzd29yZFwiOlwiSU9UalVLNWtQMEdIXCJ9LHtcImlkXCI6MjcsXCJuYW1lXCI6XCJBdXJhXCIsXCJwYXNzd29yZFwiOlwiTjNvSlFUejlcIn0se1wiaWRcIjoyOCxcIm5hbWVcIjpcIkdlcmlhbm5lXCIsXCJwYXNzd29yZFwiOlwieDkycm9kamttRWh4XCJ9LHtcImlkXCI6MjksXCJuYW1lXCI6XCJNYXJnYXJldHRlXCIsXCJwYXNzd29yZFwiOlwiVzVyNERIcjNyZUF6XCJ9LHtcImlkXCI6MzAsXCJuYW1lXCI6XCJBbmRyZXdcIixcInBhc3N3b3JkXCI6XCIyZjU1ZFJybU9BM21cIn0se1wiaWRcIjozMSxcIm5hbWVcIjpcIlB1dG5hbVwiLFwicGFzc3dvcmRcIjpcIjBYUjhuT1wifSx7XCJpZFwiOjMyLFwibmFtZVwiOlwiQ2xhdWRpbmFcIixcInBhc3N3b3JkXCI6XCJ4RFRSTUM3Z0plXCJ9LHtcImlkXCI6MzMsXCJuYW1lXCI6XCJEeWFuXCIsXCJwYXNzd29yZFwiOlwibmJzQ1Z1XCJ9LHtcImlkXCI6MzQsXCJuYW1lXCI6XCJSdWRpZ2VyXCIsXCJwYXNzd29yZFwiOlwiTXRNTFY2SzlcIn0se1wiaWRcIjozNSxcIm5hbWVcIjpcIlJhYmJpXCIsXCJwYXNzd29yZFwiOlwidzdGVkR5XCJ9LHtcImlkXCI6MzYsXCJuYW1lXCI6XCJHb3JhdWRcIixcInBhc3N3b3JkXCI6XCIwOEtZTFA3U0drRDFcIn0se1wiaWRcIjozNyxcIm5hbWVcIjpcIk5ldmluXCIsXCJwYXNzd29yZFwiOlwiczhZRXdJRlwifSx7XCJpZFwiOjM4LFwibmFtZVwiOlwiS2VublwiLFwicGFzc3dvcmRcIjpcIlU0ejAyQzRNU1wifSx7XCJpZFwiOjM5LFwibmFtZVwiOlwiQmV2aW5cIixcInBhc3N3b3JkXCI6XCJCQ2VhUzE3OGlcIn0se1wiaWRcIjo0MCxcIm5hbWVcIjpcIkJyaWdpdFwiLFwicGFzc3dvcmRcIjpcImhRT2tJbERKT3JcIn0se1wiaWRcIjo0MSxcIm5hbWVcIjpcIkhhbnNcIixcInBhc3N3b3JkXCI6XCJnYURZM25PeGw4ZVwifSx7XCJpZFwiOjQyLFwibmFtZVwiOlwiTGVsaWFcIixcInBhc3N3b3JkXCI6XCJHOUNDNzNtbXhcIn0se1wiaWRcIjo0MyxcIm5hbWVcIjpcIldhaXRlclwiLFwicGFzc3dvcmRcIjpcImhTRW9Xb1wifSx7XCJpZFwiOjQ0LFwibmFtZVwiOlwiR2FyZWtcIixcInBhc3N3b3JkXCI6XCJtNmcwY1lhdWROVVwifSx7XCJpZFwiOjQ1LFwibmFtZVwiOlwiRW1hbGlhXCIsXCJwYXNzd29yZFwiOlwidUs4eUdxZVg0XCJ9LHtcImlkXCI6NDYsXCJuYW1lXCI6XCJTaXNzaWVcIixcInBhc3N3b3JkXCI6XCJHRUpibXVMN1hSN3BcIn0se1wiaWRcIjo0NyxcIm5hbWVcIjpcIkpvcnJpZVwiLFwicGFzc3dvcmRcIjpcIlF3a2JtOFpzXCJ9LHtcImlkXCI6NDgsXCJuYW1lXCI6XCJBcmxleVwiLFwicGFzc3dvcmRcIjpcIjJxU3BXZkZKOVwifSx7XCJpZFwiOjQ5LFwibmFtZVwiOlwiQmFpbGV5XCIsXCJwYXNzd29yZFwiOlwiZnQ5dk5OVWZaXCJ9LHtcImlkXCI6NTAsXCJuYW1lXCI6XCJHZXJpa1wiLFwicGFzc3dvcmRcIjpcIlplVjNXTWFYXCJ9LHtcImlkXCI6NTEsXCJuYW1lXCI6XCJBc2hsZWlnaFwiLFwicGFzc3dvcmRcIjpcIko2TklqbFwifSx7XCJpZFwiOjUyLFwibmFtZVwiOlwiSG9iaWVcIixcInBhc3N3b3JkXCI6XCJUYlhLRVUzaDN5WTJcIn0se1wiaWRcIjo1MyxcIm5hbWVcIjpcIktyaXN0aW5hXCIsXCJwYXNzd29yZFwiOlwiRUs2ak9pMHhcIn0se1wiaWRcIjo1NCxcIm5hbWVcIjpcIkNocmlzdGlhbm9cIixcInBhc3N3b3JkXCI6XCJHS3pOZmlcIn0se1wiaWRcIjo1NSxcIm5hbWVcIjpcIkxhbmV5XCIsXCJwYXNzd29yZFwiOlwiRWtLd2dkUmxcIn0se1wiaWRcIjo1NixcIm5hbWVcIjpcIkVybWluaWFcIixcInBhc3N3b3JkXCI6XCJobjJtZHNPcG9DMlBcIn0se1wiaWRcIjo1NyxcIm5hbWVcIjpcIk1hZGVsbGVcIixcInBhc3N3b3JkXCI6XCJYamRKd1RWXCJ9LHtcImlkXCI6NTgsXCJuYW1lXCI6XCJNb3plc1wiLFwicGFzc3dvcmRcIjpcInF6Q2FtWFpcIn0se1wiaWRcIjo1OSxcIm5hbWVcIjpcIkJyYWRlblwiLFwicGFzc3dvcmRcIjpcIkp4QjBZeVwifSx7XCJpZFwiOjYwLFwibmFtZVwiOlwiSXJ2aW5lXCIsXCJwYXNzd29yZFwiOlwia2hSZlhxOWRxQXhMXCJ9LHtcImlkXCI6NjEsXCJuYW1lXCI6XCJWbGFkaW1pclwiLFwicGFzc3dvcmRcIjpcIlVoQTc5OXlcIn0se1wiaWRcIjo2MixcIm5hbWVcIjpcIkd1bm5lclwiLFwicGFzc3dvcmRcIjpcImlTT1lnUXV3eGhpXCJ9LHtcImlkXCI6NjMsXCJuYW1lXCI6XCJBdWJyZXlcIixcInBhc3N3b3JkXCI6XCJ0TG5DcGFUZjlWXCJ9LHtcImlkXCI6NjQsXCJuYW1lXCI6XCJLbGFyYVwiLFwicGFzc3dvcmRcIjpcIkduMENGZHJNNVwifSx7XCJpZFwiOjY1LFwibmFtZVwiOlwiUmVkZm9yZFwiLFwicGFzc3dvcmRcIjpcInJQNmJsME1pOTlcIn0se1wiaWRcIjo2NixcIm5hbWVcIjpcIk1heW5lXCIsXCJwYXNzd29yZFwiOlwibkNNVzc2UFwifSx7XCJpZFwiOjY3LFwibmFtZVwiOlwiVHJhY2V5XCIsXCJwYXNzd29yZFwiOlwid2NJaHdBclN5S2c5XCJ9LHtcImlkXCI6NjgsXCJuYW1lXCI6XCJFZHVpbm9cIixcInBhc3N3b3JkXCI6XCJ3RDlyMWJsNVdPYlJcIn0se1wiaWRcIjo2OSxcIm5hbWVcIjpcIkhhcnJpb3RcIixcInBhc3N3b3JkXCI6XCJuUG5kMU56XCJ9LHtcImlkXCI6NzAsXCJuYW1lXCI6XCJSaGV0YVwiLFwicGFzc3dvcmRcIjpcIkx4MEo1SlwifSx7XCJpZFwiOjcxLFwibmFtZVwiOlwiSXRjaFwiLFwicGFzc3dvcmRcIjpcIjJia091QVwifSx7XCJpZFwiOjcyLFwibmFtZVwiOlwiQ29zbW9cIixcInBhc3N3b3JkXCI6XCJKVmUxWnR4N2hTXCJ9LHtcImlkXCI6NzMsXCJuYW1lXCI6XCJFbGJlcnRpbmVcIixcInBhc3N3b3JkXCI6XCJhT2FFOGZGWkYzS3hcIn0se1wiaWRcIjo3NCxcIm5hbWVcIjpcIkNsYXVkZXR0ZVwiLFwicGFzc3dvcmRcIjpcIlR1UnVmclwifSx7XCJpZFwiOjc1LFwibmFtZVwiOlwiRWRkeVwiLFwicGFzc3dvcmRcIjpcInV2YnhuU3oxQTdcIn0se1wiaWRcIjo3NixcIm5hbWVcIjpcIk5pa2tpXCIsXCJwYXNzd29yZFwiOlwiZTBiZUVvXCJ9LHtcImlkXCI6NzcsXCJuYW1lXCI6XCJFbHNlXCIsXCJwYXNzd29yZFwiOlwidXZGaFY1Nk12XCJ9LHtcImlkXCI6NzgsXCJuYW1lXCI6XCJNYXJ2aW5cIixcInBhc3N3b3JkXCI6XCIwZGV3bURcIn0se1wiaWRcIjo3OSxcIm5hbWVcIjpcIkJvYmJ5ZVwiLFwicGFzc3dvcmRcIjpcImJKeUV3SFwifSx7XCJpZFwiOjgwLFwibmFtZVwiOlwiRWFkaWVcIixcInBhc3N3b3JkXCI6XCJoSHRqYWhCOURqYlwifSx7XCJpZFwiOjgxLFwibmFtZVwiOlwiQW5uYWxlZVwiLFwicGFzc3dvcmRcIjpcImVlSmJ4cUVrMlwifSx7XCJpZFwiOjgyLFwibmFtZVwiOlwiQnJpZGVcIixcInBhc3N3b3JkXCI6XCJNeUJya0NcIn0se1wiaWRcIjo4MyxcIm5hbWVcIjpcIk9ub2ZyZWRvXCIsXCJwYXNzd29yZFwiOlwib21aclBRQkJGXCJ9LHtcImlkXCI6ODQsXCJuYW1lXCI6XCJMb3Vpc1wiLFwicGFzc3dvcmRcIjpcIjlxT3B1VU1cIn0se1wiaWRcIjo4NSxcIm5hbWVcIjpcIk5hdFwiLFwicGFzc3dvcmRcIjpcIkV1bkRaSHF6a0NiXCJ9LHtcImlkXCI6ODYsXCJuYW1lXCI6XCJSb2xsYW5kXCIsXCJwYXNzd29yZFwiOlwiSEZtSjRNMVBhUVwifSx7XCJpZFwiOjg3LFwibmFtZVwiOlwiVmFuZXNzYVwiLFwicGFzc3dvcmRcIjpcIk00eTBBUU80cnB1NVwifSx7XCJpZFwiOjg4LFwibmFtZVwiOlwiTGVvbmVyZFwiLFwicGFzc3dvcmRcIjpcIng2RzJVSlY1T0VcIn0se1wiaWRcIjo4OSxcIm5hbWVcIjpcIldpbG1lclwiLFwicGFzc3dvcmRcIjpcInNEdG84aGZ6R29ZXCJ9LHtcImlkXCI6OTAsXCJuYW1lXCI6XCJNYXJpZWxcIixcInBhc3N3b3JkXCI6XCJZbkJKQ1FtNEVtcndcIn0se1wiaWRcIjo5MSxcIm5hbWVcIjpcIlN0YWNpYVwiLFwicGFzc3dvcmRcIjpcInNKWkdFanltalhcIn0se1wiaWRcIjo5MixcIm5hbWVcIjpcIldlbGJpZVwiLFwicGFzc3dvcmRcIjpcIkU2cE1TTzBtS2tcIn0se1wiaWRcIjo5MyxcIm5hbWVcIjpcIk1hcmdhcmV0ZVwiLFwicGFzc3dvcmRcIjpcIk9PNkZyS2JDaThlXCJ9LHtcImlkXCI6OTQsXCJuYW1lXCI6XCJLZWxpbGFcIixcInBhc3N3b3JkXCI6XCJCRFJFbWpNM2JcIn0se1wiaWRcIjo5NSxcIm5hbWVcIjpcIlJhc2lhXCIsXCJwYXNzd29yZFwiOlwiZ3JibUw2YUJQXCJ9LHtcImlkXCI6OTYsXCJuYW1lXCI6XCJHdWdsaWVsbWFcIixcInBhc3N3b3JkXCI6XCJsY0RpYTR4T2VcIn0se1wiaWRcIjo5NyxcIm5hbWVcIjpcIkdpYW5hXCIsXCJwYXNzd29yZFwiOlwieDRRQ1pPXCJ9LHtcImlkXCI6OTgsXCJuYW1lXCI6XCJLYXRobGluXCIsXCJwYXNzd29yZFwiOlwicU1XQURoXCJ9LHtcImlkXCI6OTksXCJuYW1lXCI6XCJMdWNpYW5vXCIsXCJwYXNzd29yZFwiOlwiUDJzTzE4XCJ9LHtcImlkXCI6MTAwLFwibmFtZVwiOlwiUmlhbm9uXCIsXCJwYXNzd29yZFwiOlwiV1pRTGUyREUwZlwifV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91c2VyL3VzZXJzLmpzb25cbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnMnO1xuXG5sZXQgd3JhcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcbmxldCBhdXRob3JpemF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3JpemF0aW9uLWZvcm0nKTtcblxuYXV0aG9yaXphdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHVzZXIgPSB7XG4gIFx0bG9naW46IHRoaXMubG9naW4udmFsdWUsXG4gIFx0cGFzczogdGhpcy5wYXNzd29yZC52YWx1ZVxuICB9XG4gIHVzZXJBdXRob3JpemF0aW9uKHVzZXIpO1xuICB0aGlzLmxvZ2luLnZhbHVlID0gJyc7XG4gIHRoaXMucGFzc3dvcmQudmFsdWUgPSAnJztcbn0pO1xuXG5sZXQgdXNlckF1dGhvcml6YXRpb24gPSAodXNlcikgPT4ge1xuICBsZXQgdXNlck5hbWUgPSBmaW5kVXNlcih1c2VyKTtcbiAgaWYodXNlck5hbWUpe1xuICAgIHNob3dNZXNzYWdlKHVzZXJOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93TWVzc2FnZSgpO1xuICB9XG59XG5cbmxldCBmaW5kVXNlciA9ICh1c2VyKSA9PiB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKyl7XG4gICAgaWYodXNlci5sb2dpbiA9PT0gdXNlcnNbaV0ubmFtZSAmJiB1c2VyLnBhc3MgPT09IHVzZXJzW2ldLnBhc3N3b3JkKXtcbiAgICAgIHJldHVybiB1c2Vyc1tpXS5uYW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubGV0IHNob3dNZXNzYWdlID0gKG5hbWUpID0+IHtcbiAgbGV0IG5ld0RvbUVsZW1lbnQgPSB7fTtcbiAgaWYoISFuYW1lKSB7XG4gICAgbmV3RG9tRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLFt7J2NsYXNzJzonb3V0cHV0IGdvb2QnfV0sICdIZWxsbywgJyArIG5hbWUgKyAnLiBIb3cgYXJlIHlvdT8nKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdEb21FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgncCcsW3snY2xhc3MnOidvdXRwdXQgYmFkJ31dLCAnTm8gdXNlciBmaW5kZWQuIFBsZWFzZSwgZW50ZXIgY29ycmVjdCBcImxvZ2luXCIgYW5kIFwicGFzc3dvcmRcIicpO1xuICB9XG4gIHdyYXBlci5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50KTtcbn1cblxubGV0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCwgYXR0cmlidXJ0ZXNBcnJheSwgdGV4dCkgPT4ge1xuICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gIGlmKCEhYXR0cmlidXJ0ZXNBcnJheSl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGF0dHJpYnVydGVzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXJ0ZXNBcnJheVtpXS5uYW1lLCBhdHRyaWJ1cnRlc0FycmF5W2ldLnZhbCk7XG4gICAgfVxuICB9XG4gIGlmKCEhdGV4dCl7XG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICB9XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91c2VyL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==