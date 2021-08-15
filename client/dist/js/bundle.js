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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _IconPickerField = __webpack_require__("./client/src/components/IconPickerField.js");

var _IconPickerField2 = _interopRequireDefault(_IconPickerField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    IconPickerField: _IconPickerField2.default
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/entwine/index.js");

__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/IconPickerField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _Injector = __webpack_require__(0);

var _FieldHolder = __webpack_require__(2);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconPickerField = function IconPickerField(props) {
  var id = props.id,
      name = props.name,
      source = props.source,
      _props$onChange = props.onChange,
      onChange = _props$onChange === undefined ? null : _props$onChange,
      _props$setInput = props.setInput,
      setInput = _props$setInput === undefined ? null : _props$setInput,
      PopoverOptionSetComponent = props.PopoverOptionSetComponent;

  console.log(props);

  var _useState = (0, _react.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var toggleOpen = function toggleOpen() {
    return setOpen(!open);
  };

  var handleValueChange = function handleValueChange(value) {
    if (onChange) {
      onChange(null, { id: id, value: value });
    }

    if (setInput) {
      setInput(name, value);
    }

    setValue(value);
  };

  var mapper = function mapper(_ref) {
    var title = _ref.title,
        value = _ref.value;
    return {
      content: "",
      key: value,
      className: value,
      onClick: function onClick() {
        return handleValueChange(value);
      }
    };
  };
  var buttons = source.map(mapper);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("button", {
      className: (0, _classnames2.default)("btn btn-outline-secondary", value),
      id: id + "__button"
    }),
    _react2.default.createElement(PopoverOptionSetComponent, {
      disableSearch: true,
      className: "",
      id: id,
      toggleText: "Select color",
      buttons: buttons,
      isOpen: open,
      toggle: toggleOpen,
      target: id + "__button"
    })
  );
};

exports.default = (0, _Injector.inject)(["PopoverOptionSet"], function (PopoverOptionSetComponent) {
  return { PopoverOptionSetComponent: PopoverOptionSetComponent };
}, function () {
  return "IconPickerField";
})((0, _FieldHolder2.default)(IconPickerField));

/***/ }),

/***/ "./client/src/legacy/entwine/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine("ss", function ($) {
  $(".js-injector-boot .icon-picker-field .icon-picker-field").entwine({
    onmatch: function onmatch() {
      var context = {};
      var IconPickerField = (0, _Injector.loadComponent)("IconPickerField", context);
      var state = this.data("state");

      var setValue = function setValue(fieldName, value) {
        var input = document.querySelector("input[name=\"" + fieldName + "\"]");

        debugger;

        if (!input) {
          return;
        }

        input.value = value;
      };

      _reactDom2.default.render(_react2.default.createElement(IconPickerField, _extends({}, state, { setValue: setValue })), this[0]);
    },
    onunmatch: function onunmatch() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
    }
  });
});

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map