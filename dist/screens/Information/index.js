import Configuration from './Configuration';
import injectSheet from 'react-jss';

// import List from '../../components/List';
// import ListItemLink from '../../components/ListItemLink';
import React from 'react';
import { View } from 'thenativeweb-ux';
import { Route, Switch } from 'react-router-dom';

var styles = function styles() {
  return {
    Information: {}
  };
};

var Information = function Information(_ref) {
  var classes = _ref.classes;
  return React.createElement(
    View,
    { className: classes.Information, orientation: 'horizontal' },
    React.createElement(
      View,
      { adjust: 'flex', scrollable: 'auto' },
      React.createElement(
        Switch,
        null,
        React.createElement(Route, {
          path: '/info/configuration',
          component: Configuration
        })
      )
    )
  );
};

export default injectSheet(styles)(Information);