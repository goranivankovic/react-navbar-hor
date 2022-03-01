"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _ai = require("react-icons/ai");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Main = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n\nposition: fixed;\ntop: 0%;\nleft: 0%;\nheight: 7vh;\nwidth: 100%;\nbackground-color: #0D5DCD;\nz-index: 10;\nborder-bottom-left-radius: 5px;\nborder-bottom-right-radius: 5px;\ncolor: white;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\ncursor: pointer;\nfont-family: 'Righteous', cursive;\n\n\n@media only screen and (max-width: 768px) {\n  display: none;\n}\n\n"])));

var Logo = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\nwidth: 15%;\nheight: 7vh;\ndisplay: flex;\nalign-items: center;\njustify-content: space-around;\nfont-size: 1.4rem;\n\n\n@media only screen and (max-width: 992px) {\n  width: 15%;\n  height: 7vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 1.25rem;\n\n}\n\n\n"])));

var NavItems = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n\nwidth: 55%;\nheight:7vh;\ndisplay: flex;\nalign-items: center;\njustify-content: space-around;\nfont-size: 1.1rem;\nlist-style: none;\npadding-top: 15px;\n\nli{\n  height: 100%;\n}\n\nli a{\n  color: white;\n  text-decoration: none;\n\n\n}\n\n@media only screen and (max-width: 992px) {\n\n  width: 65%;\n  height:7vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 1rem;\n  list-style: none;\n  padding-top: 15px;\n\n\n}\n\n"])));

var Bars = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n\n  display: none;\n\n  @media only screen and (max-width: 768px) {\n    position: fixed;\n    right: 4%;\n    top: 1.5%;\n    z-index: 15;\n    color: white;\n    font-size: 1.5rem;\n    display: flex;\n  }\n\n  @media only screen and (max-width:600px) {\n\n    position: fixed;\n    right: 4%;\n    top: 2%;\n    z-index: 15;\n    color: white;\n    font-size: 1.3rem;\n    display: flex;\n  }\n\n"])));

var Main768 = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\nposition: fixed;\ntop: 0%;\nleft: 0%;\nheight: 9vh;\nwidth: 100%;\nbackground-color: #0D5DCD;\nz-index: 10;\nborder-bottom-left-radius: 5px;\nborder-bottom-right-radius: 5px;\ncolor: white;\ndisplay: none;\nalign-items: center;\njustify-content: space-between;\ncursor: pointer;\nfont-family: 'Righteous', cursive;\n\n@media only screen and (max-width: 768px) {\n       position: fixed;\n        top: 0%;\n        left: 0%;\n        height: 6vh;\n        width: 100%;\n        background-color: #0D5DCD;\n        z-index: 10;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n        color: white;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        cursor: pointer;\n        font-family: 'Righteous', cursive;\n        opacity: 0.80;\n\n}\n\n"])));

var NavItems768 = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n@media only screen and (max-width: 768px) {\n\n\n    height: 90%;\n    width: 100%;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    list-style: none;\n\n\n    li a{\n      color: white;\n      text-decoration: none;\n      font-size: 1rem;\n  }\n\n\n}\n@media only screen and (max-width:600px) {\n\n  li a{\n    color: white;\n    text-decoration: none;\n    font-size:.9rem;\n}\n}\n\n\n"])));

function SideBar(_ref) {
  var bgColor = _ref.bgColor,
      logo = _ref.logo,
      logoColor = _ref.logoColor,
      text_color = _ref.text_color,
      barsColor = _ref.barsColor,
      menuItems = _ref.menuItems;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      laz = _useState2[0],
      setLaz = _useState2[1];

  function navBar() {
    if (!laz) {
      var navItems768 = document.getElementById('navItems768');
      var main768 = document.getElementById('main768');
      navItems768.style.display = 'flex';
      main768.style.height = '50vh';
      setLaz(true);
    } else if (laz) {
      var _navItems = document.getElementById('navItems768');

      var _main = document.getElementById('main768');

      _navItems.style.display = 'none';
      _main.style.height = '7vh';
      setLaz(false);
    }
  }

  function closeNavItems() {
    setTimeout(function () {
      var navItems768 = document.getElementById('navItems768');
      var main768 = document.getElementById('main768');
      navItems768.style.display = 'none';
      main768.style.height = '7vh';
      setLaz(false);
    }, 1000);
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Main, {
    style: {
      background: bgColor
    }
  }, /*#__PURE__*/_react.default.createElement(Logo, {
    style: {
      color: logoColor
    }
  }, logo), /*#__PURE__*/_react.default.createElement(NavItems, null, menuItems.map(function (el) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: el
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "#".concat(el.toLowerCase()),
      style: {
        color: text_color
      }
    }, el), " ");
  }))), /*#__PURE__*/_react.default.createElement(Bars, null, /*#__PURE__*/_react.default.createElement(_ai.AiOutlineBars, {
    onClick: navBar,
    style: {
      color: barsColor
    }
  })), /*#__PURE__*/_react.default.createElement(Main768, {
    id: "main768",
    style: {
      background: bgColor
    }
  }, /*#__PURE__*/_react.default.createElement(NavItems768, {
    id: "navItems768"
  }, menuItems.map(function (el) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: el
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "#".concat(el.toLowerCase()),
      style: {
        color: text_color
      },
      onClick: closeNavItems
    }, el), " ");
  }))));
}

var _default = SideBar;
exports.default = _default;
