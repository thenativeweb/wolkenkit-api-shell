import injectSheet from 'react-jss';
import React from 'react';
import { Headline, Link, Text } from 'thenativeweb-ux';

var styles = function styles(theme) {
  return {
    Configuration: {
      padding: theme.grid.stepSize * 2
    }
  };
};

var Configuration = function Configuration(_ref) {
  var classes = _ref.classes;
  return React.createElement(
    'div',
    { id: 'screen-information-configuration', className: classes.Configuration },
    React.createElement(
      Headline,
      null,
      'Configuration'
    ),
    React.createElement(
      Text,
      null,
      'The configuration of this application is available at ',
      React.createElement(
        Link,
        { href: '/v1/configuration.json' },
        '/v1/configuration.json'
      ),
      '.'
    )
  );
};

export default injectSheet(styles)(Configuration);