import classNames from 'classnames';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import React from 'react';

var styles = function styles(theme) {
  return {
    ListItem: {
      display: 'flex',
      'border-bottom': '1px solid ' + theme.color.brand.lightGrey,
      transition: 'background-color 200ms',
      'will-change': 'background-color',

      '&:hover': {
        background: theme.color.brand.lightGrey
      }
    }
  };
};

var ListItem = function ListItem(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      children = _ref.children;

  var itemClassNames = classNames(classes.ListItem, className);

  return React.createElement(
    'div',
    { className: itemClassNames },
    children
  );
};

ListItem.propTypes = {
  className: PropTypes.string
};

export default injectSheet(styles)(ListItem);