'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
  }

  _createClass(Modal, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var _this2 = this;

      var styleProps = this.props.headerStyle || {};
      return _react2.default.createElement(
        'div',
        { style: _extends({}, _styles2.default.modal.header, styleProps) },
        this.props.title ? _react2.default.createElement(
          'h5',
          { style: _styles2.default.modal.title },
          this.props.title
        ) : null,
        _react2.default.createElement(_reactFontawesome2.default, { name: 'times', onClick: function onClick() {
            return _this2.props.close();
          } })
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var styleProps = this.props.bodyStyle || {};
      return _react2.default.createElement(
        'div',
        { style: _extends({}, _styles2.default.modal.body, styleProps) },
        this.props.children
      );
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      return _react2.default.createElement(
        'div',
        { style: _styles2.default.containerModal },
        _react2.default.createElement(
          'div',
          { style: _extends({}, _styles2.default.modal, { width: this.getModalSize() }) },
          this.renderHeader(),
          this.renderBody()
        )
      );
    }
  }, {
    key: 'getModalSize',
    value: function getModalSize() {
      var size = '20vh';
      switch (this.props.size) {
        case 'sm':
          size = '50vh';
          break;
        case 'md':
          size = '80vh';
          break;
        case 'lg':
          size = '120vh';
          break;
      }
      return size;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.showing ? this.renderModal() : null;
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;