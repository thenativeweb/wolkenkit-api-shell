function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import classNames from 'classnames';
import injectSheet from 'react-jss';
import ListItem from '../ListItem';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Link, Text } from 'thenativeweb-ux';

var styles = function styles(theme) {
  return {
    ListItemLink: {
      '& $Link': {
        'flex-grow': 1,
        display: 'flex',
        'align-items': 'center',
        'text-decoration': 'none',
        padding: [theme.grid.stepSize * 0.5, theme.grid.stepSize * 2],
        'font-size': theme.font.size.medium,
        color: theme.color.brand.dark
      }
    },

    IsActive: {
      '& $Link': {
        color: theme.color.brand.highlight
      },
      '& $IconRight': {
        fill: theme.color.brand.highlight
      }
    },

    IconLeft: {
      'margin-right': theme.grid.stepSize
    },

    Label: {
      'flex-grow': 1,
      'flex-shrink': 1
    },

    IconRight: {
      'flex-grow': 0,
      'flex-shrink': 0,
      'margin-left': theme.grid.stepSize * 2
    },

    Link: {}
  };
};

var ListItemLink = function ListItemLink(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      icon = _ref.icon,
      isActive = _ref.isActive,
      label = _ref.label,
      href = _ref.href;

  var itemClassNames = classNames(classes.ListItemLink, _defineProperty({}, classes.IsActive, isActive === true), className);

  return React.createElement(
    ListItem,
    { className: itemClassNames },
    React.createElement(
      Link,
      { className: classes.Link, href: href },
      icon ? React.createElement(Icon, { className: classes.IconLeft, name: icon, size: 's' }) : null,
      React.createElement(
        Text,
        { className: classes.Label },
        label
      ),
      React.createElement(Icon, { className: classes.IconRight, name: 'chevron', size: 's' })
    )
  );
};

ListItemLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string
};

export default injectSheet(styles)(ListItemLink);