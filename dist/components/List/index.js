import classNames from 'classnames';
import injectSheet from 'react-jss';
import React from 'react';

var styles = function styles(theme) {
  return {
    List: {
      background: theme.color.panelBackground,
      'line-height': '30px',
      overflow: 'hidden',
      'border-right': '1px solid ' + theme.color.brand.lightGrey,
      'min-width': 250
    },

    Header: {
      'font-size': theme.font.size.xlarge,
      'align-items': 'center',
      'border-bottom': '1px solid ' + theme.color.brand.lightGrey,
      'font-weight': 700
    }
  };
};

var Header = function Header(props) {
  var className = props.className,
      classes = props.classes,
      children = props.children;


  return React.createElement(
    'div',
    { className: classNames(classes.Header, className) },
    children
  );
};

var Body = function Body(_ref) {
  var children = _ref.children;

  return children;
};

var List = function List(_ref2) {
  var className = _ref2.className,
      classes = _ref2.classes,
      children = _ref2.children;

  return React.createElement(
    'div',
    { className: classNames(classes.List, className) },
    children
  );
};

List.Header = injectSheet(styles)(Header);
List.Body = Body;

export default injectSheet(styles)(List);