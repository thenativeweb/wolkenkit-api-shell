import injectSheet from 'react-jss';
import React from 'react';
import { Brand, Link, Product, View } from 'thenativeweb-ux';

var styles = function styles(theme) {
  return {
    '@keyframes AnimateLogo': {
      '0%': { transform: 'translateZ(-400px)', opacity: 0 },
      '10%': { opacity: 0 },
      '100%': { transform: 'translateZ(0px)', opacity: 1 }
    },
    '@keyframes AnimateTypo': {
      '0%': { transform: 'translateZ(-300px)', opacity: 0 },
      '40%': { opacity: 0 },
      '100%': { transform: 'translateZ(0px)', opacity: 1 }
    },
    '@keyframes AnimateMadeBy': {
      '0%': { transform: 'translateZ(-250px)', opacity: 0 },
      '50%': { opacity: 0 },
      '100%': { transform: 'translateZ(0px)', opacity: 1 }
    },
    StoreFront: {
      background: theme.color.brand.darkGrey,
      perspective: '1000px'
    },
    Logo: {
      'animation-name': 'AnimateLogo',
      'animation-duration': '4500ms',
      'animation-timing-function': 'cubic-bezier(0.190, 0.965, 0.165, 1)',
      'will-change': 'transform',
      '& > div': {
        width: 220,
        height: 220
      }
    },
    Typo: {
      'animation-name': 'AnimateTypo',
      'animation-duration': '2500ms',
      'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      'will-change': 'transform'
    },
    MadeBy: {
      'animation-name': 'AnimateMadeBy',
      'animation-delay': '500ms',
      'animation-duration': '2000ms',
      'animation-timing-function': 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
      'animation-fill-mode': 'both',
      'will-change': 'transform',
      'margin-top': theme.grid.stepSize * 1.5
    }
  };
};

var StoreFront = function StoreFront(_ref) {
  var classes = _ref.classes;
  return React.createElement(
    View,
    { className: classes.StoreFront, orientation: 'vertical', alignItems: 'center', justifyContent: 'center' },
    React.createElement(
      View,
      { orientation: 'vertical', alignItems: 'center', justifyContent: 'center' },
      React.createElement(
        'div',
        { id: 'wolkenkit-brand-logo', className: classes.Logo },
        React.createElement(Product, { name: 'wolkenkit', size: 'xl', isAnimated: true, type: 'logo-only' })
      ),
      React.createElement(
        'div',
        { id: 'wolkenkit-brand-typo', className: classes.Typo },
        React.createElement(
          Link,
          { href: 'http://www.wolkenkit.io', isExternal: true },
          React.createElement(Product, { name: 'wolkenkit', size: 'xl', isAnimated: true, type: 'typo-only' })
        )
      ),
      React.createElement(
        'div',
        { className: classes.MadeBy },
        React.createElement(Brand.MadeBy, null)
      )
    )
  );
};

export default injectSheet(styles)(StoreFront);