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

var wraper = document.getElementById('wrapper');
var authorizationForm = document.getElementById('authorization-form');

authorizationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var user = {
    login: this.login.value,
    pass: this.password.value
  };
  user.userAuthorization(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjRjODM3OGFiZWJiNWY1YjdmMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3VzZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIndyYXBlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhdXRob3JpemF0aW9uRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwibG9naW4iLCJ2YWx1ZSIsInBhc3MiLCJwYXNzd29yZCIsInVzZXJBdXRob3JpemF0aW9uIiwidXNlck5hbWUiLCJmaW5kVXNlciIsInNob3dNZXNzYWdlIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJuZXdEb21FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImF0dHJpYnVydGVzQXJyYXkiLCJ0ZXh0IiwibmV3RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInZhbCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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LElBQUksQ0FBWixFQUFlQSxJQUFJTyxpQkFBaUJOLE1BQXBDLEVBQTRDRCxHQUE1QyxFQUFnRDtBQUM5Q1MsaUJBQVdDLFlBQVgsQ0FBd0JILGlCQUFpQlAsQ0FBakIsRUFBb0JFLElBQTVDLEVBQWtESyxpQkFBaUJQLENBQWpCLEVBQW9CVyxHQUF0RTtBQUNEO0FBQ0Y7QUFDRCxNQUFHLENBQUMsQ0FBQ0gsSUFBTCxFQUFVO0FBQ1JDLGVBQVdHLFNBQVgsR0FBdUJKLElBQXZCO0FBQ0Q7QUFDRCxTQUFPQyxVQUFQO0FBQ0QsQ0FYRDs7a0JBYWU7QUFDYkwsaUJBQWVBO0FBREYsQzs7Ozs7OztBQ2ZmLHlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY0YzgzNzhhYmViYjVmNWI3ZjM0IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cbmxldCB3cmFwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xubGV0IGF1dGhvcml6YXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcml6YXRpb24tZm9ybScpO1xuXG5hdXRob3JpemF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdXNlciA9IHtcbiAgXHRsb2dpbjogdGhpcy5sb2dpbi52YWx1ZSxcbiAgXHRwYXNzOiB0aGlzLnBhc3N3b3JkLnZhbHVlXG4gIH1cbiAgdXNlci51c2VyQXV0aG9yaXphdGlvbih1c2VyKTtcbiAgdGhpcy5sb2dpbi52YWx1ZSA9ICcnO1xuICB0aGlzLnBhc3N3b3JkLnZhbHVlID0gJyc7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJpZFwiOjEsXCJuYW1lXCI6XCJUaW1pXCIsXCJwYXNzd29yZFwiOlwiY1ltdHlicEtNXCJ9LHtcImlkXCI6MixcIm5hbWVcIjpcIkVsZW5hXCIsXCJwYXNzd29yZFwiOlwiRXE4SDltRWwyXCJ9LHtcImlkXCI6MyxcIm5hbWVcIjpcIk1hdGhld1wiLFwicGFzc3dvcmRcIjpcImVHVlAwZkJcIn0se1wiaWRcIjo0LFwibmFtZVwiOlwiUmFuZGFsXCIsXCJwYXNzd29yZFwiOlwiUUx3UGRwbnVnXCJ9LHtcImlkXCI6NSxcIm5hbWVcIjpcIlJvY2t3ZWxsXCIsXCJwYXNzd29yZFwiOlwiUGlEOFY3bHU4dzVcIn0se1wiaWRcIjo2LFwibmFtZVwiOlwiU2lnZnJpZFwiLFwicGFzc3dvcmRcIjpcIkprSUowa2VpZGoyXCJ9LHtcImlkXCI6NyxcIm5hbWVcIjpcIkplYW5lbGxlXCIsXCJwYXNzd29yZFwiOlwicWFlODVkMVwifSx7XCJpZFwiOjgsXCJuYW1lXCI6XCJNYXJ5bFwiLFwicGFzc3dvcmRcIjpcIm9PT1N1NlBcIn0se1wiaWRcIjo5LFwibmFtZVwiOlwiUGhpbGlwXCIsXCJwYXNzd29yZFwiOlwiMDdGbGlvXCJ9LHtcImlkXCI6MTAsXCJuYW1lXCI6XCJLaXJieVwiLFwicGFzc3dvcmRcIjpcIldTVlJsYTBGXCJ9LHtcImlkXCI6MTEsXCJuYW1lXCI6XCJBbGlzdGVyXCIsXCJwYXNzd29yZFwiOlwiVmVueGkwQUZWXCJ9LHtcImlkXCI6MTIsXCJuYW1lXCI6XCJIZWxlbmVsaXphYmV0aFwiLFwicGFzc3dvcmRcIjpcImlzc1ZCSjRMM3lcIn0se1wiaWRcIjoxMyxcIm5hbWVcIjpcIk5vYWtcIixcInBhc3N3b3JkXCI6XCIzRGZsQnc0XCJ9LHtcImlkXCI6MTQsXCJuYW1lXCI6XCJCdXJuYXJkXCIsXCJwYXNzd29yZFwiOlwiN0hRSjkwZlwifSx7XCJpZFwiOjE1LFwibmFtZVwiOlwiTGF1cnluXCIsXCJwYXNzd29yZFwiOlwiMHpkUjZndFwifSx7XCJpZFwiOjE2LFwibmFtZVwiOlwiVG9tbGluXCIsXCJwYXNzd29yZFwiOlwidXp0VXgxXCJ9LHtcImlkXCI6MTcsXCJuYW1lXCI6XCJIZXl3b29kXCIsXCJwYXNzd29yZFwiOlwiUEZVTVZNUWVrVm1cIn0se1wiaWRcIjoxOCxcIm5hbWVcIjpcIlNlYW5cIixcInBhc3N3b3JkXCI6XCJFRjNBZXZOSWQwQVwifSx7XCJpZFwiOjE5LFwibmFtZVwiOlwiQ29ybGlzc1wiLFwicGFzc3dvcmRcIjpcIjRISlQybE8zXCJ9LHtcImlkXCI6MjAsXCJuYW1lXCI6XCJQZXBpdGFcIixcInBhc3N3b3JkXCI6XCJ2TWt2a2t4S2h1eVwifSx7XCJpZFwiOjIxLFwibmFtZVwiOlwiS25veFwiLFwicGFzc3dvcmRcIjpcIjRJaDdpMXVcIn0se1wiaWRcIjoyMixcIm5hbWVcIjpcIkZsb3JpZVwiLFwicGFzc3dvcmRcIjpcIlJXU0swalwifSx7XCJpZFwiOjIzLFwibmFtZVwiOlwiQ2hhcmlvdFwiLFwicGFzc3dvcmRcIjpcIlNwRzg4Rm5pWW94N1wifSx7XCJpZFwiOjI0LFwibmFtZVwiOlwiR2FycnlcIixcInBhc3N3b3JkXCI6XCJUcGlMa3hzczNqXCJ9LHtcImlkXCI6MjUsXCJuYW1lXCI6XCJGYWJlXCIsXCJwYXNzd29yZFwiOlwiMlJWZUNNOUdcIn0se1wiaWRcIjoyNixcIm5hbWVcIjpcIkF1cm9yYVwiLFwicGFzc3dvcmRcIjpcIklPVGpVSzVrUDBHSFwifSx7XCJpZFwiOjI3LFwibmFtZVwiOlwiQXVyYVwiLFwicGFzc3dvcmRcIjpcIk4zb0pRVHo5XCJ9LHtcImlkXCI6MjgsXCJuYW1lXCI6XCJHZXJpYW5uZVwiLFwicGFzc3dvcmRcIjpcIng5MnJvZGprbUVoeFwifSx7XCJpZFwiOjI5LFwibmFtZVwiOlwiTWFyZ2FyZXR0ZVwiLFwicGFzc3dvcmRcIjpcIlc1cjRESHIzcmVBelwifSx7XCJpZFwiOjMwLFwibmFtZVwiOlwiQW5kcmV3XCIsXCJwYXNzd29yZFwiOlwiMmY1NWRScm1PQTNtXCJ9LHtcImlkXCI6MzEsXCJuYW1lXCI6XCJQdXRuYW1cIixcInBhc3N3b3JkXCI6XCIwWFI4bk9cIn0se1wiaWRcIjozMixcIm5hbWVcIjpcIkNsYXVkaW5hXCIsXCJwYXNzd29yZFwiOlwieERUUk1DN2dKZVwifSx7XCJpZFwiOjMzLFwibmFtZVwiOlwiRHlhblwiLFwicGFzc3dvcmRcIjpcIm5ic0NWdVwifSx7XCJpZFwiOjM0LFwibmFtZVwiOlwiUnVkaWdlclwiLFwicGFzc3dvcmRcIjpcIk10TUxWNks5XCJ9LHtcImlkXCI6MzUsXCJuYW1lXCI6XCJSYWJiaVwiLFwicGFzc3dvcmRcIjpcInc3RlZEeVwifSx7XCJpZFwiOjM2LFwibmFtZVwiOlwiR29yYXVkXCIsXCJwYXNzd29yZFwiOlwiMDhLWUxQN1NHa0QxXCJ9LHtcImlkXCI6MzcsXCJuYW1lXCI6XCJOZXZpblwiLFwicGFzc3dvcmRcIjpcInM4WUV3SUZcIn0se1wiaWRcIjozOCxcIm5hbWVcIjpcIktlbm5cIixcInBhc3N3b3JkXCI6XCJVNHowMkM0TVNcIn0se1wiaWRcIjozOSxcIm5hbWVcIjpcIkJldmluXCIsXCJwYXNzd29yZFwiOlwiQkNlYVMxNzhpXCJ9LHtcImlkXCI6NDAsXCJuYW1lXCI6XCJCcmlnaXRcIixcInBhc3N3b3JkXCI6XCJoUU9rSWxESk9yXCJ9LHtcImlkXCI6NDEsXCJuYW1lXCI6XCJIYW5zXCIsXCJwYXNzd29yZFwiOlwiZ2FEWTNuT3hsOGVcIn0se1wiaWRcIjo0MixcIm5hbWVcIjpcIkxlbGlhXCIsXCJwYXNzd29yZFwiOlwiRzlDQzczbW14XCJ9LHtcImlkXCI6NDMsXCJuYW1lXCI6XCJXYWl0ZXJcIixcInBhc3N3b3JkXCI6XCJoU0VvV29cIn0se1wiaWRcIjo0NCxcIm5hbWVcIjpcIkdhcmVrXCIsXCJwYXNzd29yZFwiOlwibTZnMGNZYXVkTlVcIn0se1wiaWRcIjo0NSxcIm5hbWVcIjpcIkVtYWxpYVwiLFwicGFzc3dvcmRcIjpcInVLOHlHcWVYNFwifSx7XCJpZFwiOjQ2LFwibmFtZVwiOlwiU2lzc2llXCIsXCJwYXNzd29yZFwiOlwiR0VKYm11TDdYUjdwXCJ9LHtcImlkXCI6NDcsXCJuYW1lXCI6XCJKb3JyaWVcIixcInBhc3N3b3JkXCI6XCJRd2tibThac1wifSx7XCJpZFwiOjQ4LFwibmFtZVwiOlwiQXJsZXlcIixcInBhc3N3b3JkXCI6XCIycVNwV2ZGSjlcIn0se1wiaWRcIjo0OSxcIm5hbWVcIjpcIkJhaWxleVwiLFwicGFzc3dvcmRcIjpcImZ0OXZOTlVmWlwifSx7XCJpZFwiOjUwLFwibmFtZVwiOlwiR2VyaWtcIixcInBhc3N3b3JkXCI6XCJaZVYzV01hWFwifSx7XCJpZFwiOjUxLFwibmFtZVwiOlwiQXNobGVpZ2hcIixcInBhc3N3b3JkXCI6XCJKNk5JamxcIn0se1wiaWRcIjo1MixcIm5hbWVcIjpcIkhvYmllXCIsXCJwYXNzd29yZFwiOlwiVGJYS0VVM2gzeVkyXCJ9LHtcImlkXCI6NTMsXCJuYW1lXCI6XCJLcmlzdGluYVwiLFwicGFzc3dvcmRcIjpcIkVLNmpPaTB4XCJ9LHtcImlkXCI6NTQsXCJuYW1lXCI6XCJDaHJpc3RpYW5vXCIsXCJwYXNzd29yZFwiOlwiR0t6TmZpXCJ9LHtcImlkXCI6NTUsXCJuYW1lXCI6XCJMYW5leVwiLFwicGFzc3dvcmRcIjpcIkVrS3dnZFJsXCJ9LHtcImlkXCI6NTYsXCJuYW1lXCI6XCJFcm1pbmlhXCIsXCJwYXNzd29yZFwiOlwiaG4ybWRzT3BvQzJQXCJ9LHtcImlkXCI6NTcsXCJuYW1lXCI6XCJNYWRlbGxlXCIsXCJwYXNzd29yZFwiOlwiWGpkSndUVlwifSx7XCJpZFwiOjU4LFwibmFtZVwiOlwiTW96ZXNcIixcInBhc3N3b3JkXCI6XCJxekNhbVhaXCJ9LHtcImlkXCI6NTksXCJuYW1lXCI6XCJCcmFkZW5cIixcInBhc3N3b3JkXCI6XCJKeEIwWXlcIn0se1wiaWRcIjo2MCxcIm5hbWVcIjpcIklydmluZVwiLFwicGFzc3dvcmRcIjpcImtoUmZYcTlkcUF4TFwifSx7XCJpZFwiOjYxLFwibmFtZVwiOlwiVmxhZGltaXJcIixcInBhc3N3b3JkXCI6XCJVaEE3OTl5XCJ9LHtcImlkXCI6NjIsXCJuYW1lXCI6XCJHdW5uZXJcIixcInBhc3N3b3JkXCI6XCJpU09ZZ1F1d3hoaVwifSx7XCJpZFwiOjYzLFwibmFtZVwiOlwiQXVicmV5XCIsXCJwYXNzd29yZFwiOlwidExuQ3BhVGY5VlwifSx7XCJpZFwiOjY0LFwibmFtZVwiOlwiS2xhcmFcIixcInBhc3N3b3JkXCI6XCJHbjBDRmRyTTVcIn0se1wiaWRcIjo2NSxcIm5hbWVcIjpcIlJlZGZvcmRcIixcInBhc3N3b3JkXCI6XCJyUDZibDBNaTk5XCJ9LHtcImlkXCI6NjYsXCJuYW1lXCI6XCJNYXluZVwiLFwicGFzc3dvcmRcIjpcIm5DTVc3NlBcIn0se1wiaWRcIjo2NyxcIm5hbWVcIjpcIlRyYWNleVwiLFwicGFzc3dvcmRcIjpcIndjSWh3QXJTeUtnOVwifSx7XCJpZFwiOjY4LFwibmFtZVwiOlwiRWR1aW5vXCIsXCJwYXNzd29yZFwiOlwid0Q5cjFibDVXT2JSXCJ9LHtcImlkXCI6NjksXCJuYW1lXCI6XCJIYXJyaW90XCIsXCJwYXNzd29yZFwiOlwiblBuZDFOelwifSx7XCJpZFwiOjcwLFwibmFtZVwiOlwiUmhldGFcIixcInBhc3N3b3JkXCI6XCJMeDBKNUpcIn0se1wiaWRcIjo3MSxcIm5hbWVcIjpcIkl0Y2hcIixcInBhc3N3b3JkXCI6XCIyYmtPdUFcIn0se1wiaWRcIjo3MixcIm5hbWVcIjpcIkNvc21vXCIsXCJwYXNzd29yZFwiOlwiSlZlMVp0eDdoU1wifSx7XCJpZFwiOjczLFwibmFtZVwiOlwiRWxiZXJ0aW5lXCIsXCJwYXNzd29yZFwiOlwiYU9hRThmRlpGM0t4XCJ9LHtcImlkXCI6NzQsXCJuYW1lXCI6XCJDbGF1ZGV0dGVcIixcInBhc3N3b3JkXCI6XCJUdVJ1ZnJcIn0se1wiaWRcIjo3NSxcIm5hbWVcIjpcIkVkZHlcIixcInBhc3N3b3JkXCI6XCJ1dmJ4blN6MUE3XCJ9LHtcImlkXCI6NzYsXCJuYW1lXCI6XCJOaWtraVwiLFwicGFzc3dvcmRcIjpcImUwYmVFb1wifSx7XCJpZFwiOjc3LFwibmFtZVwiOlwiRWxzZVwiLFwicGFzc3dvcmRcIjpcInV2RmhWNTZNdlwifSx7XCJpZFwiOjc4LFwibmFtZVwiOlwiTWFydmluXCIsXCJwYXNzd29yZFwiOlwiMGRld21EXCJ9LHtcImlkXCI6NzksXCJuYW1lXCI6XCJCb2JieWVcIixcInBhc3N3b3JkXCI6XCJiSnlFd0hcIn0se1wiaWRcIjo4MCxcIm5hbWVcIjpcIkVhZGllXCIsXCJwYXNzd29yZFwiOlwiaEh0amFoQjlEamJcIn0se1wiaWRcIjo4MSxcIm5hbWVcIjpcIkFubmFsZWVcIixcInBhc3N3b3JkXCI6XCJlZUpieHFFazJcIn0se1wiaWRcIjo4MixcIm5hbWVcIjpcIkJyaWRlXCIsXCJwYXNzd29yZFwiOlwiTXlCcmtDXCJ9LHtcImlkXCI6ODMsXCJuYW1lXCI6XCJPbm9mcmVkb1wiLFwicGFzc3dvcmRcIjpcIm9tWnJQUUJCRlwifSx7XCJpZFwiOjg0LFwibmFtZVwiOlwiTG91aXNcIixcInBhc3N3b3JkXCI6XCI5cU9wdVVNXCJ9LHtcImlkXCI6ODUsXCJuYW1lXCI6XCJOYXRcIixcInBhc3N3b3JkXCI6XCJFdW5EWkhxemtDYlwifSx7XCJpZFwiOjg2LFwibmFtZVwiOlwiUm9sbGFuZFwiLFwicGFzc3dvcmRcIjpcIkhGbUo0TTFQYVFcIn0se1wiaWRcIjo4NyxcIm5hbWVcIjpcIlZhbmVzc2FcIixcInBhc3N3b3JkXCI6XCJNNHkwQVFPNHJwdTVcIn0se1wiaWRcIjo4OCxcIm5hbWVcIjpcIkxlb25lcmRcIixcInBhc3N3b3JkXCI6XCJ4NkcyVUpWNU9FXCJ9LHtcImlkXCI6ODksXCJuYW1lXCI6XCJXaWxtZXJcIixcInBhc3N3b3JkXCI6XCJzRHRvOGhmekdvWVwifSx7XCJpZFwiOjkwLFwibmFtZVwiOlwiTWFyaWVsXCIsXCJwYXNzd29yZFwiOlwiWW5CSkNRbTRFbXJ3XCJ9LHtcImlkXCI6OTEsXCJuYW1lXCI6XCJTdGFjaWFcIixcInBhc3N3b3JkXCI6XCJzSlpHRWp5bWpYXCJ9LHtcImlkXCI6OTIsXCJuYW1lXCI6XCJXZWxiaWVcIixcInBhc3N3b3JkXCI6XCJFNnBNU08wbUtrXCJ9LHtcImlkXCI6OTMsXCJuYW1lXCI6XCJNYXJnYXJldGVcIixcInBhc3N3b3JkXCI6XCJPTzZGcktiQ2k4ZVwifSx7XCJpZFwiOjk0LFwibmFtZVwiOlwiS2VsaWxhXCIsXCJwYXNzd29yZFwiOlwiQkRSRW1qTTNiXCJ9LHtcImlkXCI6OTUsXCJuYW1lXCI6XCJSYXNpYVwiLFwicGFzc3dvcmRcIjpcImdyYm1MNmFCUFwifSx7XCJpZFwiOjk2LFwibmFtZVwiOlwiR3VnbGllbG1hXCIsXCJwYXNzd29yZFwiOlwibGNEaWE0eE9lXCJ9LHtcImlkXCI6OTcsXCJuYW1lXCI6XCJHaWFuYVwiLFwicGFzc3dvcmRcIjpcIng0UUNaT1wifSx7XCJpZFwiOjk4LFwibmFtZVwiOlwiS2F0aGxpblwiLFwicGFzc3dvcmRcIjpcInFNV0FEaFwifSx7XCJpZFwiOjk5LFwibmFtZVwiOlwiTHVjaWFub1wiLFwicGFzc3dvcmRcIjpcIlAyc08xOFwifSx7XCJpZFwiOjEwMCxcIm5hbWVcIjpcIlJpYW5vblwiLFwicGFzc3dvcmRcIjpcIldaUUxlMkRFMGZcIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdXNlci91c2Vycy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzJztcbmltcG9ydCBkb20gZnJvbSAnLi4vZG9tJztcblxubGV0IHVzZXJBdXRob3JpemF0aW9uID0gKHVzZXIpID0+IHtcbiAgbGV0IHVzZXJOYW1lID0gZmluZFVzZXIodXNlcik7XG4gIGlmKHVzZXJOYW1lKXtcbiAgICBzaG93TWVzc2FnZSh1c2VyTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd01lc3NhZ2UoKTtcbiAgfVxufVxuXG5sZXQgZmluZFVzZXIgPSAodXNlcikgPT4ge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspe1xuICAgIGlmKHVzZXIubG9naW4gPT09IHVzZXJzW2ldLm5hbWUgJiYgdXNlci5wYXNzID09PSB1c2Vyc1tpXS5wYXNzd29yZCl7XG4gICAgICByZXR1cm4gdXNlcnNbaV0ubmFtZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmxldCBzaG93TWVzc2FnZSA9IChuYW1lKSA9PiB7XG4gIGxldCBuZXdEb21FbGVtZW50ID0ge307XG4gIGlmKCEhbmFtZSkge1xuICAgIG5ld0RvbUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudCgncCcsW3snY2xhc3MnOidvdXRwdXQgZ29vZCd9XSwgJ0hlbGxvLCAnICsgbmFtZSArICcuIEhvdyBhcmUgeW91PycpO1xuICB9IGVsc2Uge1xuICAgIG5ld0RvbUVsZW1lbnQgPSBkb20uY3JlYXRlRWxlbWVudCgncCcsW3snY2xhc3MnOidvdXRwdXQgYmFkJ31dLCAnTm8gdXNlciBmaW5kZWQuIFBsZWFzZSwgZW50ZXIgY29ycmVjdCBcImxvZ2luXCIgYW5kIFwicGFzc3dvcmRcIicpO1xuICB9XG4gIHdyYXBlci5hcHBlbmRDaGlsZChuZXdEb21FbGVtZW50KTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXNlckF1dGhvcml6YXRpb246IHVzZXJBdXRob3JpemF0aW9uXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3VzZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50LCBhdHRyaWJ1cnRlc0FycmF5LCB0ZXh0KSA9PiB7XHJcbiAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGlmKCEhYXR0cmlidXJ0ZXNBcnJheSl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXR0cmlidXJ0ZXNBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnVydGVzQXJyYXlbaV0ubmFtZSwgYXR0cmlidXJ0ZXNBcnJheVtpXS52YWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZighIXRleHQpe1xyXG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIH1cclxuICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9